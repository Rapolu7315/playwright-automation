import { Page } from '@playwright/test';
import { BasePage } from '../core/Basepage';


export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get header(){
        return this.page.locator('#header-inner div.titlewrapper');
    }

}