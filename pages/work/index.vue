<template>
  <div>
    <div class="section flex flex-wrap justify-center">
      <div class="section-content">
        <div class="flex flex-col mb-12 w-full">
          <h1>Our Work</h1>

          <p class="max-w-3xl">
            Unlike large corporations with offshore developers, Ship Shape
            crafts homegrown, bespoke solutions to solve problems. This is how
            we're making waves for clients nationwide like Netflix and
            SocialCode.
          </p>
        </div>

        <CaseStudiesList />

        <ClientsGrid />
      </div>
    </div>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <div class="flex flex-wrap w-full lg:flex-no-wrap">
          <div
            class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
            data-aos="fade-up"
          >
            <div class="flex flex-col w-full">
              <h3 class="text-white text-xl" itemprop="name">
                Our Open Source Contributions
              </h3>

              <p class="flex flex-grow">
                Sharing is caring. Ship Shape maintains custom Ember addons
                while contributing to countless projects throughout the open
                source community.
              </p>

              <nuxt-link
                class="btn btn-white text-center"
                to="/services/open-source/"
              >
                Learn more
              </nuxt-link>
            </div>
          </div>

          <div
            class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
            data-aos="fade-up"
          >
            <div class="flex flex-col w-full">
              <h3 class="text-white text-xl" itemprop="name">
                Ship Shape's JavaScript Libraries
              </h3>

              <p class="flex flex-grow">
                At Ship Shape, we’re passionate about all things JavaScript and
                UI related. We create open source libraries for all to use, like
                Shepherd.js, so that everyone has an opportunity to build and
                improve future frameworks.
              </p>

              <nuxt-link
                class="btn btn-white text-center"
                to="/services/open-source/"
              >
                Learn more
              </nuxt-link>
            </div>
          </div>

          <div
            class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
            data-aos="fade-up"
          >
            <div class="flex flex-col w-full">
              <h3 class="text-white text-xl" itemprop="name">
                Ship Shape's Ember Addons
              </h3>

              <p class="flex flex-grow">
                Fortune 100 companies use our Ember addons. In fact, Ship
                Shape's Ember addons have been downloaded millions of times by
                developers of all backgrounds.
              </p>

              <nuxt-link
                class="btn btn-white text-center"
                to="/services/ember-consulting/"
              >
                See why
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
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
    const title = 'Our Work';
    const description =
      'See a few examples of our work in Ember Consulting, and how we solve tough problems for our clients.';
    const url = 'https://shipshape.io/work/';

    return generateMeta(title, description, url);
  }
};
</script>
