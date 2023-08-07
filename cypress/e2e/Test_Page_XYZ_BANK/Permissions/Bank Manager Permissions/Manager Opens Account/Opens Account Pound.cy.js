describe('A bank manager is allowed to', () => {
  // customer' correct identity data
  var customerFirstName = 'Saulė'
  var customerSurname = 'Šalna'
  const customerFullname = customerFirstName+ ' '+customerSurname
  var customerPostCode = '1000'
  const identityData = [customerFirstName, customerSurname, customerPostCode]
  // choice of currency
  var currency = ['Pound', 'Dollar', 'Ruppee']
  // webpage data
  const LoginPage = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  const alert = ['Customer added successfully', 'Account created successfully']

  it('"Open Account" for a customer in "Pound"', () => {  
    // allows "Bank Manager Login"    
    cy.visit(LoginPage)
    cy.get('button').contains('Bank Manager Login').click()
      
    // adds a customer with correct data
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
    cy.get('tBody').should('include.text', identityData[0])
    cy.get('tBody').should('include.text', identityData[1])
    cy.get('tBody').should('include.text', identityData[2])   

    // opens account for the custumer that was added
    cy.get('button[ng-class="btnClass2"]').contains('Open Account').click()
    cy.get('#userSelect').select(customerFullname)
    cy.get('#currency').select(currency[0])
    cy.get('button[type="submit"]').contains('Process').click()

    //check if acount is opened for the customer that was added
    cy.on('window:alert',(txt)=>{
    expect(txt).to.include(txt, alert[1]).type({enter})
      })
  }) 
})