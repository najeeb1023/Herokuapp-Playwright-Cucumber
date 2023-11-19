import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class Redirect {

    public async goToFunctionRedirect(getFunction: string):Promise<void>{
        await pageFixture.page.locator("//div[@id='content']//ul//li[contains(., '"+getFunction+"')]/a").click();
    }


    constructor(public page: Page){
        pageFixture.page = page;
    }

}