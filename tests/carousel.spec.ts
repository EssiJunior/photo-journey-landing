import { test, expect } from '@playwright/test';

test.describe('Landing Page - Carousel Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate Related Articles carousel', async ({ page }) => {
    // Ensure the Related Articles section is visible
    const relatedArticles = page.locator('.related-articles');
    await expect(relatedArticles).toBeVisible();

    // Find Next and Previous buttons
    const prevButton = relatedArticles.getByRole('button', { name: 'Previous' });
    const nextButton = relatedArticles.getByRole('button', { name: 'Next' });

    // Initially, the Previous button should be disabled
    await expect(prevButton).toBeDisabled();
    
    // Check if Next button is enabled before clicking
    if (await nextButton.isEnabled()) {
      await nextButton.click();

      // After clicking Next, Previous button should be enabled
      await expect(prevButton).toBeEnabled();
    }

    // Optionally check if clicking a dot pagination works
    const page2Dot = relatedArticles.getByRole('button', { name: 'Page 2' });
    if (await page2Dot.isVisible()) {
      await page2Dot.click();
      await expect(page2Dot).toHaveAttribute('aria-current', 'true');
    }
  });
});
