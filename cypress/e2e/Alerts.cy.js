describe('Alerts', () => {

    //1) Javascript Alert: It will have some text and an 'OK' button   
    it('Js alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {

            expect(t).to.contains('I am a JS Alert')
        })

        // alert window automatically closed by cypress


        cy.get("[id='result']").should('have.text', 'You successfully clicked an alert')
    })

    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('Js confirm alert - OK Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm')
        })

        // cypress automaticly closed alert window by using ok Button-default

        cy.get("[id='result']").should('have.text', 'You clicked: Ok')
    })

    it('Js confirm alert - Cancel Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', () => false);  //cypress cloeses window using cancel Button


        cy.get("[id='result']").should('have.text', 'You clicked: Cancel')
    })


    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
    it('Js prompt alert - OK Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS prompt')
        })

        //cypress will automaticly close promted alert - it will use OK button - by default

        cy.get("[id='result']").should('have.text', 'You entered: welcome')


    })

    it('Js prompt alert - Cancel Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {

            cy.stub(win, 'prompt').callsFake((text) => {

                if (text === 'welcome') {
                    return 'welcome';
                } else {
                    return null;
                }
            });

            cy.get("button[onclick='jsPrompt()']").click();

            cy.get("[id='result']").should('have.text', 'You entered: null')

        })

    })

    //4) Authenticated Alert

    it('Authenticated alert', () =>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth:
            {
                username: "admin",
                password: "admin"
            }

        })
        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
    })

    it.only('Authenticated alert', () =>{

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
    })
})