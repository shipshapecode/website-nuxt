<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Expel</h1>

        <p>Expel description here</p>
      </div>

      <div
        class="bg-expel-green flex flex-wrap h-64 md:h-140 justify-center items-center"
      >
        <div class="w-1/2">
          <inline-svg
            class="fill-white h-auto w-full"
            src="/svgs/clients/expel.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>TODO</p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-legacy-builder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>TODO</p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>TODO</p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder_active.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          The new interface is more performant and user friendly, which enables
          Jebbit to provide their customers with a more intuitive initial setup.
        </p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder_published.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          Lastly, we helped ensure Jebbit was using the latest Ember best
          practices, and helped them update to the latest Ember versions. This
          has greatly improved the overall speed and maintainability of the app.
        </p>
      </div>

      <BottomLinks
        next-link="/work/swach/"
        next-link-text="Swach"
        previous-link="/work/netflix/"
        previous-link-text="Netflix"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks
  },

  head() {
    const title = 'Case Study - Expel';
    const description =
      'Learn how Ship Shape helped Expel build a NIST dashboard with custom visualizations.';
    const url = 'https://shipshape.io/work/expel/';

    return generateMeta(title, description, url);
  }
};
</script>
