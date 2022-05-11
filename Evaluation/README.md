# Evaluation module API REST

Consigne : pour cette évaluation, vous devrez répondre aux questions dans l'ordre afin de réaliser l'application REST demandée.

## PARTIE THEORIQUE

### Question 1 : Que signifie SOA et de quoi s'agit-il ? (1pt)

### Question 2 : Quels types de données sont utilisés dans la communication avec une API SOAP et une API REST ? (1pt)

### Question 3 : Qu'est-ce qu'un middleware et à quoi peut-il servir ? Donnez un exemple simple. (1pt)

### Question 4 : Dans le contexte d'un échange entre un client et un serveur, qu'est-ce qu'une route ? Donnez un exemple simple. (1pt)

### Question 5 : Qu'est-ce qu'un Web Service et quels sont les deux types de Web Service qui existent à l'heure actuelle ? Quelles sont les différences principales entre ces deux types de Web Service ? (2pts)
### Question 6 : Par quel biais s'adresse-t-on à un Web Service (peu importe quel type) ? (1pt)

### Question 7 : Qu'est-ce qu'un WSDL et à quoi sert ce document ? (1pt)


## PARTIE PRATIQUE

### Question 8 : Installez dans le projet les paquets npm suivants : express, cors, body-parser. (1pt)

### Question 9 : Dans le fichier "index.js", ajoutez aux endroits prévus à cet effet (marqués "QUESTION 9") le code permettant de mettre sur pied le serveur express. (1pt)

### Question 10 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqués "QUESTION 10") les middlewares pour les paquets "cors" et "body-parser" (3 au total !) (1pt)

### Question 11 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 11") les middlewares permettant de servir les différents fichiers statiques (CSS, HTML, Javascript)  (1pt)
Consigne à respecter : Vous prendrez soin de définir les routes comme suit : "/style" pour les fichiers CSS, "/content" pour les fichiers HTML et "/script" pour les fichiers Javascript. 

### Question 12 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 12") le code permettant de gérer une route sur "/", "/users", "/messages", "/contact" en GET pour servir respectivement les fichiers "index.html", "users.html", "messages.html" et "contact.html". (4pts)

### Question 13 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 14") le code permettant de gérer une route sur "/contact" en POST qui devra appliquer la logique suivante, dans cet ordre :
Consigne à respecter :
1. Créer le dossier de la base de données au moyen de la fonction ```createDirectory()``` ;
2. Mettre à jour la base de données au moyen de la fonction ```updateCollection()``` ;
3. Retourne une réponse au format json (```response.json()```) contenant un objet ayant une propriété "message" contenant une chaîne de caractères (exemple : { message: 'Hello World'} ) ;

Afin de savoir comment utiliser les deux fonctions mentionnées ci-dessus, vous vous référerez à leurs définitions dans leurs fichiers respectifs dans le dossier "src".

### Question 14 : Dans le fichier "users.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 15") le code de la méthode ```fetch()``` ([documentation](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#cr%C3%A9er_une_requ%C3%AAte_fetch)) qui devra : 
Consigne à respecter :
1. Récupérer les données des utilisateurs via un appel Http à l'adresse "http://localhost:5050/usersInfo" ;
2. Convertir le résultat obtenu au format JSON ;
3. Boucle sur l'objet reçu depuis le serveur afin d'obtenir la valeur correspondant au nom de chaque utilisateur enregistré ;
4. Pour chaque utilisateur trouvé, crée un élément HTML <li> ;
5. Ajoute le nom d'un utilisateur dans la propriété "innerText" de chaque élément <li> ;
6. Ajoute tous les éléments <li> à l'élément de liste désordonné <ul> stocké dans la variable ```usersList```.