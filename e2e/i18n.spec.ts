import { expect, test } from '@playwright/test';

import { METADATA } from '@/constants/meta';
import { LOCALE_ROUTES } from '@/constants/routes';
import { LANGUAGES } from '@/i18n/config';

test.describe('The page is rendered according to the selected language', () => {
  test('should display the page translated into Korean correctly', async ({
    page,
  }) => {
    await page.goto(LOCALE_ROUTES.EN);

    await page.getByRole('combobox').click();
    await page.getByLabel(LANGUAGES.ko).click();

    await expect(page).toHaveURL(LOCALE_ROUTES.KO);
    await expect(page).toHaveTitle(METADATA.KO.TITLE);
  });

  test('should display the page translated into English correctly', async ({
    page,
  }) => {
    await page.goto(LOCALE_ROUTES.KO);

    await page.getByRole('combobox').click();
    await page.getByLabel(LANGUAGES.en).click();

    await expect(page).toHaveURL(LOCALE_ROUTES.EN);
    await expect(page).toHaveTitle(METADATA.EN.TITLE);
  });
});
