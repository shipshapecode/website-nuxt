<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1 class="font-semibold">
          Ship Shape Insights
        </h1>

        <a
          class="-mt-3 p-12"
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
          target="_blank"
          rel="noopener"
        >
          <RSS />
        </a>
      </div>

      <p>
        Our thoughtful ramblings about Ember.js, JavaScript, life, liberty and
        the pursuit of happiness.
      </p>

      <BlogPostMenu :posts="posts" />
    </div>
  </div>
</template>

<script>
import BlogPostMenu from '~/components/BlogPostMenu.vue';
import RSS from '~/assets/svgs/rss.svg?inline';
import { getBlogData } from '~/utils/blog';
import { generateMeta } from '~/utils/meta';

export default {
  scrollToTop: true,

  components: {
    BlogPostMenu,
    RSS
  },

  asyncData() {
    return getBlogData();
  },

  head() {
    const title = 'Blog';
    const description =
      'Read our blog to stay ahead of trends in Ember.js, JavaScript, and everything in between.';
    const url = 'https://shipshape.io/blog/';

    return generateMeta(title, description, url);
  }
};
</script>
