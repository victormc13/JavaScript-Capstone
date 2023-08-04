const moviesCount = () => {
  const movies = document.querySelectorAll('.movie-item');
  const count = movies.length;

  // Check if the '.movies-counter' element exists, and create it if not
  let moviesCountElement = document.querySelector('.movies-counter');
  if (!moviesCountElement) {
    moviesCountElement = document.createElement('div');
    moviesCountElement.className = 'movies-counter';
    document.body.appendChild(moviesCountElement);
  }

  moviesCountElement.innerHTML = `(${count})`;
};

export default moviesCount;