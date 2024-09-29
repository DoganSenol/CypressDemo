declare namespace Cypress{

    interface Chainable{
        getIframe(iFrameLocator: string): Chainable<Element>
    }


}