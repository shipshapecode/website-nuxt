<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <h2 class="heading">
        Why use Nuxt?
      </h2>

      <Tabs>
        <div class="max-w-3xl">
          <Tab name="Overview" :selected="true">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
              lacus, vitae viverra tellus. Praesent tempus purus quis erat
              ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
              nec venenatis eros consectetur ac. Fusce auctor fermentum augue eu
              vestibulum. Praesent tempus, est ut fermentum mattis, purus quam
              pulvinar elit, eu tempor dolor diam sed leo.
            </p>
          </Tab>

          <Tab name="Nuxt.js">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
              lacus, vitae viverra tellus. Praesent tempus purus quis erat
              ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
              nec venenatis eros consectetur ac. Fusce auctor fermentum augue eu
              vestibulum. Praesent tempus, est ut fermentum mattis, purus quam
              pulvinar elit, eu tempor dolor diam sed leo.
            </p>
          </Tab>

          <Tab name="Vue">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
              lacus, vitae viverra tellus. Praesent tempus purus quis erat
              ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
              nec venenatis eros consectetur ac. Fusce auctor fermentum augue eu
              vestibulum. Praesent tempus, est ut fermentum mattis, purus quam
              pulvinar elit, eu tempor dolor diam sed leo.
            </p>
          </Tab>

          <Tab name="PWA">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
              lacus, vitae viverra tellus. Praesent tempus purus quis erat
              ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
              nec venenatis eros consectetur ac. Fusce auctor fermentum augue eu
              vestibulum. Praesent tempus, est ut fermentum mattis, purus quam
              pulvinar elit, eu tempor dolor diam sed leo.
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
