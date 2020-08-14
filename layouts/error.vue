<template>
  <div
    v-if="error.statusCode === 404"
    class="section flex flex-wrap justify-center"
  >
    <div class="section-content text-center">
      <inline-svg class="h-auto inline max-w-2xl w-full" src="/svgs/404.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>
