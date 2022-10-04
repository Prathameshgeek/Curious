/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("handling different tabs" ,() => {


it ("switching between tabs"  , () => {
  cy.visit("https://www.amazon.in/")
  cy.xpath("//a[text()='Mobiles']").click()

  cy.xpath("//span[text()='OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)']").invoke('removeAttr', 'target').click()
  cy.url().should("eg" , "https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=lp_1389401031_1_11")
  cy.go("back")
})




})
