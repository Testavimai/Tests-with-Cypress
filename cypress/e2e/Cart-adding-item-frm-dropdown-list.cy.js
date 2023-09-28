describe('Should add a chosen item from a dropdown list without any issues', () => {
    const testPage = 'https://magento.softwaretestingboard.com/'

    it('should open a dropdown list of items to choose', () => {
      //open a dropdown list of items to pick, e.g. Women>Tops>Jackets
      cy.visit(testPage)
      cy.get('#ui-id-4').invoke('show')
      cy.contains('Jackets').click({force: true})  
      //verify the list to be open
      cy.url().should('include', 'jackets')
    })

    it('should add a chosen item to the cart and match a name, colour and size that were picked', () => {
      //open a dropdown list of items to pick, e.g. Women>Tops>Jackets>
      cy.visit(testPage)
      cy.get('#ui-id-4').invoke('show')
      cy.contains('Jackets').click({force: true})  
      //verify the list to be open
      cy.url().should('include', 'jackets')
     
      //pick an item from the list, e.g. e.g. Women>Tops>Jackets>Olivia 1/4 Zip Light Jacket
      cy.get('.product-item-link').contains('Olivia 1/4 Zip Light Jacket').click()
      //pick Black, for example
      cy.get('[option-label="Black"]').click().wait(3000)
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('auto')) {
          return false
        }
      })
      //pick size L, for instance
      cy.get('[option-label="L"]').click()
      //add item to cart
      cy.get('#product-addtocart-button').click()
      //check if an item (quantity 1) is added to cart
      cy.get('span.counter-number').should('have.css', '1')
      //check what type (should be Black and size L) of item is added
      cy.get('span.counter-number').click()
      cy.get('.minicart-items-wrapper').find('[role="tab"]').click()
      cy.get('.minicart-items-wrapper').find('[data-bind="text: option.value"]').contains('L').should('be.visible', 'L')
      cy.get('.minicart-items-wrapper').find('[data-bind="text: option.value"]').contains('Black').should('be.visible', 'Black')
      cy.get('.minicart-items-wrapper').contains('Olivia 1/4 Zip Light Jacket').should('be.visible', 'Olivia 1/4 Zip Light Jacket')
    })
})
