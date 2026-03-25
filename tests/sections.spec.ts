import { test, expect } from '@playwright/test';

test.describe('Landing Page - Sections Visibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all main sections', async ({ page }) => {
    const sections = [
      '.hero',
      '.mindset',
      '.lens',
      '.marrakech',
      '.social-media',
      '.related-articles'
    ];

    for (const section of sections) {
      await expect(page.locator(section)).toBeVisible();
    }
  });
});
