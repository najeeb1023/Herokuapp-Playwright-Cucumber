import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import * as framePage from "../resources/framePage.json"
import { PageElement } from "../resources/Interfaces/iPagesElement";

function getResource(resoruceName: string){
    return framePage.webElements.find((element: PageElement) => element.elementName == resoruceName) as PageElement
}

export class Frames {

    framePageLocators = {
        getList:() => pageFixture.page.locator(getResource('getFrameFunctions').selectorValue),
        rightFrame:() => pageFixture.page.locator(getResource('rightFrame').selectorValue)
    }
    
    public async checkSelectedFunction(getFunction: string):Promise<any>{
        await pageFixture.page.locator("//div[@id='content']//ul//li[contains(., '"+getFunction+"')]/a").click();
    }

    public async workWithNestedFrames():Promise<void>{
        await expect(this.framePageLocators.rightFrame()).toBeHidden();

    }

    constructor(public page: Page){
        this.page = page;
    }
}