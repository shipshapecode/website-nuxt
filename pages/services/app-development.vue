<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="web-apps">
      <template v-slot:content>
        <h1 class="heading" itemprop="name">
          App Development
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
          vitae viverra tellus.
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
          Lorem ipsum dolor sit
        </h2>

        <p class="max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
          vitae viverra tellus. Praesent tempus purus quis erat ultricies, ac
          aliquam odio bibendum. Donec interdum magna nulla, nec venenatis eros
          consectetur ac. Fusce auctor fermentum augue eu vestibulum. Praesent
          tempus, est ut fermentum mattis, purus quam pulvinar elit, eu tempor
          dolor diam sed leo. Mauris aliquam nisl nec mauris elementum sagittis.
        </p>

        <div class="flex flex-wrap justify-center">
          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pr-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Lorem Ipsum
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ac volutpat leo. Donec quis faucibus leo. Donec
                  eleifend aliquam lacus, vitae viverra tellus. Praesent tempus
                  purus quis erat ultricies, ac aliquam odio bibendum. Donec
                  interdum magna nulla, nec venenatis eros consectetur ac. Fusce
                  auctor fermentum augue eu vestibulum. Praesent tempus, est ut
                  fermentum mattis, purus quam pulvinar elit, eu tempor dolor
                  diam sed leo. Mauris aliquam nisl nec mauris elementum
                  sagittis.
                </p>
              </div>
            </div>
          </div>

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-4 lg:pr-4">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Lorem Ipsum
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ac volutpat leo. Donec quis faucibus leo. Donec
                  eleifend aliquam lacus, vitae viverra tellus. Praesent tempus
                  purus quis erat ultricies, ac aliquam odio bibendum. Donec
                  interdum magna nulla, nec venenatis eros consectetur ac. Fusce
                  auctor fermentum augue eu vestibulum. Praesent tempus, est ut
                  fermentum mattis, purus quam pulvinar elit, eu tempor dolor
                  diam sed leo. Mauris aliquam nisl nec mauris elementum
                  sagittis.
                </p>
              </div>
            </div>
          </div>

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Lorem Ipsum
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ac volutpat leo. Donec quis faucibus leo. Donec
                  eleifend aliquam lacus, vitae viverra tellus. Praesent tempus
                  purus quis erat ultricies, ac aliquam odio bibendum. Donec
                  interdum magna nulla, nec venenatis eros consectetur ac. Fusce
                  auctor fermentum augue eu vestibulum. Praesent tempus, est ut
                  fermentum mattis, purus quam pulvinar elit, eu tempor dolor
                  diam sed leo. Mauris aliquam nisl nec mauris elementum
                  sagittis.
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
    const title = 'Web Apps';
    const description = 'TODO';
    const url = 'https://shipshape.io/web-apps/';

    return generateMeta(title, description, url);
  }
};
</script>
