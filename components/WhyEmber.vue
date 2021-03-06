<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h2>Why use Ember?</h2>

      <Tabs>
        <div class="max-w-3xl">
          <Tab name="Overview" :selected="true">
            <p>
              Ember is our JavaScript framework of choice for building ambitious
              web apps. Ember is strongly opinionated and strives for convention
              over configuration, and these strong conventions allow developers
              to be productive from day one. Ember also has a strong addon
              ecosystem, and using popular JavaScript libraries is usually just
              a simple install command away.
            </p>
          </Tab>

          <Tab name="Ember.js">
            <p>
              We've built apps at Ship Shape using many different and varied
              frameworks and libraries, from Angular to Backbone, to PHP and
              jQuery, to .NET and Knockout.js, and beyond. Ember.js remains our
              top choice for developing ambitious applications due to its strong
              conventions, ease of updating, and commitment to stability over
              stagnation. These ideals ensure your app will remain bulletproof
              from day one to years from now.
            </p>
          </Tab>

          <Tab name="Ember Data">
            <p>
              Ember Data is a library for robustly managing data in applications
              built with Ember.js. It provides an intuitive API with models
              representing your data model, and simple commands to get and save
              changes to the data. When using JSON API, it works right out of
              the box, but it is designed to be agnostic to the underlying
              persistence mechanism, so it works just as well with other data
              formats and APIs. Once your adapters and serializers have been
              modified, to conform to your API, the same, familiar Ember Data
              commands will work for all Ember apps.
            </p>
          </Tab>

          <Tab name="Ember Addons">
            <p>
              One of the best parts about Ember, is its incredibly robust addon
              ecosystem. Need to manage authentication/authorization? There's an
              addon for that. Need to create a style guide to showcase your
              brand and common components? There's an addon for that too! With
              thousands of addons, there is generally an addon for most common
              application concerns. Leveraging these addons frees us up to focus
              on the nitty gritty details of your application.
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
