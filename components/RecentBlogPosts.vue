<template>
  <div class="section bg-navy flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center w-full">
          <h3 class="text-center text-white lg:text-left">
            Ship Shape Insights
          </h3>

          <p class="text-center w-full">
            Let’s get down to the nitty gritty about the latest trends in
            Ember.js, Nuxt.js, JavaScript and more.
          </p>
        </div>

        <div
          class="
            grid grid-cols-1
            gap-2
            justify-center
            mb-4
            w-full
            lg:grid-cols-3
          "
        >
          <div
            v-for="post in posts"
            :key="post.slug"
            class="bg-navy-card-dark flex flex-col m-4 p-8 rounded-md"
          >
            <div class="text-red">
              {{ $dateFns.format(post.date) }}
            </div>

            <nuxt-link
              class="
                blog-link
                block
                font-bold
                flex-grow
                leading-8
                min-h-24
                my-2
                text-white text-2xl
                hover:text-red
              "
              :to="`/blog/${post.slug}/`"
            >
              {{ post.linktitle || post.title }}
            </nuxt-link>

            <div class="attribution bottom-0 mb-4 text-red">
              By {{ post.author.name }}
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

<style lang="scss">
.blog-link {
  color: $white;

  &:active,
  &:visited {
    color: $white;
  }

  &:hover {
    color: $red;
  }
}
</style>
