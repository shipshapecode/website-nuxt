<template>
  <div>
    <HeroBlock class="home">
      <template v-slot:content>
        <h1 class="heading">
          Code that won't sink
        </h1>
        <p>
          Ship Shape is a software consultancy specializing in all things Ember.
          We leverage Ember.js, and all the latest Ember addons and
          technologies, to create truly ambitious, state of the art applications
          that are future-proof and easily maintainable.
        </p>
        <div>
          <nuxt-link to="/work/" class="btn-navy">
            Check out our work
          </nuxt-link>
        </div>
      </template>
      <template v-slot:icon>
        <LandingIcon class="max-w-2xl" />
      </template>
    </HeroBlock>

    <ProcessSection />

    <TechnologiesSection />

    <WorkedWith />

    <RecentBlogPosts :posts="posts" />
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import LandingIcon from '~/assets/svgs/hero-images/landing.svg?inline';
import ProcessSection from '~/components/ProcessSection.vue';
import RecentBlogPosts from '~/components/RecentBlogPosts.vue';
import TechnologiesSection from '~/components/TechnologiesSection.vue';
import WorkedWith from '~/components/WorkedWith.vue';
import { getBlogData } from '~/utils/blog';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
    LandingIcon,
    ProcessSection,
    RecentBlogPosts,
    TechnologiesSection,
    WorkedWith
  },
  async asyncData() {
    const { posts } = await getBlogData();
    return { posts: posts.slice(0, 3) };
  },
  head() {
    const title = 'App Development & Consulting Agency';
    const description =
      'Ship Shape is a consulting agency, specializing in app development, ' +
      'Ember.js and Nuxt. Hire us to deliver high-quality web apps that ' +
      'work across all devices.';
    const url = 'https://shipshape.io/';

    return generateMeta(title, description, url);
  }
};
</script>
