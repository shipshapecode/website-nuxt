<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-2xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">
          Case Study
        </div>

        <h1 class="text-4xl lg:text-6xl">
          Jebbit
        </h1>

        <p>
          Jebbit is an enterprise software platform that enables a future of
          total data transparency between brands and consumers. Jebbit’s mission
          is to make every brand-and-consumer interaction assumption free by
          asking consumers explicitly and directly about their interests,
          motivations, and preferences.
        </p>
      </div>

      <div class="bg-black flex flex-wrap h-64 md:h-140 justify-center items-center">
        <div class="w-1/2">
          <JebbitLogo class="fill-white h-auto w-full" />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          Jebbit had several years of user feedback and data on the difficulty
          in using the Campaign Builder product and sought to create a
          lightweight version that is more accessible and easier to get started
          for new customers.
        </p>

        <div class="bg-grey-light flex justify-center lg:flex-1">
          <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
            <img
              alt="Jebbit Experience Builder Legacy"
              class="flex"
              src="/img/work/jebbit/jebbit-legacy-builder.png"
            >
          </div>
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          The Ship Shape team began by creating a flexible grid layout to
          maximize usability across various screen sizes and give the
          application more familiar user patterns. In order to reduce the
          complexity of creating campaigns in the Jebbit system, some custom
          components were created to obfuscate those flows so that the user
          could easily make customizations while the system handled necessary
          configurations in the background.
        </p>

        <div class="bg-grey-light flex justify-center lg:flex-1">
          <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
            <img
              alt="Jebbit Experience Builder Legacy"
              class="flex"
              src="/img/work/jebbit/jebbit-simple-builder.png"
            >
          </div>
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Leveraging some more modern practices in managing concurrency and
          starting with more predictable configurations, the Jebbit Simple
          Builder is now a much improved initial experience for new Jebbit
          customers to get started with creating campaigns from their first
          login.
        </p>

        <div class="bg-grey-light flex justify-center lg:flex-1">
          <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
            <img
              alt="Jebbit Experience Builder Legacy"
              class="flex"
              src="/img/work/jebbit/jebbit-simple-builder_active.png"
            >
          </div>
        </div>

        <p>
          The new interface is more performant and user friendly to enable
          Jebbit to bridge the gap customers were having in providing value on
          initial setup.
        </p>

        <div class="bg-grey-light flex justify-center lg:flex-1">
          <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
            <img
              alt="Jebbit Experience Builder Legacy"
              class="flex"
              src="/img/work/jebbit/jebbit-simple-builder_published.png"
            >
          </div>
        </div>

        <p>
          Also, using the latest Ember standards has helped the company get the
          overall application on to to latest versions to improve overall speed
          and maintainability.
        </p>
      </div>

      <BottomLinks
        next-link="/work/brokermate/"
        next-link-text="Brokermate"
        previous-link="/work/netflix/"
        previous-link-text="Netflix"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import JebbitLogo from '~/assets/svgs/clients/jebbit.svg?inline';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks,
    JebbitLogo
  },

  head() {
    const title = 'Case Study - Jebbit';
    const description =
      'Read how Ship Shape was able to leverage our best practices to deliver a performant and easy to use campaign builder.';
    const url = 'https://shipshape.io/work/jebbit/';

    return generateMeta(title, description, url);
  }
};
</script>
