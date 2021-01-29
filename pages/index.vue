<template>
  <div>
    <HeroBlock class="home">
      <template #content>
        <h1>Welcome Aboard!</h1>

        <p>
          We specialize in custom software and app development by leveraging the
          latest in Ember.js, Nuxt and open source. Our passion lies in building
          full stack web apps, mentoring teams and providing impactful solutions
          for the development community.
        </p>
        <div>
          <nuxt-link to="/work/" class="btn btn-navy">
            Check out our work
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/landing.png?webp')"
        />
      </template>
    </HeroBlock>

    <WorkedWith />

    <div class="section bg-navy flex flex-wrap justify-center" data-aos="fade">
      <div class="section-content grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h2 class="text-white">Select case studies</h2>
          <nuxt-link to="/work/" class="btn btn-white">
            See all work
          </nuxt-link>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="bg-navy-card-dark rounded">
            <div class="bg-navy-card-light p-8 rounded-t">Netflix</div>
            <div class="p-8">
              <p class="leading-8 font-bold text-white text-2xl">
                Building finance tools for the world's number one streaming
                platform.
              </p>
            </div>
          </div>
          <div class="bg-navy-card-dark rounded">
            <div class="bg-navy-card-light p-8 rounded-t">Expel</div>
          </div>
        </div>
      </div>
    </div>

    <ProcessSection />

    <TechnologiesSection />

    <RecentBlogPosts :posts="posts" />
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import ProcessSection from '~/components/ProcessSection.vue';
import RecentBlogPosts from '~/components/RecentBlogPosts.vue';
import TechnologiesSection from '~/components/TechnologiesSection.vue';
import WorkedWith from '~/components/WorkedWith.vue';
import { getBlogData } from '~/utils/blog';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
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
