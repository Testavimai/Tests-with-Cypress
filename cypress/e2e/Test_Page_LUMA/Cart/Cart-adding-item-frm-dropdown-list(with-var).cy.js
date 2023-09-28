describe('Should add a chosen item from a dropdown list without any issues', () => {
    const testPage = 'https://magento.softwaretestingboard.com/'
    var size = 'XL'
    var colour = 'Black' 
    var itemName = 'Olivia 1/4 Zip Light Jacket'
    var itemMenu ='Jackets'
    var itemUrl = 'jackets'

    it('should open a women dropdown list of items to choose', () => {
      //open a dropdown list of items to pick 
      cy.visit(testPage)
      cy.contains(itemMenu).click({force: true})  
      
      //verify the list to be open
      cy.url().should('include', itemUrl)
    })

    it('should add a chosen item to the cart and match a name, colour and size that were picked', () => {
      //open a dropdown list of items to pick 
      cy.visit(testPage)
      cy.contains(itemMenu).click({force: true})  
      
      //verify the list to be open 
      cy.url().should('include', itemUrl)
     
      //pick an item from the list
      cy.get('.product-item-link').contains(itemName).click()
      //pick size
      cy.get('[option-label='+size+']').click()
      //pick colour
      cy.get('[option-label='+colour+']').click().wait(3000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('auto')) {
          return false
        }
      })
      //add item to cart
      cy.get('#product-addtocart-button').click()
     
      //check if an item (quantity 1) is added to cart
      cy.get('span.counter-number').should('have.css', '1')
      //check what type of item is added
      cy.get('span.counter-number').click()
      cy.get('.minicart-items-wrapper').find('[role="tab"]').click()
      cy.get('.minicart-items-wrapper').find('[data-bind="text: option.value"]').contains(size).should('be.visible', size)
      cy.get('.minicart-items-wrapper').find('[data-bind="text: option.value"]').contains(colour).should('be.visible', colour)
      cy.get('.minicart-items-wrapper').contains(itemName).should('be.visible', itemName)
    })
})
