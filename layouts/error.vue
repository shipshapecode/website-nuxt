<template>
  <div v-if="error.statusCode === 404" class="section flex flex-wrap justify-center">
    <div class="section-content text-center">
      <LostAtSea :class="'h-auto max-w-2xl w-full'"/>
    </div>
  </div>
</template>

<script>
  import LostAtSea from '~/assets/svgs/404.svg?inline';

  export default {
    components: {
      LostAtSea
    },
    props: ['error']
  };
</script>
