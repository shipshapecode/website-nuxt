<template>
  <section>
    <h3 class="capitalize m-0 pb-12 pt-24">Latest {{ mediaType }}</h3>
    <article class="flex flex-col pb-12 relative lg:flex-row lg:items-center">
      <nuxt-img
        class="h-auto max-w-sm mb-7 rounded-md w-full lg:mb-0 lg:mr-7 lg:w-64"
        format="webp"
        :src="imgSrc"
        :height="imgHeight"
        :width="imgWidth"
        alt=""
      />

      <div class="flex-grow">
        <h4 class="max-w-3xl text-2xl lg:mb-4">
          {{ details.title }}
        </h4>

        <p>
          {{ formatDateWithDots(details.date || details.pubDate) }}
        </p>

        <p class="max-w-4xl mb-0">
          {{ details.description }}
        </p>
      </div>

      <a
        class="
          learn-more
          mt-12
          right-0
          self-start
          lg:absolute lg:ml-24 lg:self-end
        "
        :href="
          mediaType === 'podcast'
            ? 'https://www.whiskeywebandwhatnot.fm/'
            : `/blog/${details.slug}/`
        "
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
