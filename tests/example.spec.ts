import { test, expect } from '@playwright/test';
import { BasePage } from '../core/Basepage';


test('has title', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.navigate('https://playwright.dev/');

  // Expect a title "to contain" a substring.

});

test('get started link', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.navigate('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
