<template>
  <div class="relative">
    <HeroBlock class="bg-white home">
      <template #content>
        <h1 class="leading-none">Our software consultants make waves</h1>

        <div class="flex justify-center mt-1 w-full lg:justify-start">
          <nuxt-link to="/contact/" class="btn btn-red w-full lg:w-auto">
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

      <WhyUsGrid />

      <DoubleQuotes :testimonials="testimonials" />

      <RecentBlogPosts :posts="posts" />

      <!-- <NewsletterSignup /> -->
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

const testimonials = [
  {
    name: 'Donald Piret',
    title: 'Director of Engineering at Sephora',
    imgSrc: 'donald',
    svgSrc: '/svgs/clients/sephora-white.svg',
    quote: `Ship Shape delivered beyond our expectations. They pointed out things
          we had never even thought of or knew about. Our team learned a huge
          amount of new information and new tricks, and we still have them on
          retainer for very specific questions. Plus, Ship Shape is the
          friendliest team of engineers I've worked with.`
  },
  {
    name: 'Roger Studner',
    title: 'Chief Architect at Expel',
    imgSrc: 'roger',
    svgSrc: '/svgs/clients/expel-white.svg',
    quote: `Ship Shape was a great aid to us because they were the voice of Ember
          best practices to keep our code base current, and they were able to
          deliver on critical features on our roadmap that we did not have the
          bandwidth to complete on time. I would absolutely recommend Ship Shape
          to any other business that is looking for an incredibly skilled
          partner to work closely with their teams to produce and deliver the
          highest value.`
  }
];

export default {
  async asyncData({ $content }) {
    const posts = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch();

    return { posts, testimonials };
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
