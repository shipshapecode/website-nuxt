<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h1 class="heading">
        Case Studies
      </h1>

      <CaseStudiesList/>

      <ClientsGrid/>
    </div>
  </div>
</template>

<script>
  import CaseStudiesList from '~/components/CaseStudiesList.vue';
  import ClientsGrid from '~/components/ClientsGrid.vue';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      CaseStudiesList,
      ClientsGrid
    },

    head() {
      const title = 'Case Studies - Ship Shape';
      const description = 'See a few examples of our work in Ember Consulting, and how we solve tough problems for our clients.';
      const url = 'https://shipshape.io/work';

      return generateMeta(title, description, url);
    }
  };
</script>
