<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="web-apps">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          App Development
        </h1>
        <p>
          We’ve translated our expertise in full-stack engineering and front-end
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
        <EmberConsultingIcon class="max-w-2xl" />
      </template>
    </HeroBlock>

    <div
      class="portfolio-container section flex flex-wrap justify-center bg-grey-transparent"
    >
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
          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pr-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Save Time and Money
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

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-4 lg:pr-4">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
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

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Who’s Using PWA’s?
                </h3>

                <p>
                  The benefits of PWA’s caught the attention of several market
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
        <h2 class="heading">
          Lorem ipsum dolor
        </h2>

        <Tabs>
          <div class="max-w-3xl">
            <Tab name="Lorem ipsum" :selected="true">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
                lacus, vitae viverra tellus. Praesent tempus purus quis erat
                ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
                nec venenatis eros consectetur ac.
              </p>
            </Tab>

            <Tab name="Dolor sit">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
                lacus, vitae viverra tellus. Praesent tempus purus quis erat
                ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
                nec venenatis eros consectetur ac.
              </p>
            </Tab>

            <Tab name="Vitae viverra">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam
                lacus, vitae viverra tellus. Praesent tempus purus quis erat
                ultricies, ac aliquam odio bibendum. Donec interdum magna nulla,
                nec venenatis eros consectetur ac.
              </p>
            </Tab>
          </div>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import Tab from '~/components/Tab.vue';
import Tabs from '~/components/Tabs.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    EmberConsultingIcon,
    HeroBlock,
    Tab,
    Tabs
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
