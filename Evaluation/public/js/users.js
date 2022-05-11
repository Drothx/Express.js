window.addEventListener('DOMContentLoaded', () => {
  const usersList = document.getElementById('usersList');

  fetch('http://127.0.0.1:5050/usersInfo', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(allUsers => {
      console.log('allusers: ', allUsers);
      let allLiElements = [];
      for (let user in allUsers) {
        const userName = document.createElement('li');

        userName.innerText = user;
        
        allLiElements.push(userName);
      }
      allLiElements = allLiElements.reverse();
      allLiElements.forEach(element => {
        usersList.appendChild(element);
      })
    })
    .catch(error => {
      if (error.error) {
        console.error('Erreur dans le retour de données sur la route /usersInfo : ', error);
      }
      console.error('Erreur dans le traitement des données reçues par le serveur : ', error);
    });
});