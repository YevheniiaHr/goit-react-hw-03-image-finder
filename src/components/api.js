import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '39635848-10cc8cbd77891d85da4020fd9';

export const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export const sortedImages = array =>
  array.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
