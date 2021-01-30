<template>
  <div>
    <HeroBlock class="open-source">
      <template #content>
        <h1>Our Open Source Community</h1>
        <p>
          We believe code should be accessible to all. Ship Shape's open source
          projects enable us to play an active role in the day-to-day lives of
          developers.
        </p>
        <div>
          <nuxt-link to="/contact/" class="btn btn-navy">
            Join our community
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/open-source.png?webp')"
        />
      </template>
    </HeroBlock>

    <PortfolioContainer />

    <div class="section bg-grey-transparent flex flex-wrap justify-center">
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
          <inline-svg class="h-4 inline mb-1 w-4" src="/svgs/angle-right.svg" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import PortfolioContainer from '~/components/PortfolioContainer.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
    PortfolioContainer
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
