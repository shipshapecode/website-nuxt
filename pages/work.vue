<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h1 class="heading">
        Case Studies
      </h1>

      <ClientsGrid/>
    </div>
  </div>
</template>

<script>
  import ClientsGrid from '~/components/ClientsGrid.vue';

  export default {
    components: {
      ClientsGrid
    }
  };
</script>
