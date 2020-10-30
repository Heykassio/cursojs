const fs = require('fs').promises;

module.exports = async (caminho)=> await fs.readFile(caminho, 'utf-8');
