import { test, expect } from '@playwright/test';

test('shows new entry first', async ({ page }) => {
  await page.goto('/');

  const firstEntry = await page.locator('.box').first();
  await expect(firstEntry).toBeVisible();
  await expect(firstEntry).toContainText('NEU');
});

test('shows entry content', async ({ page }) => {
  await page.goto('/');

  const firstEntry = await page.locator('.box').first();
  await expect(firstEntry).toBeVisible();
  await expect(firstEntry).toContainText('Entry 1 Titel');
  await expect(firstEntry).toContainText('Entry 1 Description');
  await expect(firstEntry).toContainText('https://www.entry1.de');
  await expect(firstEntry).toContainText('Tag 1');
  await expect(firstEntry).toContainText('Tag 2');
});
