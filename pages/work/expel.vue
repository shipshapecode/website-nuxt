<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Expel</h1>

        <p>Expel description here</p>
      </div>

      <div
        class="bg-expel-green flex flex-wrap h-64 md:h-140 justify-center items-center"
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
          Expel had an idea for a new, easier way for clients to enter and track
          their NIST scores. Typically, everyone had done this in a giant Excel
          spreadsheet with lots of manual help from folks at Expel. This new
          system would allow users to enter their scores into a step by step
          wizard, and explain what each score meant. It also needed to provide
          informative charts and graphs for a quick glance at your NIST
          progress.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Placeholder"
            class="flex"
            src="/img/work/desktop-placeholder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          The most important feature, of this project, was the ability to see at
          a glance which NIST categories you are doing well in, and which need
          more work. To achieve this we created a custom chart and progress bars
          per category. We heavily leveraged
          <a href="https://www.chartjs.org/">Chart.js</a> and the radar chart
          type it provides, and pushed it outside of the confines of its typical
          API to create an entirely new type of chart.
        </p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Placeholder"
            class="flex"
            src="/img/work/desktop-placeholder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Customers can now easily enter and monitor their NIST scores right in
          the Expel Workbench app, and this has led to (TODO and increase in
          NIST participation or something?).
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Placeholder"
            class="flex"
            src="/img/work/desktop-placeholder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>TODO</p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Placeholder"
            class="flex"
            src="/img/work/desktop-placeholder.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          In addition to the NIST work we completed, we also worked heavily on a
          Phishing Dashboard, and on updating Expel's large Ember app to Ember
          Octane.
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
    const title = 'Case Study - Expel';
    const description =
      'Learn how Ship Shape helped Expel build a NIST dashboard with custom visualizations.';
    const url = 'https://shipshape.io/work/expel/';

    return generateMeta(title, description, url);
  }
};
</script>
