<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock :class="'site-tours'">
      <template v-slot:content>
        <h1
          class="heading"
          itemprop="name"
        >
          Site Tours with Shepherd.js
        </h1>
        <p>
          Something about Shepherd here
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon :class="'max-w-2xl'"/>
      </template>
    </HeroBlock>

    <div class="section quote bg-grey-transparent flex flex-wrap justify-center">
      <div class="section-content">
        <div class="font-bold text-5xl">
          “
        </div>

        <div itemprop="review" itemscope itemtype="http://schema.org/Review">
          <h2 class="font-light text-navy text-2xl lg:text-4xl" itemprop="reviewBody">
            Ship Shape knows what they’re doing. A thoughtful approach, pristine code and a 200% effort in everything they do, makes
            recommending them a no-brainer.
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
      const title = 'Site Tours with Shepherd.js';
      const description = '';
      const url = 'https://shipshape.io/site-tours/';

      return generateMeta(title, description, url);
    }
  };
</script>
