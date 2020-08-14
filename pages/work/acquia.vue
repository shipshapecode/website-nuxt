<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">
          Case Study
        </div>

        <h1 class="text-4xl lg:text-6xl">
          Acquia
        </h1>

        <p>
          Acquia is the open source digital experience company that empowers the
          world’s most ambitious brands to embrace innovation and create
          customer moments that matter.
        </p>

        <p>
          Lift is a core marketing platform that allows customers to fully
          manage digital content across multiple mediums such as the web,
          graphic displays, billboards, and more -- all through a single
          management portal.
        </p>
      </div>

      <div
        class="bg-grey-transparent flex flex-wrap h-64 md:h-140 justify-center items-center"
      >
        <div class="w-1/2 lg:w-1/3">
          <inline-svg
            class="fill-white h-auto w-full"
            src="/svgs/clients/acquia-droplet.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          Users of Acquia's Lift product were finding it difficult to manage the
          content rules for dynamically determining what their site visitors
          would see. For the web, customers may use Lift to manage the entire
          experience and tailor it to customized segments of users, such as
          first time users, or geo-located users etc. This has been in an admin
          dashboard placed over the customer's site in context as a set of
          seperate iframes that must messaage to one another.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Lift Experience Builder Legacy"
            class="flex"
            src="/img/work/acquia/legacy-lift.png"
          />
        </div>
      </div>
      <div class="p-4 lg:p-12">
        <p>
          Additionaly, the Lift development team had issues managing data across
          many individual Ember apps that were created in each iframed sandbox,
          which were intended to syncronize data changes as the user added or
          updated configurations.
        </p>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          Bringing our experience with building performant applications, we
          worked with the in house product team to design architecture that
          would be a better overall user experience and avoid previous pitfalls
          for messaging across sandboxed mini applications in the browser.
        </p>
      </div>
      <div class="bg-acquia-blue flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Lift Experience Builder Legacy"
            class="flex"
            src="/img/work/acquia/central_recommendation_entry_1.jpg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          This was a completely new ground up application using both a stand
          alone app for the admin and metrics for the client that was no longer
          encombered by the reduced screen real estate, but also a smaller
          single windowed interface on the customer site for basic preview
          functions.
        </p>
      </div>
      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Lift Experience Builder Legacy"
            class="flex"
            src="/img/work/acquia/central_target_entry_1.jpg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          The result was faster load times and reduced code to load on the
          client's own web pages. Also, with a new application to create complex
          rule creation on what content site visitors would see, the overall
          number of clicks for each step was reduced by an average of half.
        </p>
      </div>

      <div class="bg-acquia-blue flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Lift Experience Builder Legacy"
            class="flex"
            src="/img/work/acquia/builder_index_1.jpg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          After loading the site in admin mode, users can create dynamic slots
          on the page and select content or content algorithms on how to fill
          those slots.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Lift Experience Builder Legacy"
            class="flex"
            src="/img/work/acquia/builder_index_5.jpg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Due to complex onboarding and management steps, Acquia would see a
          regular amount of non-renewals or cancelations. Since releasing the
          new application, zero customers who have started on the new version of
          Lift or upgraded to the new version have canceled.
        </p>
        <p>
          Customers using the new version of Lift are creating 2.5x more
          campaigns than customers using the previous application.
        </p>
        <p>
          Users of the latest version of Lift are able to onboard and get value
          from the product 3x faster than customers who had onboarded into the
          old version.
        </p>
      </div>

      <BottomLinks
        next-link="/work/socialcode/"
        next-link-text="SocialCode"
        previous-link="/work/jebbit/"
        previous-link-text="Jebbit"
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
    const title = 'Case Study - Acquia';
    const description = `Learn how we improved Acquia's customer retention and app performance!`;
    const url = 'https://shipshape.io/work/acquia/';

    return generateMeta(title, description, url);
  }
};
</script>
