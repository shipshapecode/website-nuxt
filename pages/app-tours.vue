<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="app-tours">
      <template v-slot:content>
        <h1
          class="heading"
          itemprop="name"
        >
          App Tours with Shepherd.js
        </h1>
        <p>
          We leverage <a href="https://shepherdjs.dev/">Shepherd.js</a> to create step-by-step application tours and feature
          introductions to help new users get up to speed quickly with your web app.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <ShepherdLogo class="shepherd-logo max-w-lg p-12 w-full"/>
      </template>
    </HeroBlock>

    <div class="portfolio-container section flex flex-wrap justify-center bg-grey-transparent">
      <div class="section-content">
        <h2 class="heading">
          Why do I need an app tour?
        </h2>

        <p class="max-w-5xl">
          We've leveraged the flexibility of these tours to lead users through a number of events. Upon the
          first time logging into an application, tours can be used to validate and ensure a smooth setup process.
          We used this technique for our
          <nuxt-link to="/work/brokermate/">
            project with Brokermate
          </nuxt-link>
          to ensure users completed all the required setup steps.
        </p>

        <div class="flex flex-wrap justify-center">
          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pr-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  New Users
                </h3>

                <p>
                  Introducing new users to the features of your product can help them get up and running much
                  more quickly than if they were exploring the app on their own. If a new user gets confused
                  with how to use your app, they may become frustrated and abandon your product all together.
                  An application tour smoothly guides them through everything, for a great first impression.
                </p>
              </div>
            </div>
          </div>

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-4 lg:pr-4">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  New Features
                </h3>

                <p>
                  After spending countless hours refreshing your app flow, you want to ensure your existing
                  users are not confused when they encounter the latest changes for the first time. Your existing
                  visitors can be shown the exciting new features and how to maximize their ability to complete
                  important tasks to ensure long term effectiveness for the investments you've made to improve
                  your software.
                </p>
              </div>
            </div>
          </div>

          <div class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-8">
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">
                  Onboarding
                </h3>

                <p>
                  If your product onboarding is a large, multi-step process; it is helpful to break it up into multiple
                  tours. This allows you to keep each tour small and focused, so it is not overwhelming to the user. They
                  can then complete each section at their own pace. You can also track their progress to continue encouraging
                  them to complete all the onboarding steps. We've use Shepherd tours to do basic signup, lead a customer in
                  their second login, create additional accounts, and more detailed processes such as creating branding profiles
                  in a white label web application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <WhyShepherd/>
  </div>
</template>

<style>
  .shepherd-logo .lines,
  .shepherd-logo .open-eye,
  .shepherd-logo .wink {
    transition: visibility 0s, opacity 0.25s ease-in-out;
  }

  .shepherd-logo .open-eye {
    opacity: 1;
    visibility: visible !important;
  }

  .shepherd-logo .lines,
  .shepherd-logo .wink {
    opacity: 0;
    visibility: hidden !important;
  }

  .shepherd-logo:hover .lines,
  .shepherd-logo:hover .wink {
    opacity: 1;
    visibility: visible !important;
  }

  .shepherd-logo:hover .open-eye {
    opacity: 0;
    visibility: hidden !important;
  }
</style>

<script>
  import ShepherdLogo from '~/assets/svgs/shepherd.svg?inline';
  import HeroBlock from '~/components/HeroBlock.vue';
  import WhyShepherd from '~/components/WhyShepherd.vue';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      ShepherdLogo,
      HeroBlock,
      WhyShepherd
    },

    head() {
      const title = 'App Tours with Shepherd.js';
      const description = 'We leverage Shepherd.js to create step-by-step application tours and feature introductions to help new users get up to speed quickly with your web app.';
      const url = 'https://shipshape.io/app-tours/';

      return generateMeta(title, description, url);
    }
  };
</script>
