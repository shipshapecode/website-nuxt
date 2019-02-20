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
  import { generateMeta } from '~/utils/meta';
  import slugs from '~/posts.json';

  export default {
    components: {
      BlogPostMenu
    },

    asyncData() {
      const authors = {};

      async function asyncImport(slug) {
        const post = await import(`~/blog/posts/${slug}.md`);
        await getAuthors(post.attributes);
        return post.attributes;
      }

      async function getAuthors(post) {
        // If we don't already have a reference to the author, add it to the authors
        if (!authors[post.authorId]) {
          const author = await import(`~/blog/authors/${post.authorId}.md`);

          authors[post.authorId] = author.attributes;
        }

        post.author = authors[post.authorId];
      }

      return Promise.all(slugs.map(slug => asyncImport(slug))).then((posts) => {
        const sortedPosts = posts.sort((post1, post2) => {
          if (post1.date > post2.date) {
            return -1;
          }

          if (post1.date < post2.date) {
            return 1;
          }

          return 0;
        });

        return { posts: sortedPosts };
      });
    },

    head() {
      const title = 'Blog';
      const description = 'Ramblings about Ember.js, JavaScript, life, liberty, and the pursuit of happiness.';
      const url = 'https://shipshape.io/blog';

      return generateMeta(title, description, url);
    }
  };
</script>
