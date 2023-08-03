import './styles.css';
import {
  fetchMOviecards, movieList1, movieList2, movieList3,
} from './modules/movie-cards.js';
import locationInfo from './geolocation.js';
import { ResetComments, postComment, validationcomments } from './modules/comments.js';
import { ResetReservations, postReservation, validation } from './modules/reservations.js';
import { fetchPeople } from './modules/people.js';

const heightofContainer = document.querySelector('#article-container').clientHeight * 0.3;
const footerTop = () => {
  const footer = document.querySelector('footer');
  footer.style.top = `${heightofContainer}px`;
};
window.addEventListener('load', footerTop);

// RENDERING CARDS
const fetchLocationAndMovieCards = async () => {
  const locationDetails = await locationInfo();
  console.log(locationDetails);
  // Attach click event listener to fetch movie cards
  movieList1.forEach((btn) => { btn.addEventListener('click', () => { fetchMOviecards('https://api.tvmaze.com/shows'); }); });
  movieList2.forEach((btn) => {
    btn.addEventListener('click', () => {
      fetchMOviecards('https://api.tvmaze.com/schedule/full');
    });
  });
  movieList3.forEach((btn) => {
    btn.addEventListener('click', () => {
      fetchPeople('https://api.tvmaze.com/people');
    });
  });
};
window.addEventListener('DOMContentLoaded', () => {
  console.log('initial movies have loaded');
  fetchMOviecards('https://api.tvmaze.com/shows');
});

// Call the function to fetch location details and movie cards
fetchLocationAndMovieCards();

const FORM = document.querySelector('form');
FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const numElements = FORM.elements.length;
  console.log(numElements);

  if (numElements === 3 && validationcomments(FORM)) {
    postComment();
    ResetComments(FORM);
  } else if (numElements === 4 && validation(FORM)) {
    postReservation();
    ResetReservations(FORM);
  }
});