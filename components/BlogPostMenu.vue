<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.slug"
      class="blog-post border-b-2 border-blue-light border-solid py-3"
    >
      <nuxt-link class="title" :to="`/blog/${post.slug}/`">
        {{ post.linktitle || post.title }}
      </nuxt-link>

      <div class="attribution">
        By {{ post.author.name }} {{ $dateFns.format(post.date) }}
      </div>

      <div class="tags pb-4 pt-4">
        <nuxt-link
          v-for="tag in post.categories"
          :key="tag"
          :to="`/blog/categories/${tag.replace(/ |\./g, '-')}/`"
          class="blog-tag mr-2"
        >
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.blog-post {
  .blog-tag {
    a {
      transition-duration: 0.25s;
      transition-property: background-color, color, fill;
    }
  }

  .title {
    @apply text-navy;
    font-size: 2rem;
  }
}
</style>
