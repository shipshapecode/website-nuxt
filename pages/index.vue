<template>
  <div class="relative">
    <HeroBlock class="bg-white home">
      <template #content>
        <h1>Our software consultants make waves</h1>

        <div>
          <nuxt-link to="/contact/" class="btn btn-red">
            Come on board
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/landing.png?webp')"
        />
      </template>

      <template #waves>
        <inline-svg
          class="
            absolute
            bottom-0
            h-auto
            transform
            translate-y-1/2
            w-full
            z-0
            xl:translate-y-2/3
          "
          src="/svgs/waves.svg"
        />
      </template>
    </HeroBlock>

    <div
      class="bg-gradient-to-b from-ocean-gradient-start to-navy relative z-10"
    >
      <BuildTheFuture />

      <WeKnowTheRopes />

      <BigNames />

      <ProcessSection />

      <TechnologiesSection />

      <RecentBlogPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  async asyncData({ $content }) {
    const posts = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch();

    return { posts };
  },
  head() {
    const title = 'Top-Tier, Full-Stack Software Consultants';
    const description =
      "Ship Shape's app development company offers a top-tier team of on-shore, full-stack software consultants who can't wait to build or improve your product.";
    const url = 'https://shipshape.io/';

    return generateMeta(title, description, url);
  }
};
</script>
