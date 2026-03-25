import { test, expect } from '@playwright/test';

test.describe('Landing Page - Layout & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the landing page and have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Photo Journey Landing/);
  });

  test('should display global header and footer', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have working footer navigation links', async ({ page }) => {
    const footer = page.locator('footer');

    // Check the presence of a few typical footer elements/links
    const links = footer.getByRole('link');
    expect(await links.count()).toBeGreaterThan(0);
  });
});
