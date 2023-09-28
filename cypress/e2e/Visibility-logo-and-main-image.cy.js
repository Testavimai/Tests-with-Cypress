describe('Front images', () => {
    // test page
    const testPage = 'https://magento.softwaretestingboard.com'
    
    it('logo is visible and correct size', () => {
      cy.visit(testPage)
      // check if logo is visible
      cy.get('a[class="logo"]').find('img[src]')
      .should('be.visible')
      
      // check if logo's size is correct
        .should(([img])=>{
          expect(img.naturalWidth).to.equal(148)
          expect(img.naturalHeight).to.equal(43)
        })
    })

    it('main image is visible and correct size', () => {
      cy.visit(testPage)
      // check if main image is visible
      cy.get('a[class="block-promo home-main"]').find('img[src]')
      .should('be.visible')
      
      // check if main image's size is correct
        .should(([img])=>{
          expect(img.naturalWidth).to.equal(1280)
          expect(img.naturalHeight).to.equal(460)
        })
    })
  })
