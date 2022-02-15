<template>
  <div>
    <div itemscope itemtype="http://schema.org/Service">
      <HeroBlock hero-classes="web-apps">
        <template #content>
          <h1 itemprop="name">App Development</h1>
          <p>
            We've translated our expertise in full-stack engineering and
            front-end to back-end design to expand on the possibilities of
            progressive web apps.
          </p>
          <div>
            <nuxt-link class="btn btn-red" to="/contact/">
              Let's build together
            </nuxt-link>
          </div>
        </template>

        <template #icon>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="972"
            src="/img/hero-images/app-development.png"
            width="1344"
          />
        </template>
      </HeroBlock>

      <div class="section bg-blue-light flex flex-wrap justify-center">
        <div class="section-content" data-aos="fade-up">
          <div class="flex flex-col items-center mb-12 text-center w-full">
            <h2 class="text-5xl text-navy">
              Combining the Best of Web And Mobile
            </h2>

            <p class="max-w-3xl">
              Ship Shape enhances UX through progressive web apps. Our clients
              experience the best of traditional and mobile web apps for any
              platform that uses a standards-compliant browser.
            </p>
          </div>

          <div class="flex flex-wrap justify-center lg:flex-nowrap">
            <div class="bg-navy mb-8 p-8 w-full lg:w-1/2 lg:mr-4 lg:p-12">
              <div class="flex flex-wrap items-center justify-center">
                <div>
                  <inline-svg
                    class="h-20 inline-block mb-12 w-20"
                    src="/svgs/icons/speed.svg"
                  />

                  <h5 class="text-white">Save time and money</h5>

                  <p class="text-white">
                    PWAs can replace all of the functions of native apps and
                    websites at once. Not only are they easy to maintain across
                    multiple mobile platforms, they are less expensive upfront
                    and built in less time. Additionally, you have the
                    flexibility to create and release new versions of your app
                    without all of the extra loopholes and marketplace approval.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-navy mb-8 p-8 w-full lg:w-1/2 lg:ml-4 lg:p-12">
              <div class="flex flex-wrap items-center justify-center">
                <div>
                  <inline-svg
                    class="h-20 inline-block mb-12 w-20"
                    src="/svgs/icons/pwa.svg"
                  />

                  <h5 class="text-white">Who's Using PWA's?</h5>

                  <p class="text-white">
                    The benefits of PWAs caught the attention of several market
                    players including Twitter, AliExpress, Alibaba, The
                    Washington Post, Home Depot, Forbes and more.
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
              <nuxt-img
                class="m-auto max-w-2xl"
                src="/svgs/pages/app-development/app.svg"
              />
            </div>
            <div
              class="w-full flex lg:pl-12 lg:justify-end lg:w-1/2"
              data-aos="fade-up"
            >
              <div class="m-auto max-w-2xl w-full">
                <h3>PWA Benefits</h3>

                <ul class="list-disc ml-6">
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

    <div
      class="section bg-blue-light flex flex-wrap justify-center"
      itemscope
      itemtype="http://schema.org/Service"
    >
      <div class="section-content" data-aos="fade-up">
        <div class="flex flex-col items-center mb-12 text-center w-full">
          <h2 class="text-5xl text-navy">Cross Platform Desktop Apps</h2>

          <p class="max-w-3xl">
            In addition to PWAs, which can also be installed on desktop, we have
            created top-notch multi-platform apps leveraging Electron. Electron
            allows you to ship a cross platform desktop app and integrate more
            closely with native OS features. Check out our recent work on
            <nuxt-link to="/work/swach/">Swach</nuxt-link> to learn more.
          </p>
        </div>

        <div class="flex flex-wrap justify-center lg:flex-nowrap">
          <div class="bg-navy mb-8 p-8 w-full lg:w-1/2 lg:mr-4 lg:p-12">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <inline-svg
                  class="h-20 inline-block mb-12 w-20"
                  src="/svgs/icons/sail.svg"
                />

                <h5 class="text-white">Sail into an App Store</h5>

                <p class="text-white">
                  Save time and money. Ship Shape will code to power across many
                  platforms, then deploy on macOS, Windows and Linux, in
                  addition to landing you in macOS and Windows app stores to
                  reach your target audience.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-navy mb-8 p-8 w-full lg:w-1/2 lg:ml-4 lg:p-12">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <inline-svg
                  class="h-20 inline-block mb-12 w-20"
                  src="/svgs/icons/native-apps.svg"
                />

                <h5 class="text-white">Ship native apps</h5>

                <p class="text-white">
                  Electron allows your app to use things like native menus and
                  notifications and native installers. It also enables automatic
                  updates and provides a more seamless inegration with macOS,
                  Windows, and Linux, for when you need your app to be
                  indistinguishable from a native app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
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
