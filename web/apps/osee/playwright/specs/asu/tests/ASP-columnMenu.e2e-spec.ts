import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/ple');
  await page.getByRole('button').click();
  await page.locator('osee-top-level-navigation').getByText('Product Line Engineering').click();
  await page.getByRole('link', { name: 'Advanced Artifact Search' }).click();
  await page.getByRole('button', { name: 'Customize Columns' }).click();
  
  await expect(page.getByRole('checkbox', { name: 'ID', exact: true })).toBeDisabled();
  
  await expect(page.getByRole('checkbox', { name: 'ID', exact: true })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'Type', exact: true })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'Name', exact: true })).toBeChecked();
  
  await page.getByRole('checkbox', { name: 'Type', exact: true }).uncheck();
  await expect(page.getByRole('checkbox', { name: 'Type', exact: true })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Type', exact: true }).check();
  await expect(page.getByRole('checkbox', { name: 'Type', exact: true })).toBeChecked();
  
  await page.getByRole('checkbox', { name: 'Name', exact: true }).uncheck();
  await expect(page.getByRole('columnheader', { name: 'Name', exact: true })).not.toBeVisible();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).check();
  await expect(page.getByRole('columnheader', { name: 'Name', exact: true })).toBeVisible();
  
  await expect(page.locator('.mat-mdc-select-arrow')).toBeVisible();
  
  await page.locator('.mat-mdc-select-arrow > svg').click();
  
  await expect(page.getByRole('option', { name: 'A-Z' })).toBeVisible();
  await expect(page.getByRole('option', { name: 'Z-A' })).toBeVisible();
  await expect(page.getByRole('option', { name: 'Selected First' })).toBeVisible();
  
  await page.getByText('A-Z').click();
  await page.locator('.mat-mdc-select-arrow > svg').click();
  await page.getByText('Z-A').click();
  await page.locator('.mat-mdc-select-arrow > svg').click();
  await page.getByText('Selected First').click();
});