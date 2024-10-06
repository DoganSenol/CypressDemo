describe('mySuite',()=>{

    it('NavigationTest',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store'); // Home Page
        cy.get("ul[class='nav navbar-nav']>li:nth-child(7)").click();
        cy.get("div[id='content']>h2").should('have.text','Cameras') //cameras

        cy.go('back'); // go back to home
        cy.title().should('eq','Your Store'); // Home Page

        cy.go('forward');
        cy.get("div[id='content']>h2").should('have.text','Cameras') //cameras

        cy.go(-1);
        cy.title().should('eq','Your Store'); // Home Page

        cy.go(1);
        cy.get("div[id='content']>h2").should('have.text','Cameras') //cameras

        cy.reload();

    })
})