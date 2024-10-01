import 'cypress-iframe'

require('@4tw/cypress-drag-drop')


describe("Mouse Operations", () => {

    it('MouseHover', () => {

        cy.visit("https://demo.opencart.com/");

        cy.get("body main div[class='container'] nav[id='menu'] div[id='narbar-menu'] ul[class='nav navbar-nav'] li:nth-child(1) div:nth-child(1)").should('not.be.visible');

        cy.get("div[class='collapse navbar-collapse']>ul>li:nth-child(1)").trigger('mouseover').click();

        cy.get("body main div[class='container'] nav[id='menu'] div[id='narbar-menu'] ul[class='nav navbar-nav'] li:nth-child(1) div:nth-child(1)").should('be.visible');
    })

    it('Right Click', () => {


        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Appraoch1
        /*cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu');
          cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(3)").should('be.visible'); */

        //Appraoch2
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(3)").should('be.visible');


    })
    it('Double Click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.get("div[id='accept-choices']").click();
        cy.frameLoaded("iframe[name='iframeResult']");


        //Appraoch1 - trigger()
        //cy.iframe("iframe[name='iframeResult']").find("button[ondblclick='myFunction()']").trigger('dblclick');
        //cy.iframe("iframe[name='iframeResult']").find("input[id='field2']").should('have.value','Hello World!')

        //Appraoch2 - doubleClick()
        cy.getIframe("iframe[name='iframeResult']").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("iframe[name='iframeResult']").find("input[id='field2']").should('have.value', 'Hello World!')


    })

    it('Drag and Drop using plugin', () => {

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.wait(2000);
        cy.get("div[id='box6']").drag("div[id='box106']", { force: true });
    })

    it.only('Scrolling Page', () => {

        cy.visit("https://flagpedia.net/index");

        cy.get("img[alt='Flag of Germany']").scrollIntoView({ duration: 3000 });
        cy.get("img[alt='Flag of Germany']").should('be.visible');

        //cy.wait(3000);

        cy.get("img[alt='Flag of Algeria']").scrollIntoView({ duration: 3000 });
        cy.get("img[alt='Flag of Algeria']").should('be.visible');

        cy.get("img[alt='Flag of Zimbabwe']").scrollIntoView({ duration: 3000 });
        cy.get("img[alt='Flag of Zimbabwe']").should('be.visible');


    })


})