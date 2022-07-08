<template>
  <div
    class="waves blue-waves section bg-blue-light flex flex-wrap justify-center"
  >
    <div class="section-content lg:mb-8 lg:mt-16">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap items-center justify-between mb-16 w-full">
          <h3 class="m-0 text-navy">Ahoy - advice and insights ahead!</h3>
          <NuxtLink
            to="/blog/"
            class="btn btn-red mt-4 w-full lg:mt-0 lg:w-auto"
          >
            See more insights
          </NuxtLink>
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
            class="bg-white flex flex-col px-8 py-16 rounded"
          >
            <div class="flex mb-4">
              <inline-svg class="h-auto mr-4 w-10" src="/svgs/fish.svg" />
              {{ formatDate(post.date) }}
            </div>

            <NuxtLink
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
            </NuxtLink>

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
.blog-link {
  @apply text-navy;

  &:active,
  &:visited {
    @apply text-navy;
  }

  &:hover {
    @apply text-red;
  }
}
</style>
