<template>
  <div>
    <HeroBlock hero-classes="open-source">
      <template #content>
        <h1>Our Open Source Community</h1>
        <p>
          We believe code should be accessible to all. Ship Shape's open source
          projects enable us to play an active role in the day-to-day lives of
          developers.
        </p>
        <div>
          <nuxt-link to="/contact/" class="btn btn-red">
            Join our community
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="984"
          src="/img/hero-images/open-source.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <PortfolioContainer />

    <div class="section bg-blue-light flex flex-wrap justify-center">
      <div class="section-content">
        <h2>Sponsored Open Source</h2>

        <p class="max-w-5xl">
          From addons to custom Ember data adapters, our projects propel our
          community forward. Ship Shape's open source contributions have been
          downloaded millions of times by developers worldwide. Paid work
          enables people from different walks of life to make meaningful
          contributions. Interested in sponsoring or partnering with Ship Shape?
          Contact us today.
        </p>

        <nuxt-link class="learn-more" to="/contact/">
          Contact us
          <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock'),
    PortfolioContainer: () => import('@/components/PortfolioContainer')
  },

  head() {
    const title = 'Open Source Software';
    const description =
      'We build and support countless open source projects. ' +
      'Discover why Ship Shape loves open source development.';
    const url = 'https://shipshape.io/services/open-source/';

    return generateMeta(title, description, url);
  }
};
</script>
