<template>
  <BlogPost :post="post"/>
</template>

<script>
  import h2p from 'html2plaintext';
  import truncate from 'lodash.truncate';
  import BlogPost from '~/components/BlogPost.vue';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      BlogPost
    },

    async asyncData({ params }) {
      const { attributes, html } = await import(`~/blog/posts/${params.slug}.md`);
      const { authorId, categories, date, nextSlug, nextTitle, previousSlug, previousTitle, slug, title } = attributes;
      const author = await import(`~/blog/authors/${authorId}.md`);

      return {
        post: {
          author,
          date,
          categories,
          html,
          nextSlug,
          nextTitle,
          previousSlug,
          previousTitle,
          slug,
          title
        }
      };
    },

    head() {
      const description = truncate(h2p(this.post.html), {
        length: 260,
        separator: /,?\.* +/
      });
      const { author, date, slug, title } = this.post;
      const url = `https://shipshape.io/blog/${slug}`;

      const headData = generateMeta(title, description, url);
      headData.meta.push(
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:published_time', property: 'article:published_time', content: date }
      );

      this.post.categories.forEach((tag) => {
        headData.meta.push(
          { property: 'article:tag', content: tag }
        );
      });

      if (this.post.author) {
        headData.meta.push(
          { name: 'twitter:label1', content: 'Written by' },
          { name: 'twitter:data1', content: author.attributes.name }
        );
      }

      return headData;
    }
  };
</script>

<style lang="scss">
  @import "assets/css/variables";
  @import "assets/css/shevy/shevy";

  .post-content {
    $shevy-blog-post: (
      base-font-scale: (2.5, 2, 1.75, 1.5, 1.25, 1)
    );

    @include headings($shevy-blog-post);
    @include content($shevy-blog-post);

    code {
      &[class*="language-"] {
        font-size: 14px;
      }

      &:not([class*="language-"]) {
        background-color: $grey-transparent;
        border: none;
        border-radius: 2px;
        font-size: 0.8rem;
        line-height: 1rem;
        padding: 0.1rem 0.2rem;
        vertical-align: middle;
        white-space: pre-wrap;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    li {
      display: list-item;
    }

    ol {
      list-style-type: decimal;
      padding-left: 40px;
    }

    ul {
      list-style-type: disc;
      margin-left: 4rem;
    }
  }

  a {
    color: $red;

    &:visited {
      color: $red;
    }

    &:hover {
      color: $navy;
    }
  }
</style>
