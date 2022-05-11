import { readFile, writeFile } from 'fs';
import { updateUser } from './updateUser.js';
import { createUser } from './createUser.js';

export const updateCollection = (db, collection, userInfo) => {
  readFile(`./src/${db}/${collection}`, {
    encoding: 'utf-8',
    flag: 'a+'
  }, (error, data) => {
    if (error) {
      console.error(`Impossible de lire le message : ${error}`);
    } else {
      let jsonData = {};
      let updatedData = {};
  
      if (data) {
        jsonData = JSON.parse(data);
        updateUser(jsonData, userInfo.pseudo, userInfo.email, userInfo.message);
      } else {
        createUser(jsonData, userInfo.pseudo, userInfo.email, userInfo.message);
      };
  
      updatedData = JSON.stringify(jsonData);
  
      writeFile(`./src/${db}/${collection}`, updatedData, {
        encoding: 'utf-8',
      }, error => {
        if (error) {
          console.error(`Impossible d'écrire dans le fichier collection.json : ${error}`);
        }
      });
    }
  });
};
