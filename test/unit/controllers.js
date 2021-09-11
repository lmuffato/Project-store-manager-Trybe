const sinon = require('sinon');
const { expect } = require('chai');

const productsController = require('../../controllers/productsController');
const productsService = require('../../services/productsService');

const salesController = require('../../controllers/sales.Controller');
const salesService = require('../../services/salesService');

const ERROR_MESSAGE_INVALID_NAME = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be ate least 5 characters long',
  },
}

const ERROR_MESSAGE_INVALID_REPEATED_NAME = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
}





describe('Testes da camada Controller', () => {

  describe('Testando as requisições com a coleção "Procucts"', () => {
    describe('Teste da Requisição POST - Inserindo um novo produto no BD', () => {

      const response = {};
      const request = {};
      const errorShortName = {
        err: {
          code: 'invalid_data',
          message: '"name" length must be ate least 5 characters long',
        },
        status: 422,
      };



      describe('Quando é inserido um "name" com menos de 5 caracteres', () => {
        before(() => {
          request.body = {
            name: "Pro",
            quantity: 100,
          };

          response.status = sinon.stub()
           .returns(response);
          response.json = sinon.stub()
           .returns();

          sinon.stub(productsService, 'createProduct').resolves(errorShortName);
        })

        after(async () => {
          productsService.createProduct.restore();
        });


        it('é chamado o status com o código 422', async () => {
          await productsController.createProduct(request, response);
          expect(response.status.calledWith(422)).to.be.equal(true);
        });

        it('é chamado o json com a mensagem de erro', async () => {
          await productsController.createProduct(request, response);
          expect(response.json.calledWith(ERROR_MESSAGE_INVALID_NAME)).to.be.equal(true);
        });
      });



      const errorRepeatedName = {
        err: {
          code: 'invalid_data',
          message: 'Product already exists',
        },
        status: 422,
      };




      describe('Quando é inserido um "name" repetido', () => {

        before(() => {
          request.body = {
            name: "Produto do Batista",
            quantity: 100,
          };

          response.status = sinon.stub()
           .returns(response);
          response.json = sinon.stub()
           .returns();

          sinon.stub(productsService, 'createProduct').resolves(errorRepeatedName);
        })

        after(async () => {
          productsService.createProduct.restore();
        });


        it('é chamado o status com o código 422', async () => {
          await productsController.createProduct(request, response);
          expect(response.status.calledWith(422)).to.be.equal(true);
        });

        it('é chamado o json com a mensagem de erro', async () => {
          await productsController.createProduct(request, response);
          expect(response.json.calledWith(ERROR_MESSAGE_INVALID_REPEATED_NAME)).to.be.equal(true);
        });
      });



      // describe('Quando é inserido um "name" repetido', () => {

      //   before(() => {
      //     request.body = {
      //       name: "Produto do Batista",
      //       quantity: 100,
      //     };

      //     response.status = sinon.stub()
      //      .returns(response);
      //     response.json = sinon.stub()
      //      .returns();

      //     sinon.stub(productsService, 'createProduct').resolves(errorRepeatedName);
      //   })

      //   after(async () => {
      //     productsService.createProduct.restore();
      //   });


      //   it('é chamado o status com o código 422', async () => {
      //     await productsController.createProduct(request, response);
      //     expect(response.status.calledWith(422)).to.be.equal(true);
      //   });

      //   it('é chamado o json com a mensagem de erro', async () => {
      //     await productsController.createProduct(request, response);
      //     expect(response.json.calledWith(ERROR_MESSAGE_INVALID_REPEATED_NAME)).to.be.equal(true);
      //   });
      // });







    });

  });









  describe('Testando as requisições com a coleção "Sales"', () => {
    describe('Teste da Requisição POST - Inserindo um novo "Sale" no BD', () => {

    });
  });






});
