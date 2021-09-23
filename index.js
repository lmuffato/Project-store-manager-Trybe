const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const { create, 
  getAllProducts,
  getById,
  updateProduct,
  deleteProduct,
} = require('./controller/Products');

const {
  createSales,
} = require('./controller/Sales');

app.use(bodyparser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', create);
app.get('/products', getAllProducts);
app.get('/products/:id', getById);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);
app.post('/sales', createSales);

app.listen(3000, () => {
  console.log('aplicação rodando');
});
