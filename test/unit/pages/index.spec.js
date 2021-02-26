import { resolve } from 'path';
import { setupTest, createPage } from '@nuxt/test-utils';

describe('browser', () => {
  setupTest({
    browser: true,
    generate: true,
    configFile: resolve(__dirname, '../pages/fixtures/nuxt.config.js'),
    rootDir: resolve(__dirname, '../../../'),
    testDir: resolve(__dirname, '../../'),
    config: {
      rootDir: resolve(__dirname, '../../../')
    }
  });

  test('should render Nuxt consulting page', async () => {
    const page = await createPage('/services/nuxt-consulting/');
    const body = await page.innerHTML('body');
    expect(body).toContain('Works!');
  });
});
