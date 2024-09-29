import 'cypress-iframe'

describe("handling frames", () => {

    it('appraoch1', () => {

        cy.visit("https://qavbox.github.io/demo/iframes/");

        const iframe=cy.get("[id='Frame2']")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.find("[id='frameinput']").type("Samsung");

})

it('appraoch2 - by using Custom command', () => {

    cy.visit("https://qavbox.github.io/demo/iframes/");
    cy.getIframe("[id='Frame2']").find("[id='frameinput']").type("Apple");

 
})

it('appraoch3 - by using cypress-iframe plugin', () => {

    cy.visit("https://qavbox.github.io/demo/iframes/");

    cy.frameLoaded("[id='Frame2']");  //Load the frame

    cy.iframe("[id='Frame2']").find("[id='frameinput']").clear().type("Iphone");
})

it.only('appraoch3 - by using cypress-iframe plugin', () => {

    cy.visit("https://www.rediff.com/");

    cy.get("button[class='fc-button fc-cta-consent fc-primary-button']").click();

    cy.frameLoaded("[id='moneyiframe']");  //Load the frame

    cy.iframe("[id='moneyiframe']").find("div[class='cellone']>a").invoke('removeAttr','target').click();
})

})