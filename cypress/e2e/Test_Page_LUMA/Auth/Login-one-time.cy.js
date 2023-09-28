describe("Customer login", () => {
 it("Should sign in without issues", () => {
   cy.visit('https://magento.softwaretestingboard.com/')
   // Logins without issues
   cy.get('.panel > .header > .authorization-link > a').click()
   cy.get('#email').type('salna@kuriuaccount.lt', {log:true})
   cy.get('#pass').type('doremifasollasido-09', {log:true}).type('{enter}')
   
   // Verify the login
   cy.get('span.logged-in').contains('saule salna').should('be.visible')
  
   cy.window().its('sessionStorage').invoke("getItem", "token")
  })   
})   

