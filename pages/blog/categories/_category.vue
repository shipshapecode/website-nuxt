<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1>
          {{ category }}
        </h1>
      </div>

      <BlogPostMenu :posts="posts"/>
    </div>
  </div>
</template>

<script>
  import BlogPostMenu from '~/components/BlogPostMenu.vue';
  // import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      BlogPostMenu
    },
    asyncData({ params }) {
      const { category } = params;

      return {
        category
      };
    }
  };
</script>
