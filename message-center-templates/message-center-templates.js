const express = require('express')
const app = express()

module.exports = () => {
  app.get('/templates.js', (req, res) => res.sendFile(__dirname + "/templates.js"));
  app.get('/templates.css', (req, res) => res.sendFile(__dirname + "/templates.css"));
  app.listen(3030, () => console.log('Template server running on 3030!'))
};
