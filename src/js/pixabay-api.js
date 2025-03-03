import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '49097244-8862dd375f26540a0b3f58369',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImages(searchName) {
  return instance.get('/', { params: { q: searchName } }).then(res => res.data);
}
