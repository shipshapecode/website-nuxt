<template>
  <div class="section bg-navy flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center w-full">
          <h3 class="text-white">Ship Shape Insights</h3>

          <p class="text-center w-full">
            Let’s get down to the nitty gritty about the latest trends in
            Ember.js, JavaScript and more.
          </p>
        </div>

        <div class="flex flex-wrap justify-center mb-4 w-full">
          <div
            v-for="post in posts"
            :key="post.slug"
            class="bg-navy-card-dark flex-grow m-4 p-12 rounded lg:flex-1"
          >
            <nuxt-link
              class="font-bold text-white text-xl"
              :to="`/blog/${post.slug}/`"
            >
              {{ post.linktitle || post.title }}
            </nuxt-link>

            <div class="attribution">
              By {{ post.author.name }} {{ $dateFns.format(post.date) }}
            </div>
          </div>
        </div>

        <div class="text-center w-full">
          <nuxt-link to="/blog/" class="btn btn-white mb-12">
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
