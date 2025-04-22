describe('Probar Menu de Pag Tec', () => {
    beforeEach(() => {
      cy.visit('https://tec.mx/es/educacion')
    })
  
    it('probar que exista el menu de profesores', () => {
        cy.get('.menu-buscador').click()
        cy.get('#edit-search').type("sistemas{enter}")
    })
  })

describe('Iniciar sesión', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      })
      
      // Iniciar sesión como manager y dar de alta el cliente
      it('Iniciar sesión como manager y dar de alta el cliente', () => {
        cy.get('.btn.btn-lg.tab').click()
        cy.get('.btn.btn-default').click()
        cy.get('input[ng-model="fName"]').type('Juan')
        cy.get('input[ng-model="lName"]').type('Pérez')
        cy.get('input[ng-model="postCd"]').type('12345')
        cy.get('.btn.btn-default').click()
        cy.get('.btn.btn-lg.tab').click()
      })
  
    });
}