

describe('handle dropdowns', () => {

    it.skip('Drop with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get("select[id='zcf_address_country']")
            .select('Italy')
            .should('have.value', 'Italy')
    })

    it.skip('Drop without select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get("[id='select2-billing_country-container']").click()

        cy.get("input[class='select2-search__field']").type('Italy').type('{enter}')

        cy.get("[id='select2-billing_country-container']")
            .should('have.text', 'Italy')
    })

    it.skip('Auto suggest dropdown', () => {

        cy.visit('https://www.wikipedia.org/')

        cy.get("select[id='searchLanguage']")
            .select('de')

        cy.get("input[id='searchInput']").type('deutsch')

        cy.get("[class='suggestion-title']").contains('Deutsche Demokratische Republik').click()
    })

    it('Dynamic dropdown', () => {

        cy.visit('https://www.google.com/')


        cy.get('button').contains('Alle akzeptieren').click()


        cy.get("textarea[name='q']").type('cypress automation')

        cy.wait(3000)

        cy.get("div[class='wM6W7d']:nth-child(1)").should('have.length', 13)

        cy.get("div[class='wM6W7d']:nth-child(1)").each(($el, index, $list) => {

            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value', 'cypress automation tutorial')

    })
})