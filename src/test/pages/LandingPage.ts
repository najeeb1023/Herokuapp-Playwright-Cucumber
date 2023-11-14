import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/Interfaces/iPagesElelment";
import * as landingPageLocators from "../resources/landingPage.json"

function getResource(resourceName :string ){
    return landingPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}
export class LandingPage{
    landingPageLocators = {
        functionList:() => pageFixture.page.locator(getResource('allFunctionList').selectorValue),
    }
    public async goToLandingPage():Promise<any>{
        await pageFixture.page.goto('https://the-internet.herokuapp.com/')
    }
    public async checkSelectedFunction(getFunction):Promise<any>{
        await pageFixture.page.locator("//div[@id='content']//ul//li[contains(., '"+getFunction+"')]/a").click();
    }
    constructor(public page: Page){
        this.page = page;
    }
}