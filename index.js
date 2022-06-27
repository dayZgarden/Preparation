
async function getCards(){
    const card = await fetch('https://jsonplaceholder.typicode.com/users');
    const cardData = await card.json();
    const userList = document.querySelector('.user-list');

    userList.innerHTML = cardData.map(user => getUserData(user)).join('');
}

function showUserPosts(id){
    localStorage.setItem('id', id);
    window.location.href = `${window.location.origin}/user.html`
}

function getUserData(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}/p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>`
}

getCards();