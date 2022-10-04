/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("handling different tabs" ,() => {


it ("switching between tabs"  , () => {
  cy.visit("https://www.amazon.in/")
  cy.xpath("//a[text()='Mobiles']").click()
  cy.go(-1)
  cy.go(1)
  
  cy.xpath("//span[text()='OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)']").invoke('removeAttr', 'target').click()
  cy.url()

  
})
})
