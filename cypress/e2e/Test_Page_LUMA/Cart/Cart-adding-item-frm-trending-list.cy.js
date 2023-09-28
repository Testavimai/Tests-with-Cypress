describe('Adding to cart', () => {
    // test page
    const testPage = 'https://magento.softwaretestingboard.com/'
    
    // cart item name and its quantity
    var itemName = 'Push It Messenger Bag'
    var quantity = '2'

    it('passes when an item is trending', () => {
      cy.visit(testPage)
      //add an item (with no color and size option)
      cy.get('strong[class="product-item-name"]').contains(itemName).click()
      cy.get('#qty').clear().type(quantity)
      cy.get('button[id="product-addtocart-button"]').click()
      
      // check if the item is added
      cy.get('span.counter-number')
        .should('have.css', quantity)
    })
  })
