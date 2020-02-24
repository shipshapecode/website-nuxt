<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h2>
        Why use Shepherd?
      </h2>

      <Tabs>
        <div class="max-w-3xl">
          <Tab name="Accessibility" :selected="true">
            <p>
              Shepherd has full keyboard navigation support, focus trapping, and
              a11y compliance via aria attributes. This ensures that everyone,
              regardless of abilities, is able to have a great user experience
              when they interact with your product.
            </p>
          </Tab>

          <Tab name="Highly Customizable">
            <p>
              Shepherd's styles are kept minimal, allowing you to easily
              customize the look and feel, but still give you enough to drop in
              and be ready to go quickly. This allows you to have a highly
              stylized, custom site tour experience to match your brand.
            </p>
          </Tab>

          <Tab name="Framework Ready">
            <p>
              Shepherd is ready to drop into your application using React,
              Ember, Angular, Vue.js, ES Modules, or plain Javascript!
              Integration with any app is a breeze with Shepherd, and your
              developers will appreciate the breadth of options for quickly
              spinning it up.
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
