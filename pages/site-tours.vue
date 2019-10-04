<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="site-tours">
      <template v-slot:content>
        <h1
          class="heading"
          itemprop="name"
        >
          Site Tours with Shepherd.js
        </h1>
        <p>
          We leverage <a href="https://shepherdjs.dev/">Shepherd.js</a> to create site tours to show new users around your app.
          A step-by-step guide and feature introduction can help get them up to speed quickly.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <ShepherdLogo class="shepherd-logo max-w-lg p-12 w-full"/>
      </template>
    </HeroBlock>

    <WhyShepherd/>
  </div>
</template>

<style>
  .shepherd-logo .lines,
  .shepherd-logo .open-eye,
  .shepherd-logo .wink {
    transition: visibility 0s, opacity 0.25s ease-in-out;
  }

  .shepherd-logo .open-eye {
    opacity: 1;
    visibility: visible !important;
  }

  .shepherd-logo .lines,
  .shepherd-logo .wink {
    opacity: 0;
    visibility: hidden !important;
  }

  .shepherd-logo:hover .lines,
  .shepherd-logo:hover .wink {
    opacity: 1;
    visibility: visible !important;
  }

  .shepherd-logo:hover .open-eye {
    opacity: 0;
    visibility: hidden !important;
  }
</style>

<script>
  import ShepherdLogo from '~/assets/svgs/shepherd.svg?inline';
  import HeroBlock from '~/components/HeroBlock.vue';
  import WhyShepherd from '~/components/WhyShepherd.vue';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      ShepherdLogo,
      HeroBlock,
      WhyShepherd
    },

    head() {
      const title = 'Site Tours with Shepherd.js';
      const description = '';
      const url = 'https://shipshape.io/site-tours/';

      return generateMeta(title, description, url);
    }
  };
</script>
