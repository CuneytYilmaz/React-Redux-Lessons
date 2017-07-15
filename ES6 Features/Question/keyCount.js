const dataSet = require('./data.json');
const stopWords = require('./stop_words.json');
const fs = require('fs');

const result = dataSet.map(item => item.Description);

const letters = Object.values(result)
  .reduce((prev, cur) => `${prev} ${cur.toLowerCase()}`, '')
  .split(' ')
  .filter(
    item =>
      item !== '' &&
      !stopWords.some(swItem => swItem === item.replace(/[^a-zA-ZşŞıİçÇöÖüÜĞğ]/g, '')),
  );

const finalJson = {};

// eslint-disable-next-line
letters.reduce((prev, cur) => {
  const key = cur.trim().replace(/[^a-zA-ZşŞıİçÇöÖüÜĞğ]/g, '');
  if (key !== '' && key !== '' && key !== null) {
    Object.assign(finalJson, {
      [key]: letters.filter(item => item.trim().replace(/[^a-zA-ZşŞıİçÇöÖüÜĞğ]/g, '') === key)
        .length,
    });
  }
}, '');

fs.writeFile('D:/finalJson.json', JSON.stringify(finalJson, null, '\t'), 'utf-8');
console.log(finalJson);
