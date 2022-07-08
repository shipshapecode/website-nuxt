<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.slug"
      class="blog-post border-b-2 border-blue-light border-solid py-3"
    >
      <NuxtLink class="title" :to="`/blog/${post.slug}/`">
        {{ post.linktitle || post.title }}
      </NuxtLink>

      <div class="attribution">
        By {{ post.author.name }} {{ formatDate(post.date) }}
      </div>

      <div class="tags pb-4 pt-4">
        <NuxtLink
          v-for="tag in post.categories"
          :key="tag"
          :to="`/blog/categories/${tag.replace(/ |\./g, '-')}/`"
          class="blog-tag mr-2"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/utils/date';

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate
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
