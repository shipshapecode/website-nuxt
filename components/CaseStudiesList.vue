<template>
  <div class="flex flex-wrap">
    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="w-full">
        <Netflix :class="'h-10 w-auto'"/>
        <p class="lg:h-12">
          Building finance tools for the world's number one streaming platform
        </p>

        <nuxt-link
          class='btn-navy mb-12'
          to="/work/netflix"
        >
          View Case
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Netflix from '~/assets/svgs/clients/netflix.svg?inline';

  export default {
    components: {
      Netflix
    }
  };
</script>
