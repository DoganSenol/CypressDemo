describe("Check UI Elements", () => {

    /*it("Checking Radio Buttons", () => {

        cy.visit("http://test.rubywatir.com/radios.php")


        //visibility of radio buttons
        cy.get("input[value='Radio1']").should('be.visible')
        cy.get("input[class='radioclass']").should('be.visible')


        //selecting radio buttons
        cy.get("input[class='radioclass']").check().should('be.checked')
        cy.get("input[value='Radio1']").should('not.be.checked')

        cy.get("input[value='Radio1']").check().should('be.checked')
        cy.get("input[class='radioclass']").should('be.not.checked')


       

    })*/

    it("Checking Check Boxes", () => {

        cy.visit("http://test.rubywatir.com/checkboxes.php")


        //visibility of the element
        //cy.get("input[value='football']").should('be.visible')



        //selecting single check box - Football
        //cy.get("input[value='football']").check().should('be.checked')


        //unselecting checkbox
        //cy.get("input[value='football']").uncheck().should('not.be.checked')

        //Selecting all the checkboxes
        //cy.get("input[type='checkbox']").check().should("be.checked")

        //unselecting all the checkboxes
        cy.get("input[type='checkbox']").uncheck().should("not.be.checked")

        //select the first and last checkbox
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        cy.get("input[type='checkbox']").last().check().should("be.checked")
        






    })



})