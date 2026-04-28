import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/ple');
  await page.getByRole('button').click();
  await page.locator('osee-top-level-navigation').getByText('Product Line Engineering').click();
  await page.getByRole('link', { name: 'Advanced Artifact Search' }).click();
  await page.getByRole('button', { name: 'Customize Columns' }).click();
  
  await expect(page.getByRole('checkbox', { name: 'ID' })).toBeDisabled();
  
  await expect(page.getByRole('checkbox', { name: 'ID' })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'Type' })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'Name' })).toBeChecked();
  
  await page.getByRole('checkbox', { name: 'Type', exact: true }).uncheck();
  await expect(page.getByRole('checkbox', { name: 'Type' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Type', exact: true }).check();
  await expect(page.getByRole('checkbox', { name: 'Type' })).toBeChecked();
  
  await page.getByRole('checkbox', { name: 'Name', exact: true }).uncheck();
  await expect(page.getByRole('columnheader', { name: 'Name' })).not.toBeVisible();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).check();
  await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible();
  
  await expect(page.locator('.mat-mdc-select-arrow')).toBeVisible();
  
  await page.locator('.mat-mdc-select-arrow > svg').click();
  
  await expect(page.getByText('A-Z')).toBeVisible();
  await expect(page.getByText('Z-A')).toBeVisible();
  await expect(page.getByText('Selected First')).toBeVisible();
  
  await page.getByText('A-Z').click();
  await page.locator('.mat-mdc-select-arrow > svg').click();
  await page.getByText('Z-A').click();
  await page.locator('.mat-mdc-select-arrow > svg').click();
  await page.getByText('Selected First').click();
});