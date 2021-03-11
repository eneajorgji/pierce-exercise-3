import HomePage from '../pageObjects/homePage'
import AddToCart from '../pageObjects/addToCart'

describe('Add item to cart', function () {
    it('Home Page TC', function () {
        HomePage.loadHomePage();
    })

    it('Accepting Cookies TC', function () {
        HomePage.acceptCookies();
    })

    it('Add item to cart', function(){
        AddToCart.addItemToCard();
    })

})