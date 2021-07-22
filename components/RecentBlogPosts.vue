<template>
  <div class="section bg-white flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap items-center justify-between mb-8 w-full">
          <h3 class="m-0 text-navy">Ahoy - advice and insights ahead!</h3>
          <nuxt-link to="/blog/" class="btn btn-red">
            See more insights
          </nuxt-link>
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
            class="bg-grey-transparent flex flex-col px-8 py-16 rounded-md"
          >
            <div class="flex">
              <inline-svg class="h-auto mr-4 w-10" src="/svgs/fish.svg" />
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

            <div class="attribution bottom-0 mb-4">
              By {{ post.author.name }}
            </div>
          </div>
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
