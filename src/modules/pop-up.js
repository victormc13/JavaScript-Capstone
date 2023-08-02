import { revertChanges, loadComments } from "./comments.js";
import { updatingpopupHtml, loadReservations } from "./reservations.js";
export const movieBtn = document.querySelectorAll('.movie-btn');
const popUpContainer = document.querySelector('#pop-up-container');
export const openPopup = () => {
  popUpContainer.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Remove scroll from the window
  document.querySelector('.overlay').style.display = 'block';
};
export const closePopup = () => {
  popUpContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.querySelector('.overlay').style.display = 'none';
};
export const Xbutton = popUpContainer.querySelector('#cancel-icon');
// CENTERING MY POPUP...........................................

function pxToVh(px) {
  return (px / window.innerHeight) * 100;
}

function pxToVw(px) {
  return (px / window.innerWidth) * 100;
}
export function centerModal() {
  const modalContent = document.querySelector('#pop-up-container');

  const modalWidth = pxToVw(modalContent.offsetWidth);
  const modalHeight = pxToVh(modalContent.offsetHeight);

  const leftPosition = (100 - modalWidth) / 2;
  const topPosition = (100 - modalHeight) / 2;

  modalContent.style.left = `${leftPosition}vw`;
  modalContent.style.top = `${topPosition}vh`;
  modalContent.style.bottom = `${topPosition}vh`;
  modalContent.style.right = `${leftPosition}vw`;
}

// POP-UP INFO..........................................
export const getPopupinfo = (e) => {
  const article = e.target.closest('article');
  const movieTitle = article.querySelector('h3').textContent;
  const movieImage = article.querySelector('img');
  const imagesource = movieImage.getAttribute('src');
  const overview = article.querySelector('.overview').textContent;
  const language = article.querySelector('.language').textContent;
  const releaseDate = article.querySelector('.release-date').textContent;
  const type = article.querySelector('.type').textContent;
  const countryshowing = article.querySelector('.country-showing').textContent;
  const genre = article.querySelector('.genre').textContent;
  const id = article.querySelector('.id').textContent;
  const genreArray = genre.split(',');
  return {
    movieTitle,
    imagesource,
    overview,
    language,
    releaseDate,
    type,
    countryshowing,
    genreArray,
    id,
  };
};

export const fillPopupwithinfo = (e) => {
  if (e.target.classList.contains('movie-btn')) {
    const hiddenPopupinfo = getPopupinfo(e);
    const popupContainer = document.querySelector('#pop-up-container');
    const movieNameElement = popupContainer.querySelector('#movie-name');
    const movieInfo1Element = popupContainer.querySelector('.movie-info1');
    const movieInfo2Element = popupContainer.querySelector('.movie-info2');
    const movieInfo3Element = popupContainer.querySelector('.movie-info3');
    const movieInfo4Element = popupContainer.querySelector('.movie-info4');
    const movieImageConatiner = popupContainer.querySelector('.movie-img');
    const movieImage = movieImageConatiner.querySelector('img');
    const movieid = popupContainer.querySelector('.id-pop-up');

    movieNameElement.textContent = hiddenPopupinfo.movieTitle;
    movieInfo1Element.textContent = hiddenPopupinfo.overview;
    movieid.textContent = hiddenPopupinfo.id;
    movieInfo2Element.textContent = hiddenPopupinfo.language;
    movieInfo3Element.textContent = hiddenPopupinfo.type;
    movieImage.setAttribute('src', hiddenPopupinfo.imagesource)
    movieInfo4Element.textContent = `${hiddenPopupinfo.genreArray[0]}, ${hiddenPopupinfo.genreArray[1]}, ${hiddenPopupinfo.genreArray[2]}`;
  }
};

export const handlepopup = (button) => {
  button.forEach((btn) => {
    const FORM = document.querySelector('form');
    const numElements = FORM.elements.length;
    btn.addEventListener('click', (e) => {
      openPopup();
      centerModal();
      fillPopupwithinfo(e);
      Xbutton.addEventListener('click', closePopup);

      const targetElement = e.target;

      if (targetElement.classList.contains('reservations-btn')) {
        updatingpopupHtml(e, FORM);
        loadReservations(e);
      } else {
        revertChanges(FORM);
        loadComments(e);
      }
    });
  });
}