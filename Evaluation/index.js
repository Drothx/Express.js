// IMPORT STATEMENTS
import express from 'express';
import { join, dirname } from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { updateCollection } from './src/updateCollection.js';
import { createDirectory } from './src/createDirectory.js';
import { returnWithConditionalZero } from './src/returnWithConditionalZero.js';
import { readFile } from 'fs';


// CONSTANT VARIABLES
const protocol = 'http';
const host = '127.0.0.1';
const port = 5050;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/content', express.static(join(__dirname, 'public', 'html')));
app.use('/style', express.static(join(__dirname, 'public', 'css')));
app.use('/script', express.static(join(__dirname, 'public', 'js')));
app.use('/favicon.ico', express.static(join(__dirname, 'public', 'images', 'rest-api.png')));

// ROUTES
// GET
app.get(('/'), (request, response, next) => {
  return response.sendFile('index.html', {
    root: join(__dirname, 'public', 'html')
  }, (error) => {
    if (error) {
      next(`Le fichier index n'a pas pu être envoyé à cause de l'erreur suivante : ${error.message}`);
    }
  })
});

app.get(('/contact'), (request, response, next) => {
  return response.sendFile('contact.html', {
    root: join(__dirname, 'public', 'html')
  }, (error) => {
    if (error) {
      next(`Le fichier contact n'a pas pu être envoyé à cause de l'erreur suivante : ${error.message}`);
    }
  })
});

app.get(('/messages'), (request, response, next) => {
  return response.sendFile('messages.html', {
    root: join(__dirname, 'public', 'html')
  }, (error) => {
    if (error) {
      next(`Le fichier messages n'a pas pu être envoyé à cause de l'erreur suivante : ${error.message}`);
    }
  })
});

app.get(('/users'), (request, response, next) => {
  return response.sendFile('users.html', {
    root: join(__dirname, 'public', 'html')
  }, (error) => {
    if (error) {
      next(`Le fichier users n'a pas pu être envoyé à cause de l'erreur suivante : ${error.message}`);
    }
  })
});

app.get(('/usersInfo'), (request, response, next) => {
  readFile(`./src/db/collection.json`, {
    encoding: 'utf-8',
    flag: 'r'
  }, (error, data) => {
    let statusCode;
    let jsonData = {};
    if (error) {
      statusCode = 503;
      jsonData = {
        error: `Connexion impossible à la base de données : ${error}`
      }
    } else {
      if (data) {
        statusCode = 202;
        jsonData = JSON.parse(data);
      } else {
        next(`Aucun utilisateur en base de données pour le moment`);
      }
    };
    response.statusCode = statusCode;
    return response.json(jsonData);
  });
});

// POST
app.post('/contact', (request, response, next) => {  
  const date = new Date();
  const today = date.toLocaleDateString('fr-FR');
  const now = `${returnWithConditionalZero(date.getHours())}h${returnWithConditionalZero(date.getMinutes())}:${returnWithConditionalZero(date.getSeconds())}`;
  const reqBody = request.body;
  const userPseudo = reqBody.pseudo;
  const userEmail = reqBody.email;
  const userMessage = `${today} à ${now} : ${reqBody.message}`;
  let statusCode;
  let responseItem = {
    message: ''
  };

  if (request.body.message.includes('<script>')) {
    statusCode = 404;
    responseItem.message = `Tentative d'injection de script détectée !`;
  } else {
    if (userPseudo && userMessage && userEmail) {
      statusCode = 200;
      responseItem.message = `Merci pour votre message, ${userPseudo} !`;

      createDirectory(
        'db',
        { recursive: true }
      );
        updateCollection('db', 'collection.json', {
          pseudo: userPseudo,
          email: userEmail,
          message: userMessage
        });
    } else {
      next(`Il manque des informations. Merci de vérifier que les champs "Pseudo", "E-mail" et "Message" ont bien été remplis.`)
    };
  }
  response.status = statusCode;
  return response.send(responseItem);
});

app.use('*', (request, response, next) => {
  response.statusCode = 404;
  return response.sendFile('error404.html', {
    root: join(__dirname, 'public', 'html')
  }, (error) => {
    if (error) {
      console.error(`Le fichier error404 n'a pas pu être envoyé à cause de l'erreur suivante : ${error.message}`);
    }
  })
});

app.use((error, request, response, next) => {
  response.statusCode = 404;
  return response.json({
    error
  });
});


// SERVER START
app.listen(port, host, () => {
  console.log(`Serveur démarré à l'adresse ${protocol}://${host}:${port}`);
});
