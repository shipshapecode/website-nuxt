<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <div
        class="flex flex-wrap items-center pt-6 pb-6"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2">
          <Design class="m-auto max-w-2xl" />
        </div>

        <div class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Ember Consulting
            </h3>

            <p>
              Ember.js is Ship Shape’s framework of choice, among the
              multitude of other JavaScript frameworks out there. With Ember, we
              can accomplish so much more - faster, with less errors and on a
              larger scale.
            </p>

            <nuxt-link class="learn-more" to="/services/ember-consulting/">
              See How
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center flex-col-reverse pt-6 pb-6 lg:flex-row"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full flex lg:pr-12 lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              App Development
            </h3>

            <p>
              Building custom full stack web apps is our speciality. Ship Shape
              designs, engineers and programs web apps from start-to-finish so
              that user experience is flawless and reliable for years to come.
            </p>

            <nuxt-link class="learn-more" to="/services/app-development/">
              Learn More
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="w-full text-center lg:pl-12 lg:text-right lg:w-1/2"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <Build class="m-auto max-w-2xl" />
        </div>
      </div>

      <div
        class="flex flex-wrap items-center pt-6 pb-6"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2">
          <Ship class="m-auto max-w-2xl" />
        </div>

        <div class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Mentoring and Team Training
            </h3>

            <p>
              Whether you’re a Senior Developer or Junior Developer, Ship Shape
              fosters one-on-one connections that help make a difference in our
              community. We offer several Ember mentorship programs that
              identify your goals and prepare you and your team for the future
              of Ember.
            </p>

            <nuxt-link class="learn-more" to="/services/mentoring/">
              Learn More
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center flex-col-reverse pt-6 pb-6 lg:flex-row"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full flex lg:pr-12 lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              App Tours
            </h3>

            <p>
              We built our own open source library,
              <a href="https://shepherdjs.dev/">Shepherd.js</a> to guide users
              through the features and functions of your web app. It’s no
              surprise that we’ve been tapped to help companies of all sizes to
              implement user-friendly app tours.
            </p>

            <nuxt-link class="learn-more" to="/services/app-tours/">
              Learn More
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>

        <div class="w-full text-center lg:pl-12 lg:text-right lg:w-1/2">
          <Build class="m-auto max-w-2xl" />
        </div>
      </div>

      <div
        class="flex flex-wrap items-center pt-6 pb-6"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2">
          <Design class="m-auto max-w-2xl" />
        </div>

        <div class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Sponsored Open Source
            </h3>

            <p>
              Ship Shape has created several data adapters, add-ons, and
              libraries to fit into your company’s framework.
            </p>

            <nuxt-link class="learn-more" to="/services/open-source/">
              Learn More
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center flex-col-reverse pt-6 pb-6 lg:flex-row"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div class="w-full flex lg:pr-12 lg:w-1/2">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Nuxt.js Consulting
            </h3>

            <p>
              Nuxt.js makes progressive web app development simple, powerful and
              user friendly. Stay ahead of tech giants and build a solid
              foundation for your digital future with Ship Shape’s Nuxt
              consulting team.
            </p>

            <nuxt-link class="learn-more" to="/services/nuxt-consulting/">
              Learn More
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>

        <div class="w-full text-center lg:pl-12 lg:text-right lg:w-1/2">
          <Build class="m-auto max-w-2xl" />
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
