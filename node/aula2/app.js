const path = require('path');
const Cachorro = require('./A/B/D/mod2');

const cachorro = new Cachorro('totó');

console.log(cachorro.latir());
console.log(path.resolve(__dirname, '..', '..', 'imagens', 'pizza'));