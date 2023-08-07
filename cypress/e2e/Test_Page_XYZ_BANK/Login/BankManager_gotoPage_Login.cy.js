describe('"Bank Manager Login"', () => {
    it('allows Manager to Login to Customer List', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('button').contains('Bank Manager Login').click();
      cy.get('button[ng-class="btnClass3"]').should('include.text', 'Customers')
    })

    it('allows Manager to Login to Open Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('button').contains('Bank Manager Login').click();
        cy.get('button[ng-class="btnClass2"]').should('include.text', 'Open Account')
      })

    it('allows Manager to Login to Add Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('button').contains('Bank Manager Login').click();
        cy.get('button[ng-class="btnClass1"]').should('include.text', 'Add Customer')
    })
  })