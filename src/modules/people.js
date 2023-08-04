import { loadComments, revertChanges, submit } from './comments.js';
import { loadLikes, updateAPIlikes } from './likes.js';
import {
  Xbutton, centerModal, closePopup, openPopup,
} from './pop-up.js';
import { loadReservations } from './reservations.js';

export const getPopupinfoforPeople = (e) => {
  const article = e.target.closest('article');
  const nameofperson = article.querySelector('h3').textContent;
  const picture = article.querySelector('img');
  const imagesource = picture.getAttribute('src');
  const gender = article.querySelector('.gender').textContent;
  const birthday = article.querySelector('.birthday').textContent;
  const deathday = article.querySelector('.deathday').textContent;
  const countryoforigin = article.querySelector('.country-of-origin').textContent;
  const id = article.querySelector('.id').textContent;
  return {
    nameofperson,
    imagesource,
    gender,
    birthday,
    deathday,
    countryoforigin,
    id,
  };
};

export const fillPopupwithinfoforPeople = (e) => {
  if (e.target.classList.contains('movie-btn')) {
    const hiddenPopupinfo = getPopupinfoforPeople(e);
    const popupContainer = document.querySelector('#pop-up-container');
    const movieNameElement = popupContainer.querySelector('#movie-name');
    const movieInfo1Element = popupContainer.querySelector('.movie-info1');
    const movieInfo2Element = popupContainer.querySelector('.movie-info2');
    const movieInfo3Element = popupContainer.querySelector('.movie-info3');
    const movieInfo4Element = popupContainer.querySelector('.movie-info4');
    const movieImageConatiner = popupContainer.querySelector('.movie-img');
    const movieImage = movieImageConatiner.querySelector('img');
    const movieid = popupContainer.querySelector('.id-pop-up');

    movieNameElement.textContent = hiddenPopupinfo.nameofperson;
    movieInfo1Element.textContent = hiddenPopupinfo.gender;
    movieid.textContent = hiddenPopupinfo.id; // error
    movieInfo2Element.textContent = hiddenPopupinfo.countryoforigin;
    movieImage.setAttribute('src', hiddenPopupinfo.imagesource);
    movieInfo3Element.textContent = hiddenPopupinfo.birthday;
    movieInfo4Element.textContent = hiddenPopupinfo.deathday;
  }
};

export const updatingpopupHtmlforPeople = (e, Formi) => {
  if (Formi.elements.length === 3) {
    fillPopupwithinfoforPeople(e);
    const popupContainer = document.querySelector('#pop-up-container');
    const nameofsection = popupContainer.querySelector('h4');
    nameofsection.textContent = 'Reservations:';
    const form = popupContainer.querySelector('form');
    const textarea = form.querySelector('textarea');
    if (textarea) {
      const firstInput = form.querySelector('#name-of-commenter');
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      const newInput1 = document.createElement('input');
      newInput1.addEventListener('input', () => {
        if (regex.test(newInput1.value)) {
          newInput1.style.border = '2px solid green';
        } else {
          newInput1.style.border = '2px solid red';
          newInput1.reportValidity();
          newInput1.setCustomValidity('please let date match this pattern YYYY-MM-DD !!!');
        }
      });
      newInput1.type = 'text';
      newInput1.name = '';
      newInput1.id = 'date1';
      newInput1.setAttribute('class', 'reservationinput');
      newInput1.placeholder = 'start date';
      newInput1.maxLength = 25;
      newInput1.required = true;
      const newInput2 = document.createElement('input');
      newInput2.type = 'text';
      newInput2.name = '';
      newInput2.id = 'date2';
      newInput2.setAttribute('class', 'reservationinput');
      newInput2.placeholder = 'end date';
      newInput2.maxLength = 25;
      newInput2.required = true;
      submit.textContent = 'Reserve';
      newInput2.addEventListener('input', () => {
        if (regex.test(newInput2.value)) {
          newInput2.setCustomValidity('');
          newInput2.style.border = '2px solid green';
        } else {
          newInput2.style.border = '2px solid red';
          newInput2.reportValidity();
          newInput2.setCustomValidity('please let date match this pattern YYYY-MM-DD !!!');
        }
      });
      // Remove the textarea element
      textarea.remove();

      // Insert new input elements after the first input and before the button
      form.insertBefore(newInput2, firstInput.nextSibling);
      form.insertBefore(newInput1, firstInput.nextSibling);
    }
  }
};

export const handlepopupforPeople = (button) => {
  button.forEach((btn) => {
    const FORM = document.querySelector('form');
    // const numElements = FORM.elements.length;
    btn.addEventListener('click', (e) => {
      openPopup();
      centerModal();
      fillPopupwithinfoforPeople(e);
      Xbutton.addEventListener('click', closePopup);

      // Get the target element once to avoid redundant lookups
      const targetElement = e.target;

      if (targetElement.classList.contains('reservations-btn')) {
        updatingpopupHtmlforPeople(e, FORM);
        loadReservations(e);
      } else {
        revertChanges(FORM);
        loadComments(e);
      }
    });
  });
};

export const fetchPeople = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movieCards = data.slice(0, 9);
    const movieCardsContainer = document.querySelector('#article-container');
    movieCardsContainer.innerHTML = '';

    movieCards.forEach((movieCard) => {
      if (movieCard) {
        const movieCardElement = document.createElement('article');
        movieCardElement.classList.add('movie-item');
        movieCardElement.innerHTML = `
            <img class="usethisimage" src="${movieCard.image.medium}" alt="img" />
            <h3>${movieCard.name}</h3>
            <div class="movie-title flex-row">
              <div class="likes flex-column">
                <i class="fa-solid fa-heart"></i>
                <span><i class="count-likes">0</i> likes</span>
              </div>
            </div>
            <div class="container-btn">
              <button type="button" class="movie-btn">Comments</button>
              <button type="button" class="movie-btn reservations-btn">Reservations</button>
            </div>
            <span class="hidden-class gender ">${movieCard.gender}</span>
            <span class="hidden-class pop-up-API-image ">${movieCard.image.original}</span>
            <span class="hidden-class birthday ">${movieCard.birthday}</span>
            <span class="hidden-class deathday ">${movieCard.deathday}</span>
            <span class="hidden-class country-of-origin ">${movieCard.country.name}</span>
            <span class="hidden-class id ">${movieCard.updated}</span>
          `;
        const likeBtn = movieCardElement.querySelector('.fa-heart');
        likeBtn.addEventListener('click', (e) => updateAPIlikes(e));
        loadLikes(movieCardElement);
        const BUTTON = movieCardElement.querySelectorAll('.movie-btn');
        handlepopupforPeople(BUTTON);

        movieCardsContainer.appendChild(movieCardElement);
      } else {
        throw new Error('Invalid movie card data:', movieCard);
      }
    });
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};
