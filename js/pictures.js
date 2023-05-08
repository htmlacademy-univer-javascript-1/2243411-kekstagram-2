import {openBigPhoto} from './big-photo.js';

const pictures = document.querySelector('.pictures');

const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

let photos = [];

const showPhoto = (photosArray) => {
  photos = photosArray;
  const arr = photosArray || [];
  arr.forEach(({url, comments, likes}, index)  => {
    const miniatureElement = picturesTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').setAttribute('photo-index', index);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    fragment.appendChild(miniatureElement);
  });
  pictures.appendChild(fragment);
};

const hidePhotos = () => {
  pictures.querySelectorAll('.picture').forEach((miniatureElement) => {
    miniatureElement.remove();
  });
};

const photoClick = function (evt) {
  if (evt.target.nodeName === 'IMG') {
    evt.preventDefault();
    openBigPhoto(photos[evt.target.getAttribute('photo-index')]);
  }
};

pictures.addEventListener('click', photoClick);

export {showPhoto, hidePhotos};
