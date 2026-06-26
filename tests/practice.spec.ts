import { test, expect } from '@playwright/test';
import { BasePage } from '../core/Basepage';
import { AppConfig } from '../config/Appconfig';
import { HomePage } from '../pages/Homepage';


test('Verify the header and title', async ({ page }) => {
  const homepage = new HomePage(page);
  await page.goto(AppConfig.BASE_URL);
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(homepage.header).toBeVisible();
});

test('get started link', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.navigate('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
