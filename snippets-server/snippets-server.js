const express = require('express')

// Sample Campaign data
const data = [
  {
    id: 123,
    color: "purple",
    text: "hello world",
    template: "simple"
  },
  {
    id: 345,
    color: "red",
    text: "what's up",
    template: "special"
  }
];

module.exports = () => {
  const app = express()

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => res.send(data));
  app.listen(4040, () => console.log('Snippet server running on 4040!'))
};
