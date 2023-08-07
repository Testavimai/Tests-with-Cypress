describe('Customer Login with correct data', () => {
  // correct name
  var customerFirstName = 'Harry'
  var customerSurname = 'Potter'
  const customerFullname = customerFirstName+ ' '+customerSurname

  it('allowed', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('button').contains('Customer Login').click()
    cy.get('#userSelect').select(customerFullname)
    cy.get('button').contains('Login').click()
    cy.get('strong').should('include.text','Welcome ' + customerFullname)
  })
})