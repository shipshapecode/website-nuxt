<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="nuxt-consulting">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          Nuxt.js Consulting
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
          vitae viverra tellus.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>

    <div
      class="section quote bg-grey-transparent flex flex-wrap justify-center"
    >
      <div class="section-content">
        <div class="font-bold text-5xl">
          “
        </div>

        <div itemprop="review" itemscope itemtype="http://schema.org/Review">
          <h2
            class="font-light text-navy text-2xl lg:text-4xl"
            itemprop="reviewBody"
          >
            Ship Shape knows what they’re doing. A thoughtful approach, pristine
            code and a 200% effort in everything they do, makes recommending
            them a no-brainer.
          </h2>

          <p
            class="font-bold"
            itemprop="author"
            itemscope
            itemtype="http://schema.org/Person"
          >
            <span itemprop="name">
              James Dixon
            </span>,
            <span itemprop="jobTitle">
              Founder
            </span>
            of
            <a href="https://www.scoutforpets.com/">
              Scout
            </a>
          </p>
        </div>
      </div>
    </div>

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
