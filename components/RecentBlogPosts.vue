<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center w-full">
          <h3 class="heading">
            Ship Shape Blog
          </h3>
        </div>

        <div class="flex flex-wrap justify-center mb-4 w-full">
          <div
            v-for="post in posts"
            :key="post.slug"
            class="bg-grey-transparent flex-grow m-2 p-12 lg:flex-1"
          >
            <nuxt-link class="text-xl" :to="`/blog/${post.slug}/`">
              {{ post.linktitle || post.title }}
            </nuxt-link>
          </div>
        </div>

        <div class="text-center w-full">
          <nuxt-link to="/blog/" class="btn-navy mb-12">
            View all posts
          </nuxt-link>
        </div>
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
