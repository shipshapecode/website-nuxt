<template>
  <div>
    <HeroBlock class="work">
      <template v-slot:content>
        <h1 class="heading text-3xl sm:text-6xl">
          Making Waves
        </h1>
        <p>
          Unlike large corporations with offshore developers, Ship Shape crafts
          homegrown, bespoke solutions to solve problems. This is how we're
          making waves for clients nationwide like Netflix and SocialCode.
        </p>
        <div>
          <nuxt-link to="/contact/" class="btn-navy">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <OpenSourceIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>
    <div class="section flex flex-wrap justify-center">
      <div class="section-content">
        <CaseStudiesList />

        <ClientsGrid />
      </div>
    </div>
  </div>
</template>

<script>
import CaseStudiesList from '~/components/CaseStudiesList.vue';
import ClientsGrid from '~/components/ClientsGrid.vue';
import HeroBlock from '~/components/HeroBlock.vue';
import OpenSourceIcon from '~/assets/svgs/hero-images/open-source.svg?inline';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    CaseStudiesList,
    ClientsGrid,
    HeroBlock,
    OpenSourceIcon
  },

  head() {
    const title = 'Our Work';
    const description =
      'See a few examples of our work in Ember Consulting, and how we solve tough problems for our clients.';
    const url = 'https://shipshape.io/work/';

    return generateMeta(title, description, url);
  }
};
</script>
