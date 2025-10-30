import { expect, test } from '@playwright/test';
import { CheckoutPage } from './pages/checkout.page';
import { AssertionUtility } from '../utils/assertion.utility';
import errorMessages from './test-data/errorMessages.json';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { CommonUtility } from '../utils/common_utility';


let checkout : CheckoutPage;
let login : LoginPage;
let home : HomePage;
let assertionUtility : AssertionUtility;
let commonUtility : CommonUtility;



test.beforeEach('Navigate to landing page', async ({ page }) => {
    login = new LoginPage(page);
    home = new HomePage(page);
    checkout = new CheckoutPage(page);
    assertionUtility = new AssertionUtility();
    commonUtility = new CommonUtility();
    await login.navigateToPage();
    await login.validLogin(process.env.usernameStandard ?? "", process.env.passwordValid ?? "");
});


test ('Performing Checkout', async ({}) => {
    await checkout.addToCart();
    await checkout.performCheckout();
 
});

test ('Removing Product from bag', async ({}) => {
    await checkout.addToCart();
    let productName = await checkout.txt_ProductName.textContent();
    console.log (productName);
    await checkout.removeProductFromBag();
    await expect (checkout.txt_ProductName).toBeHidden();

});

test ('Add 2 products to bag and perform checkout', async ({}) => {
    await checkout.addToCart();
    await checkout.btn_ContinueShopping.click();
    await checkout.btn_addToCartLight.click();
    await checkout.btn_Cart.click();
    await checkout.performCheckout();
 
});

test ('Removing Products from bag', async ({}) => {
    await checkout.addToCart();
    await checkout.btn_ContinueShopping.click();
    await checkout.btn_addToCartLight.click();
    await checkout.btn_Cart.click();
    await checkout.removeProductFromBag();
    await checkout.btn_RemoveLight.click();

    
});

test ('Validating the Cart Badge count', async({}) => {
await checkout.addToCart();
let badge_count = await checkout.txt_cart_badge.innerText();
console.log(badge_count);
expect(badge_count).toBe('1');

});

test ('Validating Checkout Fields', async ({}) => {
    await checkout.addToCart();
    await checkout.btn_Checkout.click();
    await checkout.txt_FirstName.click();
    await checkout.txt_FirstName.fill('');
    await checkout.txt_LastName.fill('lastName');
    await checkout.txt_PostalCode.fill('123456');
    await checkout.btn_Continue.click();
    let error = await checkout.txt_error_message.innerText();
    console.log(error);
    await assertionUtility.textAssertion(checkout.txt_error_message, errorMessages.checkoutError.emptyFirstName);
 
});

test ('Validating All Checkout Fields with invalid data ', async ({ page }) => {
    await checkout.addToCart();
    await checkout.btn_Checkout.click();

    const fields: (keyof typeof errorMessages.assertionData)[] = ['firstName', 'lastName', 'postalCode'];

    for (const field of fields) {
        const validData = { ...errorMessages.assertionData };
        validData[field] = '';
        await checkout.txt_FirstName.fill(validData.firstName);
        await checkout.txt_LastName.fill(validData.lastName);
        await checkout.txt_PostalCode.fill(validData.postalCode);
        await checkout.btn_Continue.click();
        const errorKeyMap: { [key in typeof field]: keyof typeof errorMessages.checkoutError } = {
            firstName: 'emptyFirstName',
            lastName: 'emptyLastName',
            postalCode: 'emptyPostalCode',
        };

        const expectedError = errorMessages.checkoutError[errorKeyMap[field]];

        await assertionUtility.textAssertion(checkout.txt_error_message, expectedError);

    }
});