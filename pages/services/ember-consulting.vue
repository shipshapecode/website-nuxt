<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="ember-consulting">
      <template #content>
        <h1 itemprop="name">Ember Consulting</h1>
        <p>
          Ship Shape's ambitious team of experts provide the guidance and
          manpower that helps you build fast and responsive web applications
          using Ember.js.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/contact/">
            Start consultation
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/ember-consulting.png?webp')"
        />
      </template>
    </HeroBlock>

    <WorkedWith />

    <div
      class="section quote bg-grey-transparent flex flex-wrap justify-center"
    >
      <div class="section-content">
        <div class="font-bold text-5xl">“</div>

        <div itemprop="review" itemscope itemtype="http://schema.org/Review">
          <h2
            class="font-light text-navy text-2xl lg:text-4xl"
            itemprop="reviewBody"
          >
            Ship Shape knows what they're doing. A thoughtful approach, pristine
            code and a 200% effort in everything they do, makes recommending
            them a no-brainer.
          </h2>

          <p
            class="font-bold"
            itemprop="author"
            itemscope
            itemtype="http://schema.org/Person"
          >
            <span itemprop="name">James Dixon</span>,
            <span itemprop="jobTitle"> Founder </span>
            of
            <a href="https://www.scoutforpets.com/"> Scout </a>
          </p>
        </div>
      </div>
    </div>

    <WhyEmber />

    <CommunityInvolvement />

    <RecentBlogPosts :posts="posts" />
  </div>
</template>

<script>
import CommunityInvolvement from '~/components/CommunityInvolvement.vue';
import HeroBlock from '~/components/HeroBlock.vue';
import WhyEmber from '~/components/WhyEmber';
import WorkedWith from '~/components/WorkedWith.vue';
import RecentBlogPosts from '~/components/RecentBlogPosts.vue';
import { generateMeta } from '~/utils/meta';
import { getBlogData } from '~/utils/blog';

export default {
  components: {
    CommunityInvolvement,
    HeroBlock,
    RecentBlogPosts,
    WhyEmber,
    WorkedWith
  },

  async asyncData() {
    const { posts } = await getBlogData();
    return { posts: posts.slice(0, 3) };
  },

  head() {
    const title = 'Ember.js Consulting';
    const description =
      'From startups to Fortune 100 companies, our Ember.js ' +
      'consultants transform ideas into industry-leading software. ' +
      'Learn more about our app development services.';
    const url = 'https://shipshape.io/services/ember-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
