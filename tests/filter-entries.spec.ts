import { test, expect } from '@playwright/test';

test('filter by single interest', async ({ page }) => {
  await page.goto('/');

  const card1 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 1' }).first()
  const card2 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 2' }).first()
  const card3 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 3' }).first()

  await page.locator('span').filter({ hasText: 'Initiativen' }).click();
  await expect(card1).not.toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).not.toBeVisible();

  await page.locator('#my-selection-selector').getByText('Initiativen').click();
  await expect(card1).toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).toBeVisible();
});

test('filter by single interest no match', async ({ page }) => {
  await page.goto('/');

  const card1 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 1' }).first()
  const card2 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 2' }).first()
  const card3 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 3' }).first()

  await page.locator('span').filter({ hasText: 'Karriere' }).click();

  await expect(card1).not.toBeVisible();
  await expect(card2).not.toBeVisible();
  await expect(card3).not.toBeVisible();

  await page.locator('#my-selection-selector').getByText('Karriere').click();
  await expect(card1).toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).toBeVisible();
});

test('filter by multiple interests', async ({ page }) => {
  await page.goto('/');

  const card1 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 1' }).first()
  const card2 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 2' }).first()
  const card3 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 3' }).first()

  await page.locator('span').filter({ hasText: 'Initiativen' }).click();
  await page.locator('span').filter({ hasText: 'Konferenzen' }).click();

  await expect(card1).toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).not.toBeVisible();

  await page.locator('#my-selection-selector').getByText('Initiativen').click();
  await page.locator('#my-selection-selector').getByText('Konferenzen').click();

  await expect(card1).toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).toBeVisible();
});

test('filter by multiple interests no match', async ({ page }) => {
  await page.goto('/');

  const card1 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 1' }).first()
  const card2 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 2' }).first()
  const card3 = page.getByTestId('cards').locator('div').filter({ hasText: 'Entry 3' }).first()

  await page.locator('span').filter({ hasText: 'Communities' }).click();
  await page.locator('span').filter({ hasText: 'Sichtbarkeit' }).click();

  await expect(card1).not.toBeVisible();
  await expect(card2).not.toBeVisible();
  await expect(card3).not.toBeVisible();

  await page.locator('#my-selection-selector').getByText('Communities').click();
  await page.locator('#my-selection-selector').getByText('Sichtbarkeit').click();

  await expect(card1).toBeVisible();
  await expect(card2).toBeVisible();
  await expect(card3).toBeVisible();
});
