import {
  nameofperson, commentList,
} from './comments.js';
import updateCommentCount from './updateCommentCount.js';

const popupContainer = document.querySelector('#pop-up-container');
const FORM = document.querySelector('form');

export const validation = (form) => {
  const numElements = form.elements.length;
  if (numElements === 4) {
    const newInput1 = form.querySelector('#date1');
    const newInput2 = form.querySelector('#date2');
    if (newInput1.style.border === '2px solid red' || newInput2.style.border === '2px solid red') {
      return false;
    }
    return true;
  }
  return true;
};

export const ResetReservations = (form) => {
  // const form = form.querySelector('form');
  form.reset();

  // inputs.forEach((input) => {
  //   input.value = '';
  //   input.style.border === 'none';
  // });
  // return true;
};

class Reservation {
  constructor(item1, Jane, date1, date2) {
    this.item_id = item1;
    this.username = Jane;
    this.date_start = date1;
    this.date_end = date2;
  }
}

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/reservations';
export const postReservation = async () => {
  const id = document.querySelector('#pop-up-container').querySelector('.id-pop-up');
  const startdate = popupContainer.querySelector('#date1');
  const enddate = popupContainer.querySelector('#date2');
  const idtextContent = id.textContent;
  const namevalue = nameofperson.value;
  const startdatevalue = startdate.value;
  const enddatevalue = enddate.value;
  const reServation = new Reservation(idtextContent, namevalue, startdatevalue, enddatevalue);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Additional headers if needed
    },
    body: JSON.stringify(reServation),
    // Additional options if needed
  };
  const response = await fetch(url, options);
  if (response.status === 201) {
    const begindate = reServation.date_start;
    const enddate = reServation.date_end;
    const name = reServation.username;
    const newListitem = `<li class="comment-li">${begindate} -  ${enddate} by${name}</li>`;
    commentList.insertAdjacentHTML('beforeend', newListitem);
    updateCommentCount(FORM);
  } else {
    // Handle non-successful response
    throw new Error(`Error: ${response.status}`);
  }
};

// LOAD PREVIOUS RESERVATIONS .............
export const loadReservations = async (e) => {
  const article = e.target.closest('article');
  const articleid = article.querySelector('.id');
  const idtextContent = articleid.textContent;
  commentList.innerHTML = '';
  const getrequest = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/reservations?item_id=${idtextContent}`);
  const data = await getrequest.json();
  if (getrequest.status === 200) {
    let newListItems = '';
    data.forEach((reservation) => {
      newListItems += `<li class="comment-li">${reservation.date_start}-${reservation.date_end} by ${reservation.username}</li>`;
    });
    commentList.innerHTML = newListItems;
    updateCommentCount(FORM);
  }
};
