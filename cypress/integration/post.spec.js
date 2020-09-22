/// <reference types="cypress"/>

// let user;

// before(() => {
//   cy.request('POST', 'https://petstore.swagger.io', {
//     username: Cypress.env('username'),
//     password: Cypress.env('password'),
//   })
//     .its('body')
//     .then((res) => {
//       user = res;
//     });
// });

describe('test creation API', () => {

  before(() => {
  
      cy.fixture('newPetRequestBody').as('newPetRequestBody');
  });

 
  it('Create RE Site', function (){


    cy.request({

      method: 'POST',
      url: `/pet`,

      body: this.newPetRequestBody,

      headers: {
        'content-type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).have.property('category');
    });
  });
});
