<template>
  <div>
    <HeroBlock class="home">
      <template v-slot:content>
        <h1 class="heading">Code that won't sink</h1>
        <p>
          Ship Shape is a software consultancy specializing in all things Ember.
          We leverage Ember.js, and all the latest Ember addons and technologies,
          to create truly ambitious, state of the art applications that are future-proof and easily maintainable.
        </p>
        <div>
          <nuxt-link to="/work/" class="btn-navy">
            See what we've helped create
          </nuxt-link>
        </div>
      </template>
      <template v-slot:icon>
        <LandingIcon :class="'max-w-md'"/>
      </template>
    </HeroBlock>

    <ProcessSection/>

    <TechnologiesSection/>

    <WorkedWith/>
  </div>
</template>

<script>
  import HeroBlock from '~/components/HeroBlock.vue';
  import LandingIcon from '~/assets/svgs/hero-images/landing.svg?inline';
  import ProcessSection from '~/components/ProcessSection.vue';
  import TechnologiesSection from '~/components/TechnologiesSection.vue';
  import WorkedWith from '~/components/WorkedWith.vue';

  export default {
    components: {
      HeroBlock,
      LandingIcon,
      ProcessSection,
      TechnologiesSection,
      WorkedWith
    },
    head() {
      const description = 'Ship Shape is a software consultancy specializing in all things Ember. ' +
        'We leverage Ember.js, and all the latest Ember addons and technologies, to create truly ambitious, ' +
        'state of the art applications that are future-proof and easily maintainable.';

      return {
        title: 'Ship Shape - Ember.js Code That Won\'t Sink',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          {
            hid: 'og:description',
            name: 'og:description',
            property: 'og:description',
            content: description
          }
        ],
        'link': [
          {
            rel: 'canonical',
            href: 'https://shipshape.io/'
          }
        ]
      };
    }
  };
</script>
