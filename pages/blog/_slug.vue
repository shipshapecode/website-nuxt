<template>
  <BlogPost :post="post" />
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  scrollToTop: true,

  async asyncData({ $content, params }) {
    const posts = await $content('blog/posts')
      .where({ slug: params.slug })
      .fetch();
    const post = posts[0];

    if (post) {
      let [nextPost, previousPost] = await $content('blog/posts')
        .only(['title', 'slug'])
        .sortBy('date')
        .surround(post.path)
        .fetch();

      if (!previousPost) {
        const previousPostArr = await $content('blog/posts')
          .only(['title', 'slug'])
          .sortBy('date')
          .limit(1)
          .fetch();

        if (previousPostArr?.length) {
          previousPost = previousPostArr[0];
        }
      }

      if (!nextPost) {
        const nextPostArr = await $content('blog/posts')
          .only(['title', 'slug'])
          .sortBy('date', 'desc')
          .limit(1)
          .fetch();

        if (nextPostArr?.length) {
          nextPost = nextPostArr[0];
        }
      }

      return {
        post: {
          ...post,
          nextSlug: nextPost.slug,
          nextTitle: nextPost.title,
          previousSlug: previousPost.slug,
          previousTitle: previousPost.title
        }
      };
    }
  },

  head() {
    const { author, date, description, slug, title } = this.post;
    const url = `https://shipshape.io/blog/${slug}/`;

    const headData = generateMeta(title, description, url);
    headData.meta.push(
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'article:published_time',
        property: 'article:published_time',
        content: date
      }
    );

    this.post.categories.forEach((tag) => {
      headData.meta.push({ property: 'article:tag', content: tag });
    });

    if (this.post.author) {
      headData.meta.push(
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: author.name }
      );
    }

    if (this.post.categories && this.post.categories.length) {
      const keywords = this.post.categories.join(', ');
      headData.meta.push(
        { name: 'twitter:label2', content: 'Filed under' },
        { name: 'twitter:data2', content: keywords }
      );
    }

    return headData;
  }
};
</script>

<style lang="scss">
@import 'assets/css/shevy/shevy';

.post-content {
  $shevy-blog-post: (
    base-font-scale: (
      2.5,
      2,
      1.75,
      1.5,
      1.25,
      1
    )
  );

  @include headings($shevy-blog-post);
  @include content($shevy-blog-post);

  b,
  strong {
    font-weight: bold;
  }

  code {
    &[class*='hljs'] {
      font-size: 14px;
    }

    &:not([class*='hljs']) {
      background-color: var(--blue-light);
      border: none;
      border-radius: 2px;
      font-size: 0.8rem;
      line-height: 1rem;
      padding: 0.1rem 0.2rem;
      vertical-align: middle;
      white-space: pre-wrap;
    }
  }

  pre {
    code {
      &[class*='hljs'],
      &:not([class*='hljs']) {
        padding: 1rem;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;

    code:not([class*='hljs']) {
      font-size: inherit;
    }
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
  @apply text-red;

  &:visited {
    @apply text-red;
  }

  &:hover {
    @apply text-navy;
  }
}
</style>
