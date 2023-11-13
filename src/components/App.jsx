import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import { fetchImages, sortedImages } from './api.js';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imgItems: [],
    searchItem: '',
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, PrevState) {
    if (
      PrevState.searchItem !== this.state.searchItem ||
      PrevState.currentPage !== this.state.currentPage
    ) {
      this.renderImages();
    }
  }

  handleSubmit = query => {
    this.setState({
      searchItem: query,
      imgItems: [],
      currentPage: 1,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  renderImages = async () => {
    const { searchItem, currentPage } = this.state;

    try {
      this.setState({ isLoading: true });
      const images = await fetchImages(searchItem, currentPage);
      if (images.hits.length === 0) {
        return toast.info('Sorry image not found!');
      }
      const normalizedImg = sortedImages(images.hits);

      this.setState(state => ({
        imgItems: [...state.imgItems, ...normalizedImg],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(images.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { imgItems, isLoading, currentPage, totalPages } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {imgItems.length > 0 ? (
          <ImageGallery images={imgItems} />
        ) : (
          <p
            style={{
              padding: 150,
              textAlign: 'center',
              fontSize: 32,
            }}
          >
            Gallery is empty
          </p>
        )}
        {isLoading && <Loader />}
        {imgItems.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
        <Toaster />
      </Container>
    );
  }
}
