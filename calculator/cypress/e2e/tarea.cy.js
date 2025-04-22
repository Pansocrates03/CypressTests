describe('Iniciar sesión como manager y dar de alta un cliente', () => {
    it('nfdsjklnfdjksl',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Bank Manager Login').click()
        cy.contains('Add Customer').click()
        cy.get('input[ng-model="fName"]').type('Juan')
        cy.get('input[ng-model="lName"]').type('Pérez')
        cy.get('input[ng-model="postCd"]').type('12345')
        cy.get('.btn.btn-default').click()
      })
});

describe('Iniciar sesión como manager y al cliente creado, abrirle una cuenta en dolares', () => {
    it('ngfdjklnfdk',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Bank Manager Login').click()
        cy.contains('Open Account').click()
        cy.get('select[ng-model="custId"]').select('Harry Potter')
        cy.get('select[ng-model="currency"]').select('Dollar')
        cy.get('button[type="submit"]').click()
      })

});

describe('Iniciar sesión como usuario. Hacer un depósito de $800, validar que el saldo se vea reflejado en la parte superior, al lado del Account Number', () => {
    it('gfnsdjkgdfnl',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Customer Login').click()
        cy.get('select[ng-model="custId"]').select('Harry Potter')
        cy.contains('Login').click()
        cy.contains('Deposit').click()
        cy.get('input[ng-model="amount"]').type('800')
        cy.get('button[type="submit"]').click()
      })

});

describe('Iniciar sesión como usuario. Hacer un retiro por $1,500, validar que se muestre el mensaje "Transaction Failed..."', () => {
    it('gfnsdjkgdfnl',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Customer Login').click()
        cy.get('select[ng-model="custId"]').select('Harry Potter')
        cy.contains('Login').click()
        cy.contains('Withdrawl').click()
        cy.get('input[ng-model="amount"]').type('1500')
        cy.get('button[type="submit"]').click()
      })
});

describe('Iniciar sesión como usuario. Hacer un retiro por $500, validar que se muestre el mensaje "Transaction successful"', () => {
    it('gfnsdjkgdfnl',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Customer Login').click()
        cy.get('select[ng-model="custId"]').select('Hermoine Granger')
        cy.contains('Login').click()
        cy.contains('Withdrawl').click()
        cy.get('input[ng-model="amount"]').type('500')
        cy.get('button[type="submit"]').click()
      })
});

describe('Iniciar sesión como usuario. Ir a la parte de transacciones. Validar que se tengan las 2 transacciones realizadas correctamente en la parte de arriba', () => {
    it('gfnsdjkgdfnl',() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.contains('Customer Login').click()
        cy.get('select[ng-model="custId"]').select('Hermoine Granger')
        cy.contains('Login').click()
        cy.contains('Transactions').click()
      })
});