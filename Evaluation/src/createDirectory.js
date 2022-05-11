import { mkdir } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createDirectory = (directory, options) => {
  mkdir(
    join(__dirname, directory),
    options,
    (error) => {
    if (error) {
      console.error(`Le dossier ${directory} n'a pas pu être créé : ${error}`);
    }
  });
};
