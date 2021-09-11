const express = require('express');
const bodyParser = require('body-parser');
const Products = require('./controllers/productsController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.route('/products')
  .post(Products.create)
  .get(Products.findAll);

app.route('/products/:id')
  .get(Products.findById)
  .put(Products.updateOne)
  .delete(Products.deleteOne);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
