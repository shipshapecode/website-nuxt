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
import { generateMeta } from '~/utils/meta';

export default {
  scrollToTop: true,

  speedkitComponents: {
    BlogPostMenu: () => import('@/components/BlogPostMenu')
  },

  async asyncData({ $content, params }) {
    const authorId = params.author;

    const [author] = await $content('blog/authors')
      .where({ id: authorId })
      .fetch();

    const posts = await $content('blog/posts')
      .sortBy('date', 'desc')
      .where({ authorId })
      .fetch();

    const numPosts = posts ? posts.length : 0;

    return {
      author,
      title: `Posts by ${author.name} - Blog`,
      description: `See the ${numPosts} blog posts ${author.name} has written for Ship Shape.`,
      url: `https://shipshape.io/blog/authors/${encodeURIComponent(authorId)}/`,
      posts
    };
  },

  head() {
    return generateMeta(this.title, this.description, this.url);
  }
};
</script>
