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

    <div class="section bg-navy">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h2 class="text-white">
            Clients
          </h2>
        </div>
      </div>
    </div>

    <div class="section bg-navy">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h2 class="text-white">
            Team
          </h2>
        </div>
        <div class="flex-1 flex flex-wrap justify-center">
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

        <div class="flex-1 flex flex-wrap justify-center">
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
    const title = 'Web Apps';
    const description = 'TODO';
    const url = 'https://shipshape.io/web-apps/';

    return generateMeta(title, description, url);
  }
};
</script>
