const express = require('express');
const bodyParser = require('body-parser');

const Products = require('./controllers/productsController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Products Routes

app.get('/products', Products.getAll);
app.get('/products/:id', Products.findById);
app.put('/products/:id', Products.update);
app.post('/products', Products.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
