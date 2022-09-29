/// <reference types="Cypress" />



describe('amazonLogin' , () => {    // Describe block is like test suite
it("LoginToAmazon" , () => {    // It block is like test case

cy.visit("https://www.amazon.in/")

cy.get("#nav-link-accountList").click()
 
cy.get("input#ap_email").click().type("dummygmail1234@gmail.com")

cy.get("span#continue").click()

cy.get("input#ap_password").click().type("dummygmail@1234")

cy.get("input#signInSubmit").click()

cy.xpath("//span[text()='Hello, Dummy']").should('have.text' , 'Hello, Dummy')

cy.xpath("//span[text()='Hello, Dummy']").trigger('mouseover') // hover mouse

cy.xpath("//span[text()='Sign Out']").click()


})

}
)

