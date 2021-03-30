<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1 class="font-semibold">
          {{ category }}
        </h1>
      </div>

      <BlogPostMenu :posts="posts" />
    </div>
  </div>
</template>

<script>
import BlogPostMenu from '~/components/BlogPostMenu.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BlogPostMenu
  },
  scrollToTop: true,

  async asyncData({ $content, params }) {
    const { category } = params;

    const posts = await $content('blog/posts').sortBy('date', 'desc').fetch();

    const filteredPosts = posts.filter((post) => {
      const dasherizedCategories = post.categories.map((category) => {
        return category.replace(/ |\./g, '-');
      });

      return dasherizedCategories.includes(category);
    });
    const numPosts = filteredPosts ? filteredPosts.length : 0;

    return {
      category,
      title: `${category} - Blog Category`,
      description: `See the ${numPosts} blog posts Ship Shape has written about ${category}.`,
      url: `https://shipshape.io/blog/categories/${category.replace(
        / |\./g,
        '-'
      )}/`,
      posts: filteredPosts
    };
  },

  head() {
    return generateMeta(this.title, this.description, this.url);
  }
};
</script>
