describe('Linkedin Login Test', () =>{

    it('Login Check',()=>{

        cy.visit("https://de.linkedin.com/")
        cy.get('button').contains('Akzeptieren').click();
        cy.get("a[data-tracking-control-name='guest_homepage-basic_nav-header-signin']").click();
        cy.get("input[id='username']").type(Cypress.env('user_name'),{log: false})


    })
})