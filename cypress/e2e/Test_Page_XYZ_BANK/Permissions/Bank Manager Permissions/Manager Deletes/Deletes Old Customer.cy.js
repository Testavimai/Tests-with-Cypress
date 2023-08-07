describe('A bank manager is allowed to', () => {
  // if customer's identity data is the folowing
  var customerFirstName = 'Harry'
  var customerSurname = 'Potter'
  const customerFullname = customerFirstName+ ' '+customerSurname
  var customerPostCode = '1000'
  // if webpage data is the following
  const LoginPage = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'

  it('delete an old customer', () => {
    // allows "Bank Manager Login"
    cy.visit(LoginPage);
    cy.get('button').contains('Bank Manager Login').click()

    //delete the searched customer that was added along with the account added
    cy.get('button[ng-class="btnClass3"]').contains('Customers').click()
    cy.get('input[placeholder="Search Customer"]').type(customerFirstName)
    
    // check if the search works
    cy.get('tBody').should('include.text', customerSurname)
    cy.get('button[ng-click="deleteCust(cust)"]').click()

    //check if deletes the searched customer that was added along with the account added 
    cy.get('input[placeholder="Search Customer"]').clear()
    cy.get('tBody').contains(customerSurname).should('not.exist')
  })
})