import { Locator, Page } from '@playwright/test';


export class CheckoutPage {
    constructor ( public page: Page,
        readonly btn_addToCart : Locator =  page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
        readonly btn_Cart : Locator = page.locator('[data-test="shopping-cart-link"]'),
        readonly btn_Checkout : Locator = page.locator('[data-test="checkout"]'),
        readonly txt_FirstName : Locator = page.locator('[data-test="firstName"]'),
        readonly txt_LastName: Locator = page.locator('[data-test="lastName"]'),
        readonly txt_PostalCode : Locator = page.locator('[data-test="postalCode"]'),
        readonly btn_Continue : Locator =  page.locator('[data-test="continue"]'),
        readonly btn_Finish : Locator = page.locator('[data-test="finish"]'),
        readonly btn_BackHome : Locator = page.locator('[data-test="back-to-products"]'),  
        readonly btn_Remove : Locator = page.locator('//button[@id="remove-sauce-labs-backpack"]'),
        readonly txt_ProductName : Locator = page.locator('//div[@class="inventory_item_name"]'),
        readonly btn_addToCartLight : Locator =  page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        readonly btn_ContinueShopping : Locator = page.locator('[data-test="continue-shopping"]'),
        readonly btn_RemoveLight : Locator = page.locator('//button[@id="remove-sauce-labs-bike-light"]'),
        readonly txt_cart_badge : Locator = page.locator('//span[@data-test="shopping-cart-badge"]'),
        readonly txt_error_message : Locator = page.locator('//h3[@data-test="error"]'),
        


    ){


    }

    async addToCart (){
        await this.btn_addToCart.click();
        await this.btn_Cart.click();

    }


    async performCheckout (){
     await this.btn_Checkout.click();
     await this.txt_FirstName.click();
     await this.txt_FirstName.fill('FirstName');
     await this.txt_LastName.fill('lastName');
     await this.txt_PostalCode.fill('123456');
     await this.btn_Continue.click();
     await this.btn_Finish.click();
     await this.btn_BackHome.click();
}
     async fillCheckout (firstName : string, lastName : string , pincode : string , flag : "yes" | "no"){
     await this.btn_Checkout.click();
     await this.txt_FirstName.fill(firstName);
     await this.txt_LastName.fill(lastName);
     await this.txt_PostalCode.fill(pincode);
     if(flag == "yes")
     {
        await this.btn_Continue.click();
     }
}
    async removeProductFromBag (){
     await this.btn_Remove.click();



    }

}