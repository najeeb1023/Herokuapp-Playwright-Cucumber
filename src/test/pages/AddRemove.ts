import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
export class AddRemove {

    addRemoveLocators = {
        addElementBtn:() => pageFixture.page.locator("//div[@class='example']//button[contains(., 'Add Element')]"),
        deleteBtns:() => pageFixture.page.locator("//div[@class='example']//button[contains(., 'Delete')]")
    }

    public async getFunctionName(getFunction: string):Promise<void>{
        await pageFixture.page.locator("//div[@class='large-12 columns']//li[contains(., '"+getFunction+"')]/a").click();
    }

    public async addElement(numberOfAddedElements: number):Promise<void>{
        for(let i=1;i<=numberOfAddedElements;i++){
            await this.addRemoveLocators.addElementBtn().click(); 
        }
    }

    public async assertElementIsAdded(assertTimesElementIsAdded: number):Promise<void>{
        for(let i=1; i<=assertTimesElementIsAdded;i++){
            const assertDeleteBtns = pageFixture.page.locator("//div[@class='example']//button[contains(., 'Delete')][placeholder]".replace('placeholder', i.toString()));
            await expect(assertDeleteBtns).toBeVisible();
        }
        const buttonCount = this.addRemoveLocators.deleteBtns();
        console.log("Number of buttons found -> " + await buttonCount.count())

        const textContentOfAddedBtns = this.addRemoveLocators.deleteBtns().count();
        for(let j=1;j<=await textContentOfAddedBtns;j++){
            const getBtnText = pageFixture.page.locator("//div[@class='example']//button[contains(., 'Delete')][placeholder]".replace('placeholder', j.toString()));
            const text = await getBtnText.textContent();
            const textOutput = [text]
            console.log("Name of the button is -> " + `${textOutput}` + " ");
        }
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}