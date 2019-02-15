<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1>Blog</h1>

        <a
          class="p-12"
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
          target="_blank"
          rel="noopener"
        >
          <!-- TODO add RSS svg -->
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

  export default {
    components: {
      BlogPostMenu
    },

    async asyncData({ app }) {
      const posts = await app.$content('/').getAll();
      return { posts };
    }
  };
</script>
