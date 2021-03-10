class HomePage {
    #TODO Think about SetUp and TearDown
    static loadHomePage() {
        cy.viewport(1280, 720);
        cy.visit(Cypress.env('url') + '.ie/');
        cy.title().should('include', '24mx');
        cy.get('[class*=qa-consent-agree-btn]',
            { timeout: 5000 })
            .should('be.visible');
    }

    static acceptCookies() {
        cy.viewport(1280, 720);
        cy.get('[class*=qa-consent-agree-btn]')
            // .click({ timeout: 6000 })
            .click({ force: true })
        // .should(); #TODO: check what should be the assert
    }
}

export default HomePage;