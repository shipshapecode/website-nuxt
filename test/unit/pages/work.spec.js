import { resolve } from 'path';
import { setupTest, createPage } from '@nuxt/test-utils';

describe('work', () => {
  setupTest({
    browser: true,
    configFile: resolve(__dirname, '../pages/fixtures/nuxt.config.js'),
    rootDir: resolve(__dirname, '../../../'),
    testDir: resolve(__dirname, '../../'),
    config: {
      rootDir: resolve(__dirname, '../../../')
    }
  });

  test('meta is correct', async () => {
    const page = await createPage('/work/');
    const title = await page.innerHTML('title');
    expect(title).toContain(
      'Our Work - Enterprise Custom App Development | Ship Shape'
    );
  });
});
