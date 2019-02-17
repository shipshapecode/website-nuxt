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
    },

    head() {
      const description = 'See a few examples of our work in Ember Consulting, and how we solve tough problems for our clients.';

      return {
        title: 'Case Studies - Ship Shape',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
          }
        ],
        'link': [
          {
            rel: 'canonical',
            href: 'https://shipshape.io/work'
          }
        ]
      };
    }
  };
</script>
