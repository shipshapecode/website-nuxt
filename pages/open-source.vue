<template>
  <div>
    <HeroBlock class="open-source">
      <template v-slot:content>
        <h1 class="heading">
          We
          <Heart class="heartIcon inline"/>
          Open Source
        </h1>
        <p>
          At Ship Shape, contributing to open source software is an addiction. We maintain
          several Ember addons of our own, and have contributed to countless other
          projects throughout the open source community.
        </p>
        <div>
          <nuxt-link to="/work/" class="btn-navy">
            Learn how we work
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <OpenSourceIcon class="max-w-2xl"/>
      </template>
    </HeroBlock>

    <PortfolioContainer/>

    <div class="section bg-grey-transparent flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="heading">
          Sponsored Open Source Development
        </h2>

        <p class="max-w-5xl">
          Ember could not be the incredible framework it is, without companies helping fund
          its progress. Whether you need an Ember addon to implement your favorite
          library in native Ember, a custom Ember data adapter for your API setup,
          or changes to Ember itself, sponsored open source development can help
          give back to the community, while also solving your business needs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Heart from '~/assets/svgs/heart1.svg?inline';
  import HeroBlock from '~/components/HeroBlock.vue';
  import OpenSourceIcon from '~/assets/svgs/hero-images/open-source.svg?inline';
  import PortfolioContainer from '~/components/PortfolioContainer.vue';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      Heart,
      HeroBlock,
      OpenSourceIcon,
      PortfolioContainer
    },

    head() {
      const title = 'Ember Addons and Open Source';
      const description = 'We collaborate extensively with the Ember community on all facets of Ember. ' +
        'From documentation, to Ember CLI, and Ember itself. ' +
        'We have written several Ember addons of our own, and we are maintainers for the html-next ' +
        'addons, including flexi and vertical-collection.';
      const url = 'https://shipshape.io/open-source/';

      return generateMeta(title, description, url);
    }
  };
</script>
