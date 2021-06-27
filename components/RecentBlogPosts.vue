<template>
  <div class="section bg-white flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center w-full">
          <h3 class="text-center text-navy lg:text-left">
            Ahoy - advice and insights ahead!
          </h3>

          <p class="text-center w-full">
            Let’s get down to the nitty gritty about the latest trends in
            Ember.js, Nuxt.js, JavaScript and more.
          </p>
        </div>

        <div
          class="
            grid grid-cols-1
            gap-1
            justify-center
            mb-4
            w-full
            lg:grid-cols-3
          "
        >
          <div
            v-for="(post, index) in posts"
            :key="post.slug"
            data-aos="flip-down"
            :data-aos-delay="index * 200"
            class="bg-grey-transparent flex flex-col p-8 rounded-md"
          >
            <inline-svg class="h-auto w-10" src="/svgs/fish.svg" />
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
                text-navy text-2xl
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
          <nuxt-link to="/blog/" class="btn btn-red mb-12">
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
  color: $navy;

  &:active,
  &:visited {
    color: $navy;
  }

  &:hover {
    color: $red;
  }
}
</style>
