import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class AddRemove {

    public async getFunctionName(getFunction: string):Promise<void>{
        await pageFixture.page.locator("//div[@class='large-12 columns']//li[contains(., '"+getFunction+"')]/a").click();
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}