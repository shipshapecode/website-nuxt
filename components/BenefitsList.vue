<template>
  <ul
    :class="`
      divide-grey-light
      divide-y
      grid
      grid-cols-1
      my-20
      text-white
      lg:divide-x
      lg:divide-y-0
      lg:grid-cols-${benefits.length}
      `"
  >
    <!-- should cards be separate component? -->
    <li
      v-for="(benefit, index) in benefits"
      :key="index + 1"
      class="flex flex-col items-center px-16"
      data-aos="flip-down"
      :data-aos-delay="200 * index"
    >
      <nuxt-img
        class="h-20 inline-block mb-8 w-auto"
        :class="index > 0 ? 'mt-12  lg:mt-0' : null"
        :src="benefit.imgSrc"
        alt=""
      />

      <p class="mb-12 text-center lg:m-0 lg:w-40">
        {{ benefit.description }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    benefits: {
      type: Array,
      required: true
    }
  }
};
</script>
