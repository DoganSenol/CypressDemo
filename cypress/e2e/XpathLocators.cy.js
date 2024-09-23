

describe("XpathLocators", () => {


    it('find number of products', () => {

        cy.visit("https://automationteststore.com/")

        cy.xpath("//div[@class='block_frame block_frame_featured']//div[@class='thumbnail']").should('have.length',4)

})

it('chained xpath', () => {

    cy.visit("https://automationteststore.com/")

    cy.xpath("//div[@class='block_frame block_frame_featured']").xpath(".//div[@class='thumbnail']").should('have.length',4)

})



})