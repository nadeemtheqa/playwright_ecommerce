import { test } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { AssertionUtility } from '../utils/assertion.utility';
import errorMessages from '../tests/test-data/errorMessages.json';


let login : LoginPage;
let home : HomePage;
let assertionUtility : AssertionUtility;


test.beforeEach('Navigate to landing page', async ({ page }) => {
login = new LoginPage(page);
home = new HomePage(page);
assertionUtility = new AssertionUtility();
await login.navigateToPage();

    
});

test('Login as standard user and assert the home page', async ({ page }) => {
await login.validLogin(process.env.usernameStandard ??"", process.env.passwordValid??"");
await assertionUtility.textAssertion(home.app_logo, "Swag Labs");
await assertionUtility.textAssertion(home.logo_cart, "");
await home.burger_menu.click();
await home.btn_logout.click();

});

test('Login as locked out user', async ({ page }) => {
await login.validLogin(process.env.usernameLocked ??"", process.env.passwordValid??"");
await assertionUtility.textAssertion(home.txt_error_message, errorMessages.loginError.lockedUser);

});

test('Login with invalid password', async ({ page }) => {
await login.validLogin(process.env.usernameStandard ??"", process.env.passwordInvalid??"");
await assertionUtility.textAssertion(home.txt_error_message, errorMessages.loginError.inValidPass);


});

test('Login with Empty password', async ({ page }) => {
await login.validLogin(process.env.usernameStandard ??"", process.env.emptyPassword??"");
await assertionUtility.textAssertion(home.txt_error_message, errorMessages.loginError.emptyPassword);


});

test('Login with Empty Username', async ({ page }) => {
await login.validLogin(process.env.emptyUsername ??"", process.env.passwordValid??"");
await assertionUtility.textAssertion(home.txt_error_message, errorMessages.loginError.emptyUsername);


});