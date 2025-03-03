import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { showGallery } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('#search-input'),
  searchButton: document.querySelector('button[data-start]'),
  gallery: document.querySelector('.gallery'),
  jsLoader: document.querySelector('.js-loader'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  refs.gallery.innerHTML = '';

  let searchName = e.target.elements.query.value.trim();

  if (!searchName) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  refs.jsLoader.innerHTML = '<span class="loader"></span>';
  getImages(searchName)
    .then(data => {
      if (data.hits.length == 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',

          backgroundColor: '#ef4040',
          position: 'topRight',
        });
      } else {
        showGallery(data.hits);
      }
      refs.jsLoader.textContent = '';
    })
    .catch(error => {
      console.log(error);
    });

  e.target.reset();
});
