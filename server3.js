/*
Vous devez envoyer au client avec la méthode send de l'objet res une balise image. 
Pour se faire, suivez la procédure ci-dessous :

------ 1 ------
Reprenez le code de l'exercice 1.
*/

const express = require('express') 
var app = express();
const port = 3000

app.use("/Bureau/ExpressJS/images", express.static(__dirname + '//Bureau/ExpressJS/images'));


/* GET Picture */
app.get('/picture', (req, res) => {
    res.send('Voici la photo.')
})


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