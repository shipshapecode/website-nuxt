<template>
  <div
    v-if="error.statusCode === 404"
    class="section flex flex-wrap justify-center"
  >
    <div class="section-content text-center">
      <inline-svg class="inline h-auto w-full max-w-2xl" src="/svgs/404.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: undefined
    }
  }
};
</script>
