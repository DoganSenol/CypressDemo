describe("Assertions demo", () => {

    it("Impilicit assertions", () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should    and

        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrm')

        /* cy.url().should('include', 'orangehrmlive.com')
         .should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         .should('contain', 'orangehrm') */

        cy.url().should('include', 'orangehrmlive.com')
            .and("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'greenhrm')

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
            .and('exist') //logo exist

        cy.xpath('//a').should('have.length', '5') // Number of links

        cy.get("input[name='username']").type("Admin") //Provide a value into inputbox

        cy.get("input[name='username']").should('have.value', 'Admin')  //value


    })

    it("excplicit assertions", () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        let expName = "manda user";

        cy.get("[class='oxd-userdropdown-name']").then((x) => {


            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })


    })


})