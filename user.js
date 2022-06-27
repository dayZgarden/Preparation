const postList = document.querySelector('.post-list');
const id = localStorage.getItem('id');

async function onSearchChange(event){
    const id = event.target.value;
    postByID(id);
}

async function postByID(id){
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await posts.json();
    postList.innerHTML = postData.map(post => getPost(post)).join('');
}

function getPost(post){
    return `<div class="post">
        <div class="post__title">
            ${post.title}
        </div>
        <p class="post__body">
             ${post.body}
        </p>
    </div>`
}

postByID(id);
