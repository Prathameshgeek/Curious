
describe('amazonLogin' , () => {    // Describe block is like test suite

it("LoginToAmazon" , () => {    // It block is like test case

cy.visit("https://www.amazon.in/")

cy.get("#nav-link-accountList").click()
 
cy.get("input#ap_email").type("dummygmail1234@gmail.com")

cy.get("span#continue").click()

cy.get("input#ap_password").type("dummygmail@1234")

cy.get("input#signInSubmit").click()


}
)}

)