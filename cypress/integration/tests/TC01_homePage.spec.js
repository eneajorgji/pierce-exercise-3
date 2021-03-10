import HomePage from '../pageObjects/homePage'

describe('Home Page Test', function () {
    // before('before', function() {
    //     cy.viewport(1280, 720);
    // }) 

    it('Home Page TC', function () {
        HomePage.loadHomePage();
        // HomePage.acceptCookies();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

})