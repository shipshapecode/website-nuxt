<template>
  <div class="section flex flex-wrap justify-center lg:mb-12">
    <div class="section-content">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/5 text-center lg:text-left">
          <h3 class="heading text-6xl">
            Technologies we use
          </h3>
        </div>

        <div class="flex flex-wrap w-full lg:pl-32 lg:w-4/5 text-grey">
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://emberjs.com/"
              aria-label="Ember.js"
            >
              <Ember :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://ember-cli.com/"
              aria-label="Ember CLI"
            >
              <EmberCLI :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://guides.emberjs.com/release/models/"
              aria-label="Ember Data"
            >
              <EmberData :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://nuxtjs.org/"
              aria-label="Nuxt.js"
            >
              <Nuxt :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://sass-lang.com/"
              aria-label="Sass"
            >
              <Sass :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
          <div class="w-1/2 sm:w-1/3 flex justify-center items-center">
            <a
              href="https://travis-ci.org/"
              aria-label="Travis CI"
            >
              <Travis :class="'w-full h-full p-8 max-w-xxs'"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Ember from '~/assets/svgs/technologies/ember.svg?inline';
  import EmberCLI from '~/assets/svgs/technologies/embercli.svg?inline';
  import EmberData from '~/assets/svgs/technologies/emberdata.svg?inline';
  import Nuxt from '~/assets/svgs/technologies/nuxt.svg?inline';
  import Sass from '~/assets/svgs/technologies/sass.svg?inline';
  import Travis from '~/assets/svgs/technologies/travis.svg?inline';

  export default {
    components: {
      Ember,
      EmberCLI,
      EmberData,
      Nuxt,
      Sass,
      Travis
    }
  };
</script>
