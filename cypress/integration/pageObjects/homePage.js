class HomePage {
    static loadHomePage() {
        const IRALANDWEB = '.ie/'
        const POLADNWE = '.pl/'
        cy.viewport(1280, 720);
        cy.visit(Cypress.env('url') + IRALANDWEB);
        // the ending of the website is saved as a const, should you change only ending in the const
        cy.title().should('include', '24mx');
        cy.get('[class*=qa-consent-agree-btn]',
            { timeout: 5000 })
            .should('be.visible');
    }

    static acceptCookies() {
        cy.viewport(1280, 720);
        cy.get('[class*=qa-consent-agree-btn]')
            .click({ force: true })
    }
}

export default HomePage;