
/// <reference types="Cypress" />

describe('amazonLogin' , () => { 

    it("LoginToAmazon" , () => {
    
        cy.visit("https://mdbootstrap.com/docs/standard/extended/registration/")

       

         cy.get("input#form3Example1m").click({force: true}).type("test")

         cy.get("#form3Example1n").click({force: true}).type("data")

         cy.get("#form3Example8").click({force: true}).type("TESTGOAN")

         cy.xpath("(//span[@class='select-arrow'])[4]").click({force: true})
         cy.xpath("(//span[@class='select-option-text'])[3]").click({force: true})

         cy.xpath("(//span[@class='select-arrow'])[5]").click({force: true})
         cy.xpath("(//div[@class='select-option'])[3]").click({force: true})

         

         cy.get("#form3Example90").click({force: true}).type("123456")
         cy.get("#form3Example99").click({force: true}).type("testing")
         cy.get("#form3Example97").click({force: true}).type("testing@test.com")

         cy.get("div.form-check.form-check-inline.mb-0.me-4").should('not.be.checked')

         cy.xpath("(//input[@id='otherGender'])[2]").click({force: true})

         cy.xpath("//button[text()='Submit form']").click({force: true})

        




    })
})