import HomePage from '../pageObjects/homePage'
import SubscribeNewsLetter from '../pageObjects/subscribeNewsletter'

describe('Subcribe email Test', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    it('Type in email and click sumbit', function () {
        SubscribeNewsLetter.typeEmail();
    })
})