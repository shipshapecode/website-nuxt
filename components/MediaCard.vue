<template>
  <section>
    <h3 class="py-12 capitalize">Latest {{ mediaType }}</h3>
    <article
      class="items-center grid grid-cols-1 pb-12 lg:gap-12 lg:grid-cols-9"
    >
      <div class="lg:col-span-5">
        <h4 class="text-xl lg:mb-4">
          {{ details.title }}
        </h4>
        <p>
          {{ formatDateWithDots(details.date || details.pubDate) }}
        </p>
        <p>
          {{ details.description }}
        </p>
      </div>
      <nuxt-img
        class="order-first h-auto m-auto max-w-md w-full pb-10 lg:col-span-2"
        format="webp"
        :src="imgSrc"
        :height="imgHeight"
        :width="imgWidth"
        alt=""
      />
      <nuxt-link
        v-if="mediaType === 'blog post'"
        class="
          learn-more
          lg:col-span-2 lg:justify-self-end lg:self-end lg:pb-16
        "
        :to="`/blog/${details.slug}/`"
      >
        Dive Deeper
        <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
      </nuxt-link>
      <a
        v-if="mediaType === 'podcast'"
        class="
          learn-more
          lg:col-span-2 lg:justify-self-end lg:self-end lg:pb-16
        "
        href="https://www.whiskeywebandwhatnot.fm/"
      >
        Dive Deeper
        <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
      </a>
    </article>
  </section>
</template>

<script>
import { formatDateWithDots } from '~/utils/date';

export default {
  props: {
    mediaType: {
      type: String,
      default: 'blog post'
    },
    imgSrc: {
      type: String,
      default: '/img/about/desk.jpg'
    },
    imgHeight: {
      type: String,
      default: '500'
    },
    imgWidth: {
      type: String,
      default: '500'
    },
    details: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDateWithDots
  }
};
</script>
