<template>
  <div
    class="border-t-2 border-grey-transparent border-solid flex flex-wrap mt-24 w-full"
  >
    <nuxt-link
      class="border-r-2 border-grey-transparent border-solid flex-1 font-bold p-4 lg:p-12 w-1/2 hover:bg-grey-transparent"
      :to="previousLink"
    >
      <span class="text-navy text-sm lg:text-xl"> Previous </span>

      <h3 class="text-xl lg:text-4xl">
        {{ previousLinkText }}
      </h3>
    </nuxt-link>

    <nuxt-link
      class="flex-1 font-bold p-4 lg:p-12 w-1/2 hover:bg-grey-transparent"
      :to="nextLink"
    >
      <span class="text-navy text-sm lg:text-xl">Next Up</span>

      <h3 class="text-xl lg:text-4xl">
        {{ nextLinkText }}
      </h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    nextLink: {
      type: String,
      default: ''
    },
    nextLinkText: {
      type: String,
      default: ''
    },
    previousLink: {
      type: String,
      default: ''
    },
    previousLinkText: {
      type: String,
      default: ''
    }
  }
};
</script>
