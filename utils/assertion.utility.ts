import { Locator } from "playwright";
import { expect } from "playwright/test";

export class AssertionUtility {

    async textAssertion (locator: Locator, expectedData: string ){
       await expect (locator).toHaveText (expectedData);
    }

}