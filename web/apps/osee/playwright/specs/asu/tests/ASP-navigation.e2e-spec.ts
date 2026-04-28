import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/ple');
  await page.getByRole('button').click();
  await page.getByText('public Product Line Engineering chevron_right').click();
  await page.getByRole('link', { name: 'Advanced Artifact Search' }).click();
  
  await expect(page).toHaveURL('http://localhost:4200/ple/artifact/explorer/search');
  await expect(page.getByPlaceholder('Search')).toBeVisible();
});