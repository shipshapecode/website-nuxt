<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Expel</h1>

        <p>
          Expel offers 24x7 security monitoring and response for cloud, hybrid
          and on-premises environments. The company uses the security signals
          customers already own so organizations can get more value from their
          existing security investments. Expel connects to customer tech
          remotely through APIs, not agents, so its SOC can start monitoring a
          customer’s environment in a matter of hours, letting their internal
          teams get back to focusing on the most strategic security priorities
          that are unique to their business.
        </p>
      </div>

      <div
        class="
          bg-expel-green
          flex flex-wrap
          h-64
          md:h-140
          justify-center
          items-center
        "
      >
        <div class="w-1/2">
          <inline-svg
            class="fill-white h-auto w-full"
            src="/svgs/clients/expel.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          Expel sought to give its customers an easier way to enter and track
          their National Institute of Standards and Technology (NIST) scores. To
          date, customers had tracked their progress in an Excel spreadsheet
          with plenty of manual support from folks at Expel. This new system
          would allow users to enter their scores into a step-by-step wizard
          right in Expel Workbench&trade;, and explain what each score meant. It
          would also provide informative charts and graphs for a quick glance at
          a customer’s NIST progress.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="An overview of NIST scores, broken down by category and visualized in a radar graph."
            class="flex"
            :src="require('~/assets/img/work/expel/nist-overview.png?webp')"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          The most important feature for customers would be the ability to see
          at a glance which NIST categories they’re doing well in, and which
          require more attention. To achieve this, we created a custom chart and
          progress bars per category. We heavily leveraged
          <a href="https://www.chartjs.org/">Chart.js</a> and the radar chart
          type it provides, and pushed it outside of the confines of its typical
          API to create an entirely new type of chart.
        </p>

        <p>
          This new chart allowed customers to easily select different NIST
          categories and highlight them in the radar chart. To achieve this, we
          had to essentially input data for five separate radar charts, as there
          was no mechanism to have five distinct areas as part of one radar
          chart out of the box. This really shows the flexibility of Chart.js to
          create seemingly endless chart types, only limited by your
          imagination.
        </p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="The protect NIST category is selected and scores are filtered to that category."
            class="flex"
            :src="require('~/assets/img/work/expel/nist-selected.png?webp')"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          Another feature extremely important to the success of the NIST
          dashboard was making a user-friendly, step-by-step wizard to walk
          users through NIST scoring. The tool provides scoring guidance and
          questions to drive discussion, so each user receives the same written
          guidance and support as they decide on a score for each category.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="The edit mode for scores, showing a simple user interface with scoring criteria for guidance."
            class="flex"
            :src="require('~/assets/img/work/expel/nist-edit-scores.png?webp')"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Customers can now easily enter and monitor their NIST scores right in
          Expel Workbench&trade;, which helps to streamline the process for
          customers and tracks their progress in one place, eliminating the need
          for a CISO and their team to keep track of data entry in multiple
          Excel spreadsheets. Reimaging old, complex workflows and adding them
          into Expel Workbench&trade; continues to make it a one-stop shop for
          all things security.
        </p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Graphs indicating the progress made in various NIST categories."
            class="flex"
            :src="
              require('~/assets/img/work/expel/nist-progress-graphs.png?webp')
            "
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          In addition to the NIST work we completed, we also worked heavily on
          updating Expel's large Ember app to Ember Octane. We assisted with
          updating Ember components to Glimmer components, using angle bracket
          component invocations, removing mixins, refactoring away from string
          based actions, and much, much more.
        </p>
      </div>

      <BottomLinks
        next-link="/work/swach/"
        next-link-text="Swach"
        previous-link="/work/netflix/"
        previous-link-text="Netflix"
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
    const title = 'Expel Ember.js Enterprise App Development';
    const description =
      "See how Ship Shape's enterprise app development team helped Expel create a new, fast Ember.js app that centralizes NIST score tracking.";
    const url = 'https://shipshape.io/work/expel/';

    return generateMeta(title, description, url);
  }
};
</script>
