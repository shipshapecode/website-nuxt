<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Brokermate</h1>

        <p>
          Brokermate is a financial technology platform, that provides all the
          tools required to run a successful brokerage. Until now, brokers have
          had to rely on several different technologies to manage their
          business. Brokermate eliminates these layers and brings together
          everything you need in one solution.
        </p>
      </div>

      <div
        class="bg-gradient-brokermate flex flex-wrap h-64 md:h-140 justify-center items-center"
      >
        <div class="w-1/2">
          <img
            alt="Brokermate Logo"
            class="h-auto w-full"
            src="/img/work/brokermate/brokermate-logo.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          While developing a highly complex brokerage management and client
          interaction application, Brokermate discovered that new users needed a
          way to quickly get started using the service.
        </p>
      </div>

      <div class="bg-grey flex flex-wrap justify-center">
        <div
          class="flex flex-wrap justify-center items-center p-4 lg:p-12 md:flex-nowrap"
        >
          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Home page with a few tours completed"
              class="h-auto w-full"
              src="/img/work/brokermate/brokermate-home.png"
            />
          </div>

          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Branding Tour first step"
              class="h-auto w-full"
              src="/img/work/brokermate/bm-branding-step-0.png"
            />
          </div>

          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Branding Tour first step telling users to open the nav menu"
              class="h-auto w-full"
              src="/img/work/brokermate/bm-branding-step-1.png"
            />
          </div>
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          Integrating the Shepherd site tour library, we were able to manage
          multiple visual guides for first time users to add required settings
          and communicate to them how the applications functioned. This was done
          in a way that lead new users to a home setup page, then tracked each
          tour state to ensure completion.
        </p>
      </div>

      <div class="bg-gradient-brokermate flex flex-wrap justify-center">
        <div
          class="flex flex-wrap justify-center items-center p-4 lg:p-12 md:flex-nowrap"
        >
          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Branding Tour step to lead user to configuration page"
              class="h-auto w-full"
              src="/img/work/brokermate/bm-branding-step-2.png"
            />
          </div>

          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Branding Tour step to get user to update information"
              class="h-auto w-full"
              src="/img/work/brokermate/bm-branding-step-3.png"
            />
          </div>

          <div class="p-4 lg:p-8">
            <img
              alt="Brokermate Branding Tour completed"
              class="h-auto w-full"
              src="/img/work/brokermate/linux-step-completed.png"
            />
          </div>
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          We leveraged the existing
          <a href="https://github.com/shipshapecode/shepherd">Shepherd</a> and
          <a href="https://github.com/shipshapecode/ember-shepherd"
            >ember-shepherd</a
          >
          libraries, and added additional features to them, to allow us to fully
          customize many steps, and accommodate design requirements. The site
          tour we created helped walk the users through several different app
          features, and illustrated the location of these features, in the app
          they are currently using. We also added step tracking, throughout the
          app, to ensure that users completed certain steps, such as changing
          pages or adding account settings, before transitioning to subsequent
          tour steps.
        </p>
      </div>

      <div class="flex flex-wrap justify-center w-full">
        <div
          class="bg-grey flex justify-center items-center p-4 lg:flex-1 lg:mr-8"
        >
          <div class="p-4 lg:p-32">
            <img
              alt="Brokermate home page with Arabic"
              class="h-auto w-full"
              src="/img/work/brokermate/bm-start-ar.png"
            />
          </div>
        </div>

        <div
          class="bg-gradient-brokermate flex justify-center items-center p-4 lg:flex-1"
        >
          <div class="p-4 lg:p-32">
            <img
              alt="Brokermate tour started using the correct language"
              class="h-auto w-full"
              src="/img/work/brokermate/brokermate-ar-step.png"
            />
          </div>
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          Finally, we needed the tours to integrate into application features,
          such as translations and transition animations, so that they felt like
          an integrated part of the application, as opposed to an add-on.
        </p>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          New users are now shown a list of tours, to help add required
          configurations and quickly get them familiar with the application. The
          user is scoped to either completing the action asked in the step or
          canceling a tour, in order to return later.
        </p>

        <p>
          They begin tours with customized tour themes that integrate naturally
          into the application flow. All features for this global application
          were applied to the tour initialization allowing for international,
          routable, and trackable tours.
        </p>
      </div>

      <div class="bg-gradient-brokermate flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Brokermate Tour with a detailed step on desktop"
            class="flex"
            src="/img/work/brokermate/bm-desktop_step-detailed.png"
          />
        </div>
      </div>

      <BottomLinks
        next-link="/work/netflix/"
        next-link-text="Netflix"
        previous-link="/work/socialcode/"
        previous-link-text="SocialCode"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks
  },

  head() {
    const title = 'Case Study - Brokermate';
    const description =
      'Learn how we helped Brokermate create custom site tours, to walk new users through their brokerage app.';
    const url = 'https://shipshape.io/work/brokermate/';

    return generateMeta(title, description, url);
  }
};
</script>
