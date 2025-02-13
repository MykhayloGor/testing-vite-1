import axios from 'axios';

const API_KEY = '48704705-de0108bea4c192368cade13d3';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios
    .get(BASE_URL, { params })
    .then(res => res.data.hits)
    .catch(error => console.log('Error fetching images', error));
  return [];
}
