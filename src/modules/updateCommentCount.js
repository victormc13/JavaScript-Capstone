const updateCommentCount = (form) => {
  const popupContainer = document.querySelector('#pop-up-container');
  const list = popupContainer.querySelector('.comments-display');
  const header = popupContainer.querySelector('h4');
  const formcount = form.children.length;

  if (list && header) {
    const listItems = popupContainer.querySelector('ul');
    const count = listItems.children.length;
    const commentType = formcount <= 3 ? 'Comments' : 'Reservations';
    const displayCount = count > 0 ? `(${count})` : '0'; // Empty string if count is 0
    header.textContent = `${commentType} ${displayCount}`;
  } else {
    throw new Error('Required elements not found in the DOM.');
  }
};

export default updateCommentCount;