import { test, expect, Locator, Page } from '@playwright/test'

export class CommonUtility {


    async updateObject(plainObj: Object, overrideKey: any, deleteKeys: Array<string>) {
        const updatedObj = {
            ...plainObj,
            ...overrideKey,
        };

        deleteKeys?.forEach(deleteKey => {
            delete updatedObj[deleteKey];
        });
        

        return updatedObj;
    }

}