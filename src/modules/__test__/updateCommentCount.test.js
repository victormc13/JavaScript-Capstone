// import updateCommentCount from '../updateCommentCount';

import updateCommentCount from '../updateCommentCount.js';

describe('updateCommentCount', () => {
  beforeEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  test('should update the header with the correct comment count for Comments', () => {
    // Create a mock pop-up container with comments and a header
    document.body.innerHTML = `
      <div id="pop-up-container">
        <h4>Comments (2)</h4>
        <div class="comments-display">
          <ul>
            <li>Comment 1</li>
            <li>Comment 2</li>
          </ul>
        </div>
        <form>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </form>
      </div>
    `;

    // Call the updateCommentCount function with the form
    const form = document.querySelector('form');
    updateCommentCount(form);

    // Assert that the header is updated with the correct comment count for Comments (2)
    const header = document.querySelector('h4');
    expect(header.textContent).toBe('Comments (2)');
  });

  test('should update the header with the correct reservation count for Reservations', () => {
    // Create a mock pop-up container with comments and a header
    document.body.innerHTML = `
      <div id="pop-up-container">
        <h4>Reservations (2)</h4>
        <div class="comments-display">
          <ul>
            <li>Reservation 1</li>
            <li>Reservation 2</li>
          </ul>
        </div>
        <form>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
          <div>Child 4</div>
        </form>
      </div>
    `;

    // Call the updateCommentCount function with the form
    const form = document.querySelector('form');
    updateCommentCount(form);

    // Assert that the header is updated with the correct comment count for Reservations (2)
    const header = document.querySelector('h4');
    expect(header.textContent).toBe('Reservations (2)');
  });

  test('should update the header with "(0)" when there are no comments in the list', () => {
    // Create a mock pop-up container with an empty comments list and a header
    document.body.innerHTML = `
      <div id="pop-up-container">
        <h4>Comments (0)</h4>
        <div class="comments-display">
          <ul>
            <!-- No comments -->
          </ul>
        </div>
        <form class="comments-form"> <!-- Add a comment type class -->
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 2</div>
        </form>
      </div>
    `;

    // Call the updateCommentCount function with the form
    const form = document.querySelector('.comments-form'); // Use the comment type class
    updateCommentCount(form);

    // Assert that the header is updated with "(0)"
    const header = document.querySelector('h4');
    expect(header.textContent).toBe('Comments 0');
  });
});