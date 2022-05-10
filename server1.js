
/*
------ 1 ------
Faire un require du module express. Vous stockerez la valeur de retour dans une variable express. 
Exécutez à la ligne suivante cette variable et stockez sa valeur de retour dans une variable app.
*/

const express = require('express') 
var app = express();
const port = 3000

/*
------ 2 ------
Appelez la méthode get sur l'objet stocké dans la variable app.
Cette méthode admet deux arguments :
  _ le chemin, ici la racine (/).
  _ une fonction de retour.
Cette fonction possède deux arguments en entrée : req et res.
Dans cette fonction, utilisez la méthode send sur l'objet res.
*/

app.get('/', (req, res) => {
    res.send()
  })

/*
  ------ 3 ------
Terminez votre fichier JavaScript en appelant la méthode listen sur l'objet stocké dans la variable app.
Cette méthode possède deux arguments :
  _ le port d'écoute
  _ une fonction de retour.
Dans celle-ci, faite un console.log permettant d'afficher le port écouté.
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

/*
  ------ 4 ------
Démarrez le serveur : node nombreDeVotreFichier.js
Accéder au serveur depuis votre navigateur.

http://localhost:3000
*/