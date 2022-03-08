<template>
  <li
    class="
      bg-blue-light
      flex flex-col flex-1
      place-content-center place-items-center
      space-y-16
      p-16
      rounded-lg
      w-full
    "
  >
    <nuxt-img format="webp" alt="" :width="imgWidth" :src="imgSrc" />
    <slot name="description" />
  </li>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgWidth: {
      type: String,
      default: ''
    }
  }
};
</script>
