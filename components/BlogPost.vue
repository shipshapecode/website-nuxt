<template>
  <div itemscope itemtype="http://schema.org/BlogPosting">
    <link itemprop="publisher" href="shipshapeorg">
    <link itemprop="image" href="shipshapelogo">

    <div class="section flex flex-wrap justify-center">
      <div class="max-w-lg w-full">
        <h1 class="blog-post-title" itemprop="headline">
          {{ post.title }}
        </h1>

        <AuthorRow
          v-bind="post.author.attributes"
          :date="post.date"
        />

        <div
          class="post-content"
          v-html="post.html"
        />

        <BottomLinks
          :next-link="`/blog/${post.nextSlug}`"
          :next-link-text="post.nextTitle"
          :previous-link="`/blog/${post.previousSlug}`"
          :previous-link-text="post.previousTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs';
  import AuthorRow from '~/components/AuthorRow.vue';
  import BottomLinks from '~/components/BottomLinks.vue';

  export default {
    components: {
      AuthorRow,
      BottomLinks
    },

    props: {
      post: {
        type: Object,
        default: () => {}
      }
    },

    mounted() {
      Prism.highlightAll();
    },

    updated() {
      Prism.highlightAll();
    }
  };
</script>
