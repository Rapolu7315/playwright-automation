import { Page } from '@playwright/test';
import { BasePage } from '../core/Basepage';


export class LoginPage extends BasePage {
  readonly username;
  readonly password;
  readonly loginButton;

  constructor(page: Page) {
    super(page);

    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginButton);
  }
}