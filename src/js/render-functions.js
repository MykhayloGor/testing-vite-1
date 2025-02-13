import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export { renderGallery, loader, iziToast, SimpleLightbox };

function renderGallery(images) {
  const markup = images
    .map(
      img => `
      <div class="image-card">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <p>Likes: ${img.likes} | Views: ${img.views}</p>
        <p>Comments: ${img.comments} | Downloads: ${img.downloads}</p>
      </div>
    `
    )
    .join('');

  gallery.innerHTML = markup;
}
