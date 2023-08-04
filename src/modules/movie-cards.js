import { loadLikes, updateAPIlikes } from './likes.js';
import moviesCount from './moviesCount.js';
import { handlepopup } from './pop-up.js';

export const movieList1 = document.querySelectorAll('.movie-list1');
export const movieList2 = document.querySelectorAll('.movie-list2');
export const movieList3 = document.querySelectorAll('.movie-list3');

export const fetchMOviecards = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movieCards = data.slice(0, 12);
    const movieCardsContainer = document.querySelector('#article-container');
    movieCardsContainer.innerHTML = '';

    movieCards.forEach((movieCard) => {
      const movieCardElement = document.createElement('article');
      movieCardElement.classList.add('movie-item');

      // Common properties for both types of movie cards
      movieCardElement.innerHTML = `
        <img class="usethisimage" src="${movieCard.image?.medium}" alt="img" />
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
      `;
      if (movieCard.birthday) {
        movieCardElement.innerHTML += `
          <span class="hidden-class birthday">${movieCard.birthday ?? 'Birthday not available'}</span>
          <span class="hidden-class pop-up-API-image">${movieCard.image.original ?? movieCard.image?.medium}</span>
          <span class="hidden-class origin">${movieCard.country.name ?? 'Country not available'}</span>
          <span class="hidden-class deathday">${movieCard.deathday ?? 'Deathday not available'}</span>
          <span class="hidden-class gender">${movieCard.gender ?? 'Gender not available'}</span>
          <span class="hidden-class id">${movieCard.updated ?? 'ID not available'}</span>
        `;
      } else {
        movieCardElement.innerHTML += `<span class="hidden-class overview ">${movieCard.summary}</span>
        <span class="hidden-class pop-up-API-image ">${movieCard.image.original}</span>
        <span class="hidden-class language ">${movieCard.language}</span>
        <span class="hidden-class release-date ">${movieCard.premiered}</span>
        <span class="hidden-class type ">${movieCard.type}</span>
        <span class="hidden-class country-showing ">${movieCard.network.country?.name}</span>
        <span class="hidden-class genre ">${movieCard.genres[0]} ${movieCard.genres[1]} ${movieCard.genres[2]}</span>
        <span class="hidden-class id ">${movieCard.id}</span>`;
      }

      // Rest of the code remains the same...
      const likeBtn = movieCardElement.querySelector('.fa-heart');
      likeBtn.addEventListener('click', (e) => updateAPIlikes(e));
      loadLikes(movieCardElement);
      const BUTTON = movieCardElement.querySelectorAll('.movie-btn');
      handlepopup(BUTTON);
      movieCardsContainer.appendChild(movieCardElement);

      moviesCount();
    });
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export const fetchMOviecards2 = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const movieCards = data.slice(5, 12);
  const movieCardsContainer = document.querySelector('#article-container');
  movieCardsContainer.innerHTML = '';

  movieCards.forEach((movieCard) => {
    const movieCardElement = document.createElement('article');
    movieCardElement.classList.add('movie-item');

    // Common properties for both types of movie cards
    movieCardElement.innerHTML = `
        <img class="usethisimage" src="${movieCard.image?.medium}" alt="img" />
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
      
         <span class="hidden-class overview ">${movieCard.summary}</span>
        <span class="hidden-class pop-up-API-image ">${movieCard.image.original}</span>
        <span class="hidden-class language ">${movieCard.language}</span>
        <span class="hidden-class release-date ">${movieCard.premiered}</span>
        <span class="hidden-class type ">${movieCard.type}</span>
        <span class="hidden-class country-showing ">${movieCard.network.country?.name}</span>
        <span class="hidden-class genre ">${movieCard.genres[0]} ${movieCard.genres[1]} ${movieCard.genres[2]}</span>
        <span class="hidden-class id ">${movieCard.id}</span>`;
    // Rest of the code remains the same...
    const likeBtn = movieCardElement.querySelector('.fa-heart');
    likeBtn.addEventListener('click', (e) => updateAPIlikes(e));
    loadLikes(movieCardElement);
    const BUTTON = movieCardElement.querySelectorAll('.movie-btn');
    handlepopup(BUTTON);
    movieCardsContainer.appendChild(movieCardElement);

    moviesCount();
  });
};