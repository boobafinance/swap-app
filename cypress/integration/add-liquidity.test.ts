describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xF1baCBBd622F09eE3212Be2e1e1aA35678903687-0xD95169a46d895416CDf778a128E106282f036cC8')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('contain.text', 'BUSD')
  })

  it('does not crash if CAKE is duplicated', () => {
    cy.visit('/add/0xF1baCBBd622F09eE3212Be2e1e1aA35678903687-0xF1baCBBd622F09eE3212Be2e1e1aA35678903687')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('not.contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD95169a46d895416CDf778a128E106282f036cC8-0x7083609fce4d1d8dc0c979aab8c869ea2c873402')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'BUSD')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('contain.text', 'DOT')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0x7083609fce4d1d8dc0c979aab8c869ea2c873402')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'DOT')
    cy.visit('/add/0xD95169a46d895416CDf778a128E106282f036cC8')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'BUSD')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/add/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('redirects /add/WETH-token to /add/WETH-address/token', () => {
    cy.visit('/add/0xc778417E063141139Fce010982780140Aa0cD5Ab-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/add/0xc778417E063141139Fce010982780140Aa0cD5Ab/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('redirects /add/token-WETH to /add/token/WETH-address', () => {
    cy.visit('/add/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85-0xc778417E063141139Fce010982780140Aa0cD5Ab')
    cy.url().should(
      'contain',
      '/add/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/0xc778417E063141139Fce010982780140Aa0cD5Ab'
    )
  })
})
