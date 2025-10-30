import { Locator, Page } from '@playwright/test';
import { logger } from '../../utils/logger';

export class HomePage {
    constructor (public page: Page,

        readonly app_logo : Locator = page.locator('//div[@class="app_logo"]'),
        readonly logo_cart : Locator = page.locator('//div[@id="shopping_cart_container"]'),
        readonly txt_products : Locator = page.locator('//div[@class="title"]'),
        readonly container : Locator = page.locator('//div[@id="inventory_container"]'),

        // logout locators

        readonly burger_menu : Locator = page.locator('//div[@class="bm-burger-button"]'),
        readonly btn_logout : Locator = page.locator('//*[@id="logout_sidebar_link"]'),
        

        // locked user locator
        readonly txt_error_message : Locator = page.locator('//div[@class="error-message-container error"]'),

    ){

    }
      
    }
