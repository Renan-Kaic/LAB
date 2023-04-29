const fs = require('fs').promises
const path = require('path')

module.exports = caminho => fs.readFile(caminho, 'utf-8')

