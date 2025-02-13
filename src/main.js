import fetchImages from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = form.elements.query.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        loader.classList.add('hidden');
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      renderGallery(images);
      lightbox.refresh();

      setTimeout(() => {
        loader.classList.add('hidden');
      }, 200);
    })
    .catch(error => {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 200);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images',
        position: 'topRight',
      });
    });
});
