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
              The Ship Shape Retainer Model
            </h3>

            <p>
              We want to remain available for you throughout your projects. Our
              retainer ensures your company has Ship Shape’s full attention for
              a couple of hours per week. Our on-demand retainer model includes
              pair programming and coaching for your team.
            </p>

            <nuxt-link class="learn-more" to="/contact/">
              Learn more
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
              Staff Augmentation
            </h3>

            <p>
              Consider us a part of your team, serving as added support and
              on-demand Ember.js experts. Ship Shape joins you in the race to
              complete your project milestones, boost your current workflow or
              lend our expertise in Ember.
            </p>

            <nuxt-link class="learn-more" to="/contact/">
              Let's Build Together
              <AngleRight class="h-4 inline mb-1 w-4" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="w-full text-center lg:pl-12 lg:text-right lg:w-1/2"
          data-aos="fade-up"
        >
          <Build class="m-auto max-w-2xl" />
        </div>
      </div>

      <div
        class="flex flex-wrap items-center pt-6 pb-6"
        itemscope
        itemtype="http://schema.org/Service"
      >
        <div
          class="w-full text-center lg:pr-12 lg:text-left lg:w-1/2"
          data-aos="fade-up"
        >
          <Ship class="m-auto max-w-2xl" />
        </div>

        <div
          class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2"
          data-aos="fade-up"
        >
          <div class="m-auto max-w-2xl w-full">
            <h3 class="heading" itemprop="name">
              Learn the ropes
            </h3>

            <p>
              Ship Shape created one-on-one programs for in-depth team training
              and mentoring. We help your company refine your skills in the
              latest in Javascript, code writing and Ember.js. development.
            </p>

            <nuxt-link class="learn-more" to="/contact/">
              Sign Up for Team Training
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
