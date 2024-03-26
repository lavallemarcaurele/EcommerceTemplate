const fs = require('fs-extra');
const path = require('path');

const srcPath = path.join(__dirname, 'strapi/types/generated');
const destPath = path.join(__dirname, 'nuxt3/types/strapi');

fs.copy(srcPath, destPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Les types Strapi ont été copiés avec succès !');
});
