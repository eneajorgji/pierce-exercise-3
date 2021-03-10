class SearchBike {
    static searchElement() {
        cy.viewport(1280, 720);
        cy.get('input#search-desktop')
            .type('Bike')
            .type('{enter}');
    }

    static getSearchResultName() {
        cy.viewport(1280, 720);
        cy.get('div.m-search-header__headline')
            .should('contain.text', 'Bike')
    }
}

export default SearchBike