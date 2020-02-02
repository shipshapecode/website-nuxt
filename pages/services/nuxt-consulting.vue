<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="nuxt-consulting">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          A Framework for Your Framework
        </h1>
        <p>
          Nuxt.js is a higher-level framework that simplifies the development of
          universal or single page Vue apps. With Nuxt.js, Ship Shape's team can
          write and build universal apps simply.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Get started
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>

    <WhyNuxt />
  </div>
</template>

<script>
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import WhyNuxt from '~/components/WhyNuxt';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    EmberConsultingIcon,
    HeroBlock,
    WhyNuxt
  },

  head() {
    const title = 'Nuxt.js Consulting';
    const description =
      'As a proven leader in Nuxt development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/nuxt-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
