<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="nuxt-consulting">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          Nuxt Consulting
        </h1>
        <p>
          Nuxt.js is a higher-level framework that simplifies the development of
          universal or single page Vue apps. With Nuxt.js, Ship Shape's team can
          write and build universal apps simply.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/contact/">
            Get started
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <NuxtConsultingIcon class="m-auto max-w-2xl" />
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
              <ModularIcon class="h-20 inline-block mb-8 w-auto" />

              <h5 class="text-white">
                Modular
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <PerformanceIcon class="h-20 inline-block mb-8 w-auto" />

              <h5 class="text-white">
                Performant
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap w-full lg:flex-no-wrap">
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <FunIcon class="h-20 inline-block mb-8 w-auto" />

              <h5 class="text-white">
                Enjoyable
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                placerat cursus ex, in pretium massa tincidunt vitae. Nulla
                tincidunt lobortis faucibus. Donec pretium malesuada venenatis.
              </p>
            </div>
            <div class="bg-navy-light m-3 p-12 w-full lg:w-1/2">
              <StaticIcon class="h-24 inline-block mb-4 w-24" />

              <h5 class="text-white">
                Static / PWA
              </h5>

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
import NuxtConsultingIcon from '~/assets/svgs/hero-images/nuxt-consulting.svg?inline';
import FunIcon from '~/assets/svgs/pages/nuxt-consulting/fun.svg?inline';
import ModularIcon from '~/assets/svgs/pages/nuxt-consulting/modular.svg?inline';
import PerformanceIcon from '~/assets/svgs/pages/nuxt-consulting/performance.svg?inline';
import StaticIcon from '~/assets/svgs/pages/nuxt-consulting/static.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
    FunIcon,
    ModularIcon,
    NuxtConsultingIcon,
    PerformanceIcon,
    StaticIcon
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
