describe('A bank manager is allowed to', () => {
  // customer's identity data
  var customerFirstName = 'Saulė'
  // skipped data:
  // var customerSurname = 
  // const customerFullname = customerFirstName+ ' '+customerSurname 
  //var customerPostCode = 

  // webpage data
  const LoginPage = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  
  it('never "Add Customer" when data skipped', () => {
    // allows "Bank Manager Login"    
    cy.visit(LoginPage)
    cy.get('button').contains('Bank Manager Login').click()
      
    // does not add a customer
    cy.get('button[ng-class="btnClass1"]').contains('Add Customer').click()
    cy.get('input[placeholder="First Name"]').type(customerFirstName)
    cy.get('button[type="submit"]').contains('Add Customer').click() 
    cy.get('button[ng-class="btnClass3"]').contains('Customers').click()
    cy.get('tBody').should('not.include.text', customerFirstName)
  })
})