<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">
          Case Study
        </div>

        <h1 class="text-4xl lg:text-6xl">
          Jebbit
        </h1>

        <p>
          Jebbit is an enterprise software platform that enables a future of
          total data transparency between brands and consumers. Jebbit's mission
          is to make every brand-and-consumer interaction assumption free by
          asking consumers explicitly and directly about their interests,
          motivations, and preferences.
        </p>
      </div>

      <div
        class="bg-jebbit-green flex flex-wrap h-64 md:h-140 justify-center items-center"
      >
        <div class="w-1/2">
          <JebbitLogo class="fill-white h-auto w-full" />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          Jebbit had several years of user feedback and data on the difficulty
          in using the Campaign Builder product and sought to create a
          lightweight version, that is more accessible and easier to get started
          for new customers.
        </p>

        <p>
          Customers weren't clear on what the published version would look like,
          until they completed all the steps, so the number of revisions to get
          a polished campaign could take a lot of extra time.
        </p>

        <p>
          Jebbit's users needed to more clearly understand the outcomes of
          dynamic campaigns and how to determine the option paths for those
          choices.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-legacy-builder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          The Ship Shape team began by creating a flexible grid layout to
          maximize usability across various screen sizes and give the
          application more familiar user patterns.
        </p>

        <p>
          We created a contextual toolbar that would react to the type of
          component the user clicked, then only provide the tools that could be
          used for that one content piece. Our team built simple text size and
          alignment buttons to improve the ease of option setting and give
          visual feedback for toggling between the predefined options for
          styling.
        </p>

        <p>
          Showing customers the mobile campaign as they are creating it, and
          having live previews, improved the understanding of how the published
          version would look, immediately.
        </p>

        <p>
          The application ensures that changes are saved as the user moves
          through the process, to simplify saves while defining the campaign.
          Lastly, we created a completion check service to determine if the user
          had completed all minimal steps and provide guiding steps on the
          remaining parts to publish a campaign.
        </p>
      </div>

      <div class="bg-jebbit-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          The application has been streamlined with defaults, and we now handle
          many setup requirements behind the scenes, so that the Jebbit Simple
          Builder provides a much improved initial experience for new Jebbit
          customers to get started with creating campaigns from their first
          login.
        </p>

        <p>
          Users see, in context, how to connect the results of questionnaires or
          product preferences, and the outcomes their campaign will show, as
          they are building, instead of trying to work through complicated
          configuration settings.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder_active.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          The new interface is more performant and user friendly, which enables
          Jebbit to provide their customers with a more intuitive initial setup.
        </p>
      </div>

      <div class="bg-jebbit-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Jebbit Experience Builder Legacy"
            class="flex"
            src="/img/work/jebbit/jebbit-simple-builder_published.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          Lastly, we helped ensure Jebbit was using the latest Ember best
          practices, and helped them update to the latest Ember versions. This
          has greatly improved the overall speed and maintainability of the app.
        </p>
      </div>

      <BottomLinks
        next-link="/work/swach/"
        next-link-text="Swach"
        previous-link="/work/acquia/"
        previous-link-text="Acquia"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import JebbitLogo from '~/assets/svgs/clients/jebbit.svg?inline';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks,
    JebbitLogo
  },

  head() {
    const title = 'Case Study - Jebbit';
    const description =
      'Learn how Ship Shape helped Jebbit revamp their campaign builder and improve user experience.';
    const url = 'https://shipshape.io/work/jebbit/';

    return generateMeta(title, description, url);
  }
};
</script>
