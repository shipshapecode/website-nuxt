import { resolve } from 'path';
import { setupTest, createPage } from '@nuxt/test-utils';

describe('browser', () => {
  setupTest({
    browser: true,
    configFile: resolve(__dirname, '../pages/fixtures/nuxt.config.js'),
    rootDir: resolve(__dirname, '../../../'),
    testDir: resolve(__dirname, '../../'),
    config: {
      rootDir: resolve(__dirname, '../../../')
    }
  });

  test('should render homepage', async () => {
    const page = await createPage('/');
    const hero = await page.innerHTML('.hero');
    expect(hero).toContain(
      'We specialize in custom software and app development'
    );
  });
});
