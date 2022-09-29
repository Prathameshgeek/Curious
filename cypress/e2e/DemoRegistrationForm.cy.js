
/// <reference types="Cypress" />

describe('amazonLogin' , () => { 

    it("LoginToAmazon" , () => {
    
        cy.visit("https://mdbootstrap.com/docs/standard/extended/registration/")

       

         cy.get("input#form3Example1m").click({force: true}).type("test")

         cy.get("#form3Example1n").click({force: true}).type("data")

         cy.get("#form3Example8").click({force: true}).type("TESTGOAN")

         

         cy.get("#form3Example90").click({force: true}).type("123456")
         cy.get("#form3Example99").click({force: true}).type("testing")
         cy.get("#form3Example97").click({force: true}).type("testing@test.com")

         cy.get("div.form-check.form-check-inline.mb-0.me-4").should('not.be.checked')

         cy.xpath("(//input[@id='otherGender'])[2]").click({force: true})




    })
})