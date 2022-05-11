window.addEventListener('DOMContentLoaded', () => {
  const messagesList = document.getElementById('messagesList');

  fetch('http://127.0.0.1:5050/usersInfo', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(usersList => {
      let allLiElements = [];
      for (let user in usersList) {
        const userName = document.createElement('li');
        const userMessages = document.createElement('p');

        userName.innerText = `${user} a écrit :`;

        userMessages.innerText = `${usersList[user].messages.join('\n \n')}`;

        userName.append(userMessages);
        allLiElements.push(userName);
      }
      allLiElements = allLiElements.reverse();
      allLiElements.forEach(element => {
        messagesList.appendChild(element);
      })
    })
    .catch(error => {
      console.error('Erreur dans le retour de données sur la route /usersInfo : ', error);
    });
});