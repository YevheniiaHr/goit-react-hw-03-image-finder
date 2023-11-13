import { Component } from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;
    return (
      <>
        <GalleryItem>
          <GalleryImg
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.openModal}
          />

          <ModalWindow
            isOpen={isModalOpen}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={this.closeModal}
          />
        </GalleryItem>
      </>
    );
  }
}
