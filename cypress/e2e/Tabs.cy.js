describe('Handle Tabs', () => {

    it.skip('Appracoh1', () => {

        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab

        cy.get("div[class='example']>a").invoke('removeAttr', 'target').click(); //clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

        cy.wait(5000);

        cy.go('back'); //back to parent tab
    })

    it('Appracoh2', () => {

        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get("div[class='example']>a").then((e) => {

            let url = e.prop('href');

            cy.visit(url);
        })


        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

        cy.wait(5000);

        cy.go('back'); //back to parent tab

        cy.url().should('include','https://the-internet.herokuapp.com/windows');


    })
})