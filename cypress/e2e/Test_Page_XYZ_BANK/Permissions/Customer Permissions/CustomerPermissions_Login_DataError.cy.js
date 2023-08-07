describe('Customer Login with data error', () => {
    // incorrect first name
    var customerFirstName = 'Harrry'
    var customerSurname = 'Potter'
    const customerFullname = customerFirstName+ ' '+customerSurname

    it('not allowed', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('button').contains('Customer Login').click()
      cy.get('#userSelect').contains(customerFullname).should('not.exist')
    })
  })