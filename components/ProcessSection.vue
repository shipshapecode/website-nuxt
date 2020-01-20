<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex flex-wrap items-center pt-6 pb-6">
        <div class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2">
          <Design class="max-w-2xl" />
        </div>

        <div class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2">
          <div class="lg:max-w-2xl">
            <h3 class="heading">
              Our Services
            </h3>
            <h3 class="sub-heading">
              What we do
            </h3>

            <p>
              Ship Shape's fleet of services ensures the applications we build
              for clients are future-proof. Explore what we have to offer, and
              together, we’ll build something great.
            </p>

            <nuxt-link class="learn-more" to="/services/">
              Explore Our Services
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center flex-col-reverse pt-6 pb-6 lg:flex-row"
      >
        <div class="w-full flex lg:pr-12 lg:w-1/2">
          <div class="lg:max-w-2xl">
            <h3 class="heading">
              Our Work
            </h3>
            <h3 class="sub-heading">
              What we've built
            </h3>

            <p>
              We’re always up for a challenge. Ship Shape creates scalable
              products and solutions that span across multiple industries.
            </p>

            <nuxt-link class="learn-more" to="/work/">
              See Our Work
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>

        <div class="w-full text-center lg:pl-12 lg:text-right lg:w-1/2">
          <Build class="max-w-2xl" />
        </div>
      </div>

      <div class="flex flex-wrap items-center pt-6 pb-6">
        <div class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2">
          <Ship class="max-w-2xl" />
        </div>

        <div class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2">
          <div class="lg:max-w-2xl">
            <h3 class="heading">
              About Ship Shape
            </h3>
            <h3 class="sub-heading">
              What makes us tick
            </h3>

            <p>
              Ship Shape rose from the need for more experts in Ember.js.
              Combined with our passion for Ember.js and our adept understanding
              of the user experience, we help companies build better apps,
              provide mentoring to teams and contribute to the broader software
              ecosystem.
            </p>

            <nuxt-link class="learn-more" to="/about/">
              Learn About Us
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AngleRight from '~/assets/svgs/angle-right.svg?inline';
import Build from '~/assets/svgs/illustrations/build.svg?inline';
import Design from '~/assets/svgs/illustrations/design.svg?inline';
import Ship from '~/assets/svgs/illustrations/ship.svg?inline';

export default {
  components: {
    AngleRight,
    Build,
    Design,
    Ship
  }
};
</script>
