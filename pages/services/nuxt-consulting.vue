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

    <div class="bg-navy section flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-center text-white w-full">
          Why use Nuxt?
        </h2>

        <div class="flex flex-wrap">
          <div class="flex flex-wrap w-full lg:flex-no-wrap">
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <h5 class="text-white">Reason 1</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <h5 class="text-white">Reason 2</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap w-full lg:flex-no-wrap">
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <h5 class="text-white">Reason 3</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <h5 class="text-white">Reason 4</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    EmberConsultingIcon,
    HeroBlock
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
