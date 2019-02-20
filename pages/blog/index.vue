<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1>
          Blog
        </h1>

        <a
          class="p-12"
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
          target="_blank"
          rel="noopener"
        >
          <RSS/>
        </a>
      </div>

      <p>
        Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.
      </p>

      <BlogPostMenu :posts="posts"/>
    </div>
  </div>
</template>

<script>
  import BlogPostMenu from '~/components/BlogPostMenu.vue';
  import RSS from '~/assets/svgs/rss.svg?inline';
  import { getBlogData } from '~/utils/blog';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      BlogPostMenu,
      RSS
    },

    asyncData() {
      return getBlogData();
    },

    head() {
      const title = 'Blog';
      const description = 'Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.';
      const url = 'https://shipshape.io/blog';

      return generateMeta(title, description, url);
    }
  };
</script>
