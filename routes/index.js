const routes = require('express').Router();

const productsController = require('../controllers/productsController');

// não remova esse endpoint, e para o avaliador funcionar
routes.get('/', (_req, res) => {
  res.send();
});

routes.post('/products', productsController.create);
routes.get('/products', productsController.getAll);
routes.get('/products/:id', productsController.get);
routes.put('/products/:id', productsController.update);
routes.delete('/products/:id', productsController.delete);

module.exports = routes;
