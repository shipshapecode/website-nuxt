<template>
  <div>
    <h1>Blog posts</h1>
    <ul>
      <BlogPostMenu :posts="posts"/>
    </ul>
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
