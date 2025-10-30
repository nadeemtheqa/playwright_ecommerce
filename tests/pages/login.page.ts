import { Locator, Page } from '@playwright/test';
import { logger } from '../../utils/logger';
import { HomePage } from '../pages/home.page';




export class LoginPage {
    constructor( public page: Page,
        readonly txt_username: Locator = page.locator('[data-test="username"]'),
        readonly txt_password: Locator = page.locator('[data-test="password"]'),
        readonly btn_login: Locator = page.getByRole('button', { name: 'LOGIN' }),
        readonly error_message: Locator = page.locator('[data-test="error"]')

    )
    {

    }
    async navigateToPage(): Promise<void> {
        try {
            await this.page.goto('/');
            logger.info('Webpage Launched Successfully');
        } catch (error) {
            logger.error(`Unable to Launch the Webpage: ${error}`);
        }
    }

    /**
     * Performs login action using provided username and password.
     * Fills in credentials and clicks the login button.
     *
     * @param {string} username - Username to log in with.
     * @param {string} password - Password associated with the username.
     * @returns {Promise<void>}
     */
    async validLogin(username: string, password: string ): Promise<void> {

        try {
            await this.txt_username.fill(username);
            await this.txt_password.fill(password);
            await this.btn_login.click();
            logger.info('User Logged-In Successfully');

        } catch (error) {
            logger.error(`Error while logging in : ${error}`);
        }

    }


}
