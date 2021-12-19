<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="ember-consulting">
      <template #content>
        <h1 itemprop="name">Ember Consulting</h1>
        <p>
          Ship Shape's ambitious team of experts provide the guidance and
          manpower that helps you build fast and responsive web applications
          using Ember.js.
        </p>
        <div>
          <nuxt-link class="btn btn-red" to="/contact/">
            Start consultation
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          src="/img/hero-images/ember-consulting.png"
        />
      </template>
    </HeroBlock>

    <div class="section quote bg-blue-light flex flex-wrap justify-center">
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
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    CommunityInvolvement: () => import('@/components/CommunityInvolvement'),
    HeroBlock: () => import('@/components/HeroBlock'),
    RecentBlogPosts: () => import('@/components/RecentBlogPosts'),
    WhyEmber: () => import('@/components/WhyEmber')
  },

  async asyncData({ $content }) {
    const posts = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch();

    return { posts };
  },

  head() {
    const title = 'Ember.js Enterprise App Development';
    const description =
      "Learn how Ship Shape's top-tier enterprise app development experts can help your team build fast, reliable Ember.js applications.";
    const url = 'https://shipshape.io/services/ember-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
