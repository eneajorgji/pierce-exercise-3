import HomePage from '../pageObjects/homePage'

describe('Home Page Test', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    // it('Reload the page', function () {
    //     HomePage.reloadPage();
    // })

    // it('Be visible TC', function () {
    //     HomePage.beVisible();
    // })
})