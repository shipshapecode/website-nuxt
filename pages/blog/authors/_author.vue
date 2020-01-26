<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1 class="font-semibold">
          {{ author.name }}
        </h1>
      </div>

      <BlogPostMenu :posts="posts" />
    </div>
  </div>
</template>

<script>
import BlogPostMenu from '~/components/BlogPostMenu.vue';
import { getBlogData } from '~/utils/blog';
import { generateMeta } from '~/utils/meta';

export default {
  scrollToTop: true,

  components: {
    BlogPostMenu
  },

  async asyncData({ params }) {
    let author;
    const authorId = params.author;
    const { posts } = await getBlogData();
    const filteredPosts = posts.filter((post) => {
      if (post.author.id === authorId) {
        author = post.author;
        return true;
      }

      return false;
    });
    const numPosts = filteredPosts ? filteredPosts.length : 0;

    return {
      author,
      title: `Posts by ${author.name} - Blog`,
      description: `See the ${numPosts} blog posts ${author.name} has written for Ship Shape.`,
      url: `https://shipshape.io/blog/authors/${encodeURIComponent(authorId)}/`,
      posts: filteredPosts
    };
  },

  head() {
    return generateMeta(this.title, this.description, this.url);
  }
};
</script>
