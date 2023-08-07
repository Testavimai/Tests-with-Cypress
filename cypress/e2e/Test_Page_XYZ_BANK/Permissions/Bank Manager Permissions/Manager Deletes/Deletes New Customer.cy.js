describe('A bank manager is allowed to', () => {
  // if customer's identity data is the folowing
  var customerFirstName = 'Rainer'
  var customerSurname = 'Sunny'
  const customerFullname = customerFirstName+ ' '+customerSurname
  var customerPostCode = '1000'
  // if customer's choice of account currency is the following
  var currency = 'Pound'
  // if webpage data is the following
  const LoginPage = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  const alert = ['Customer added successfully', 'Account created successfully']

  it('delete a new customer', () => {
    // allows "Bank Manager Login"
    cy.visit(LoginPage);
    cy.get('button').contains('Bank Manager Login').click()
    
    // adds a customer 
    cy.get('button[ng-class="btnClass1"]').contains('Add Customer').click()
    cy.get('input[placeholder="First Name"]').type(customerFirstName)
    cy.get('input[placeholder="Last Name"]').type(customerSurname)
    cy.get('input[placeholder="Post Code"]').type(customerPostCode)
    cy.get('button[type="submit"]').contains('Add Customer').click()
    
    // double check if a customer is added
    cy.on('window:alert',(txt)=>{
    expect(txt).to.include(txt, alert[0]).type({enter})
    })
    //
    cy.get('button[ng-class="btnClass3"]').contains('Customers').click()
    cy.get('tBody').should('include.text', customerFirstName)

    // opens account for the custumer that was added
    cy.get('button[ng-class="btnClass2"]').contains('Open Account').click()
    cy.get('#userSelect').select(customerFullname)
    cy.get('#currency').select(currency)
    cy.get('button[type="submit"]').contains('Process').click()

    //check if acount is opened for the customer that was added
    cy.on('window:alert',(txt)=>{
      expect(txt).to.include(txt, alert[1]).type({enter})
    })

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