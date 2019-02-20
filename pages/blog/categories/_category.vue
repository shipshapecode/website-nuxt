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
  import { getBlogData } from '~/utils/blog';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      BlogPostMenu
    },

    async asyncData({ params }) {
      const { category } = params;
      const { posts } = await getBlogData();
      const filteredPosts = posts.filter((post) => {
        const dasherizedCategories = post.categories.map((category) => {
          return category.replace(/ /g, '-');
        });

        return dasherizedCategories.includes(category);
      });
      const numPosts = filteredPosts ? filteredPosts.length : 0;

      return {
        category,
        title: `${category} - Blog Category`,
        description: `See our ${numPosts} blog posts we've written about ${category}`,
        url: `https://shipshape.io/blog/categories/${category.replace(/ /g, '-')}/`,
        posts: filteredPosts
      };
    },

    head() {
      return generateMeta(this.title, this.description, this.url);
    }
  };
</script>
