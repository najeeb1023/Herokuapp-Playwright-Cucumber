import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/Interfaces/iPagesElement";
import * as landingPageLocators from "../resources/landingPage.json"

function getResource(resourceName: string ){
    return landingPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}
export class LandingPage{
    landingPageLocators = {
        functionList:() => pageFixture.page.locator(getResource('allFunctionList').selectorValue),
    }

    public async goToLandingPage():Promise<any>{
        await pageFixture.page.goto('https://the-internet.herokuapp.com/');
    }

    public async checkSelectedFunction(getFunction: string):Promise<any>{
        await pageFixture.page.locator("//div[@id='content']//ul//li[contains(., '"+getFunction+"')]/a").click();
    }

    public async sortTable():Promise<any>{
        const dataElements = await pageFixture.page.locator("//table[@id='table2']//tbody//tr").count();
        console.log("Number of users found: " + dataElements)
        for(let i=1;i<=dataElements;i++){
        const getLastName = await pageFixture.page.locator("//table[@id='table2']//tbody//tr[placeholder]//td[3]".replace('placeholder', i.toString())).textContent();
        process.stdout.write(`${getLastName}` + "| ")
        }
        
    }
    constructor(public page: Page){
        this.page = page;
    }
}