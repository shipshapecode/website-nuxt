<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="web-apps">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          App Development
        </h1>
        <p>
          We've translated our expertise in full-stack engineering and front-end
          to back-end design to expand on the possibilities of progressive web
          apps.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>

    <div class="section flex flex-wrap justify-center bg-grey-transparent">
      <div class="section-content">
        <h2 class="heading">
          Combining the Best of Web And Mobile
        </h2>

        <p class="max-w-5xl">
          Ship Shape enhances UX through progressive web apps. Our clients
          experience the best of traditional and mobile web apps for any
          platform that uses a standards-compliant browser.
        </p>

        <div class="flex flex-wrap justify-center">
          <div class="pb-2 pt-2 w-full lg:w-1/2 lg:pr-16">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Save time and money
                </h3>

                <p>
                  PWAs can replace all of the functions of native apps and
                  websites at once. Not only are they easy to maintain across
                  multiple mobile platforms, they are less expensive upfront and
                  built in less time. Additionally, you have the flexibility to
                  create and release new versions of your app without all of the
                  extra loopholes and marketplace approval.
                </p>
              </div>
            </div>
          </div>

          <div class="pb-2 pt-2 w-full lg:w-1/2 lg:pl-16">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Who's Using PWA's?
                </h3>

                <p>
                  The benefits of PWAs caught the attention of several market
                  players including Twitter, AliExpress, Alibaba, The Washington
                  Post, Home Depot, Forbes and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-wrap justify-center">
      <div class="section-content">
        <div class="flex flex-wrap items-center pt-6 pb-6">
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
              <h3 class="heading">
                PWA Benefits
              </h3>

              <ul class="list-disc">
                <li class="m-0">Low development costs</li>
                <li class="m-0">Bypass approvals from app marketplace</li>
                <li class="m-0">Single code</li>
                <li class="m-0">Better performance</li>
                <li class="m-0">Responsive</li>
                <li class="m-0">Push Notifications</li>
                <li class="m-0">Faster Load Times</li>
                <li class="m-0">Increased Engagement</li>
                <li class="m-0">Platform and device agnostic</li>
                <li class="m-0">Easily accessible</li>
                <li class="m-0">Deemed home screen worthy</li>
                <li class="m-0">Seamless offline capability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import Ship from '~/assets/svgs/illustrations/ship.svg?inline';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    EmberConsultingIcon,
    HeroBlock,
    Ship
  },

  head() {
    const title = 'App Development Agency';
    const description =
      'Ship Shape develops progressive web apps from start to finish. ' +
      "Hire us for code that won't sink.";
    const url = 'https://shipshape.io/services/app-development/';

    return generateMeta(title, description, url);
  }
};
</script>
