class LikeObject {
  constructor(itemid) {
    this.item_id = itemid;
  }
}
export const likeAnimation = (e) => {
  const heart = e.target.closest('article').querySelector('.fa-heart');
  heart.addEventListener('dblclick', () => {
    heart.classList.add('active');
    setTimeout(() => {
      heart.classList.remove('active');
    }, 1000);
  });
};
export const updateAPIlikes = async (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const id = e.target.closest('article').querySelector('.id').textContent;
    const Likeobject = new LikeObject(id);
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Likeobject),
    });
    if (response.status === 201) {
      console.log('Like has been updated');
      const likecount = e.target.closest('article').querySelector('.count-likes');
      const currentCount = parseInt(likecount.textContent, 10);
      const newCount = currentCount + 1;
      likecount.textContent = newCount;
    }
  }
};
export const loadLikes = async (movieCard) => {
  const article = movieCard;
  const articleid = article.querySelector('.id');
  const idtextContent = articleid.textContent;
  const getrequest = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/likes');
  const data = await getrequest.json();
  if (getrequest.ok) {
    console.log('Like have loaded');
    const likecount = article.querySelector('.count-likes');
    data.forEach((MOVIELIKE) => {
      if (MOVIELIKE.item_id === idtextContent) {
        likecount.textContent = MOVIELIKE.likes;
      }
    });
  }
};
