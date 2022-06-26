const postListEl = document.querySelector('.post-list')
const id = localStorage.getItem('id');

async function onSearchChange(event) {
    console.log(event);
    const id = event.target.value;
    userCard(id);
}

async function userCard(id) {
    const card = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const cardData = await card.json();
    postListEl.innerHTML = cardData.map(post => postsHTML(post)).join('');
}

function postsHTML(post) {
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

userCard(id);