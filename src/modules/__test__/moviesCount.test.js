import moviesCount from '../moviesCount.js';

describe('moviesCount', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('should increment the counter by one when a new movie-item is added', () => {
    // Create one movie item in the DOM
    document.body.innerHTML = '<div class="movie-item"></div>';

    // Call the moviesCount function again after adding a new movie item to the DOM
    const newMovie = document.createElement('div');
    newMovie.className = 'movie-item';
    document.body.appendChild(newMovie);
    moviesCount();

    // Assert that the .movies-counter element is updated with the correct count (1 + 1 = 2)
    const moviesCounterElement = document.querySelector('.movies-counter');
    expect(moviesCounterElement.textContent).toBe('(2)');
  });

  test('should decrement the counter by one when a movie-item is removed', () => {
    // Create two movie items in the DOM
    document.body.innerHTML = `
      <div class="movie-item"></div>
      <div class="movie-item"></div>
    `;

    // Remove one movie item from the DOM
    const movieItems = document.querySelectorAll('.movie-item');
    document.body.removeChild(movieItems[0]);

    // Call the moviesCount function again after removing a movie item from the DOM
    moviesCount();

    // Assert that the .movies-counter element is updated with the correct count (2 - 1 = 1)
    const moviesCounterElement = document.querySelector('.movies-counter');
    expect(moviesCounterElement.textContent).toBe('(1)');
  });

  test('should set the counter to 0 when the movies-container is empty', () => {
    // Create an empty movies-container (no movie items in the DOM)
    document.body.innerHTML = '';

    // Call the moviesCount function when the movies-container is empty
    moviesCount();

    // Assert that the .movies-counter element is created and set to 0
    const moviesCounterElement = document.querySelector('.movies-counter');
    expect(moviesCounterElement.textContent).toBe('(0)');
  });
});
