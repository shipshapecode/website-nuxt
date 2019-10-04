<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h2 class="heading">
        Why use Shepherd?
      </h2>

      <Tabs>
        <div class="max-w-3xl">
          <Tab name="Accessibility" :selected="true">
            <p>
              TBD
            </p>
          </Tab>

          <Tab name="Highly Customizable">
            <p>
              TBD
            </p>
          </Tab>

          <Tab name="Framework Ready">
            <p>
              TBD
            </p>
          </Tab>
        </div>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import Tab from '~/components/Tab.vue';
  import Tabs from '~/components/Tabs.vue';

  export default {
    components: {
      Tab,
      Tabs
    }
  };
</script>
