<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content">
      <div
        class="flex flex-wrap items-center pt-6 pb-6"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div
          class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2"
          data-aos="fade-up"
        >
          <Design class="m-auto max-w-2xl" />
        </div>

        <div
          class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2"
          data-aos="fade-up"
        >
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Mentoring
            </h3>
            <h3 class="sub-heading">
              Lorem ipsum dolor
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ipsum massa, euismod non vestibulum ut, vestibulum id neque. Morbi
              ligula nibh, imperdiet quis enim quis, porttitor vestibulum urna.
              Duis tincidunt ligula vel leo cursus, id blandit massa tempor.
              Nulla sagittis enim vel lorem commodo, ut interdum dolor
              ultricies.
            </p>

            <nuxt-link class="learn-more" to="/ember-consulting/">
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
        <div class="w-full flex lg:pr-12 lg:w-1/2" data-aos="fade-up">
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Ember.js
            </h3>
            <h3 class="sub-heading">
              Lorem ipsum dolor
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ipsum massa, euismod non vestibulum ut, vestibulum id neque. Morbi
              ligula nibh, imperdiet quis enim quis, porttitor vestibulum urna.
              Duis tincidunt ligula vel leo cursus, id blandit massa tempor.
              Nulla sagittis enim vel lorem commodo, ut interdum dolor
              ultricies.
            </p>

            <nuxt-link class="learn-more" to="/web-apps/">
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
    </div>
  </div>
</template>

<script>
import AngleRight from '~/assets/svgs/angle-right.svg?inline';
import Build from '~/assets/svgs/illustrations/build.svg?inline';
import Design from '~/assets/svgs/illustrations/design.svg?inline';

export default {
  components: {
    AngleRight,
    Build,
    Design
  }
};
</script>
