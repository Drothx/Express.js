/*
Dans le premier exercice, nous avons envoyé un unique message.

------ 1 ------
Reprenez le code de l'exercice précédent.Lorsque l'utilisateur saisit l'URL de base, affichez un message.
*/

const express = require('express') 
var app = express();
const port = 3000

/* GET n°1 */
app.get('/', (req, res) => {
    res.send('Bonjour à tous !')
  })

/* GET n°2 */
  app.get('/fin', (req, res) => {
    res.send('Coucou caché')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

/*
------ 2 ------
À l'aide d'une seconde méthode get de l'objet contenu dans app, 
affichez un autre message dans le navigateur quand l'utilisateur ajoute le mot "fin" à l'URL de base.
*/

/*
-- GET n°1 --

app.get('/', (req, res) => {
    res.send('Bonjour à tous !')
  })

-- GET n°2 --

  app.get('/fin', (req, res) => {
    res.send('Coucou caché')
  }) */