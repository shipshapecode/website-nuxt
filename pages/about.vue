<template>
  <div>
    <HeroBlock class="about bg-navy text-white">
      <template v-slot:content>
        <h1 class="heading text-white">
          About Ship Shape
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
          vitae viverra tellus.
        </p>
        <div>
          <nuxt-link class="btn-white" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>
    </HeroBlock>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2">
          <h3 class="text-white">
            Our Clients
          </h3>

          <p class="max-w-lg w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
            vitae viverra tellus. Praesent tempus purus quis erat ultricies, ac
            aliquam odio bibendum. Donec interdum magna nulla, nec venenatis
            eros consectetur ac. Fusce auctor fermentum augue eu vestibulum.
            Praesent tempus, est ut fermentum mattis, purus quam pulvinar elit,
            eu tempor dolor diam sed leo.
          </p>
        </div>

        <div class="w-full lg:w-1/2">
          <h3 class="text-white">
            Our Community
          </h3>

          <p class="max-w-lg w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
            vitae viverra tellus. Praesent tempus purus quis erat ultricies, ac
            aliquam odio bibendum. Donec interdum magna nulla, nec venenatis
            eros consectetur ac. Fusce auctor fermentum augue eu vestibulum.
            Praesent tempus, est ut fermentum mattis, purus quam pulvinar elit,
            eu tempor dolor diam sed leo.
          </p>
        </div>
      </div>
    </div>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h3 class="text-white">
            Our Team
          </h3>
        </div>
        <div class="flex-1 flex flex-wrap">
          <div class="max-w-xs">
            <img
              class="mb-4"
              src="/img/blog/authors/robert.jpg"
              alt="A picture of Robbie Wagner"
            />
            <h3 class="heading text-red text-2xl">
              Robbie Wagner
            </h3>

            <p class="text-white">
              CEO
            </p>

            <p class="text-white">
              Description here
            </p>
          </div>
        </div>

        <div class="flex-1 flex flex-wrap">
          <div class="max-w-xs">
            <img
              class="mb-4"
              src="/img/blog/authors/robert.jpg"
              alt="A picture of Chuck Carpenter"
            />
            <h3 class="heading text-red text-2xl">
              Chuck Carpenter
            </h3>

            <p class="text-white">
              COO
            </p>

            <p class="text-white">
              Description here
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock
  },

  head() {
    const title = 'About Us';
    const description =
      'We can help streamline your Ember.js or Nuxt project. Learn how ' +
      'Ship Shape designs and develops next-level software and app solutions.';
    const url = 'https://shipshape.io/about/';

    return generateMeta(title, description, url);
  }
};
</script>
