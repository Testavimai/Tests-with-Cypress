describe('Opening and Login', () => {
    it('passes when main heading - XYZ Bank - found', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('.mainHeading').should('have.text', 'XYZ Bank')
    })
    
    it('fails when main heading - XYZ Bank - not found', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('.mainHeading').should('have.text', 'XYZ Bank')
    })

    it('contains a "Login" button', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('button').contains('Customer Login').should('have.text', 'Customer Login')
    })
  })