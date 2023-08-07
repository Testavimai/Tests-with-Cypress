describe('A bank manager is allowed to', () => {
// customer's identity data
var customerFirstName = 'Saul4'
var customerSurname = 'šalna'
const customerFullname = customerFirstName+ ' '+customerSurname
var customerPostCode = '100*'
const identityData = [customerFirstName, customerSurname, customerPostCode]  
// webpage data
const LoginPage = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
const alert = ['Customer added successfully', 'Account created successfully']

  it('"Add Customer" even data incorrect', () => {
    // allows "Bank Manager Login"    
    cy.visit(LoginPage)
    cy.get('button').contains('Bank Manager Login').click()
      
    // adds a customer
    cy.get('button[ng-class="btnClass1"]').contains('Add Customer').click()
    cy.get('input[placeholder="First Name"]').type(customerFirstName)
    cy.get('input[placeholder="Last Name"]').type(customerSurname)
    cy.get('input[placeholder="Post Code"]').type(customerPostCode)
    cy.get('button[type="submit"]').contains('Add Customer').click()

    // double check if a customer is added
    cy.on('window:alert',(txt)=>{
    should(txt).to.not.include(txt, alert[0]).type({enter})
    })
    // 
    cy.get('button[ng-class="btnClass3"]').contains('Customers').click()
    cy.get('tBody').should('include.text', identityData[0])
    cy.get('tBody').should('include.text', identityData[1])
    cy.get('tBody').should('include.text', identityData[2])
  })
})