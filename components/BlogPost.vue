<template>
  <article itemscope itemtype="http://schema.org/BlogPosting">
    <link itemprop="mainEntityOfPage" :href="$nuxt.$route.path" />
    <link itemprop="publisher" href="shipshapeorg" />
    <link itemprop="image" href="shipshapelogo" />

    <div class="section flex flex-wrap justify-center">
      <div class="max-w-3xl w-full">
        <h1 class="blog-post-title font-semibold" itemprop="headline">
          {{ post.title }}
        </h1>

        <AuthorRow v-bind="post.author.attributes" :date="post.date" />

        <div class="flex mb-8 mt-2 w-full">
          <div id="codefund">
            <!-- fallback content -->
          </div>
          <script
            src="https://app.codefund.io/properties/31/funder.js"
            async="async"
          ></script>
        </div>

        <div class="post-content" v-html="post.html" />

        <BottomLinks
          :next-link="`/blog/${post.nextSlug}/`"
          :next-link-text="post.nextTitle"
          :previous-link="`/blog/${post.previousSlug}/`"
          :previous-link-text="post.previousTitle"
        />
      </div>
    </div>
  </article>
</template>

<script>
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
  }
};
</script>
