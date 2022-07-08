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

        <AuthorRow v-bind="post.author" :date="post.date" />

        <NuxtContent class="post-content" :document="post" />

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
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
