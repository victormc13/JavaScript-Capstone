import updateCommentCount from './updateCommentCount.js';

export const nameofperson = document.querySelector('#name-of-commenter');
export const comment = document.querySelector('#comment');
export const submit = document.querySelector('#comment-button');
export const commentList = document.querySelector('.pop-up').querySelector('.comments-display');

class Form {
  constructor(itemid, name, comment) {
    this.item_id = itemid;
    this.username = name;
    this.comment = comment;
  }
}
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/comments';
export const validationcomments = (form) => {
  const textarea = form.querySelector('textarea');
  const nameinput = form.querySelector('#name-of-commenter');
  if (textarea.value === '' || nameinput.value === '') {
    return false;
  }
  return true;
};

export const postComment = async () => {
  console.log('fired postcomment');
  const namevalue = nameofperson.value;
  const commentvalue = comment.value;
  const id = document.querySelector('#pop-up-container').querySelector('.id-pop-up');
  const idtextContent = id.textContent;
  const FORM = document.querySelector('form');
  if (commentvalue !== '') {
    const submitComment = new Form(idtextContent, namevalue, commentvalue);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitComment),
    };
    const response = await fetch(url, options);
    if (response.status === 201) {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
      const day = currentDate.getDate();
      const todaysDate = `${year}-${month}-${day}`;
      const newListitem = `<li class="comment-li">${todaysDate} ${namevalue}: ${commentvalue}</li>`;
      commentList.insertAdjacentHTML('beforeend', newListitem);
      updateCommentCount(FORM);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  }
};

export const ResetComments = (form) => {
  const input = form.querySelector('input');
  const textArea = form.querySelector('textarea');
  console.log('form has been reset');
  input.value = '';
  textArea.value = '';
};

// load previous comments
export const loadComments = async (e) => {
  const article = e.target.closest('article');
  const FORM = document.querySelector('form');
  const articleid = article.querySelector('.id');
  const idtextContent = articleid.textContent;
  const getrequest = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/comments?item_id=${idtextContent}`);
  const data = await getrequest.json();
  if (getrequest.status === 200) {
    let newListItems = '';
    data.forEach((comment) => {
      newListItems += `<li class="comment-li">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
    });
    commentList.innerHTML = newListItems;
    updateCommentCount(FORM);
  }
};

// make comment html
export const revertChanges = (theform) => {
  if (theform.elements.length === 4) {
    const popupContainer = document.querySelector('#pop-up-container');
    const form = popupContainer.querySelector('form');

    const nameofsection = popupContainer.querySelector('h4');
    nameofsection.textContent = 'Comments:';
    const button = form.querySelector('button');
    const newInput1 = form.querySelector('#date1');
    const newInput2 = form.querySelector('#date2');
    const textarea = document.createElement('textarea');
    textarea.name = '';
    textarea.id = 'comment';
    textarea.placeholder = 'insights';
    textarea.cols = 30;
    textarea.rows = 10;
    textarea.maxLength = 180;

    // Remove the newly created input elements
    newInput1.remove();
    newInput2.remove();
    button.textContent = 'Comment';
    form.insertBefore(textarea, button);
  }
};