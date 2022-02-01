<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Enigma</h1>

        <p>
          Enigma is a platform designed to help cybersecurity teams make faster
          hiring decisions and find stronger, more diverse talent. Through this
          web application, employers can create and assign technical assessments
          to candidates to ascertain their level of competency with key
          cybersecurity concepts and industry best practices.
        </p>

        <p>
          Once a candidate has completed an assessment through the Enigma
          platform, employers can review their responses and overall performance
          and then use these findings to better evaluate the candidate’s
          application.
        </p>
      </div>

      <div
        class="
          bg-enigma-blue
          flex flex-wrap
          h-64
          md:h-140
          justify-center
          items-center
        "
      >
        <div class="bg-enigma-blue w-1/2 lg:w-1/3">
          <inline-svg
            class="fill-white h-auto w-full"
            src="/svgs/clients/enigma.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h2>Challenge</h2>

        <p>
          The Enigma assessment application was in a very raw proof of concept
          state when Ship Shape was brought in to act as the development team
          that would create a production-ready product. Enigma already had
          customers signed up and ready to start utilizing the application for
          their recruiting needs, but still had a substantial roadmap of
          features in need of implementation. Ship Shape’s challenge was to
          implement essential features, including the full assessment workflow
          and corresponding administrative tasks, in order to launch Enigma. We
          continued to help build out the application based on customers’
          feedback about their additional needs.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="The Enigma login page"
            class="flex"
            format="webp"
            src="/img/work/enigma/enigma-login.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h2>Solution</h2>

        <h3>Next.js</h3>

        <p>
          The development team made use of
          <a href="/https://nextjs.org/">Next.js</a> to prioritize quick loading
          times on the client side of this application. The server-side
          rendering capabilities of Next.js allow the Enigma application to
          retrieve web pages and any corresponding data in one go, eliminating
          the need for multiple network requests and preventing subsequent
          delays in data population.
        </p>

        <h3>Shepherd Tour</h3>

        <p>
          The Ship Shape team also had the opportunity to integrate one of our
          own open source projects,
          <a href="https://shepherdjs.dev/docs/">Shepherd</a>, into the Enigma
          platform. The Shepherd library provides a way to guide users through a
          tour of a web application, highlighting the key features users should
          familiarize themselves with, in order to use the app at its full
          potential.
        </p>
      </div>

      <div class="bg-enigma-blue flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="An implementation of a Shepherd tour for the Enigma hirer dashboard"
            class="flex"
            format="webp"
            src="/img/work/enigma/enigma-hirer-assessment-tour.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h3 class="pt-6">Cypress Testing</h3>

        <p>
          The development team also incorporated
          <a href="https://www.cypress.io/">Cypress</a>, an integration testing
          framework, into the Enigma application. This end-to-end testing
          technology allowed the development team to deliver features to users
          with confidence that critical tasks aren’t disrupted by bugs.
        </p>

        <h3>Key Application Features</h3>

        <p>
          In order to successfully launch this unique cybersecurity assessment
          tool, the Enigma and Ship Shape development teams focused on
          implementing the following key features and workflows:
        </p>

        <ul class="ml-16">
          <li class="list-disc">
            Authentication processes that allow candidates and employers to
            securely access their respective accounts
          </li>
          <li class="list-disc">
            A candidate’s ability to work through assessments assigned by
            potential employers
          </li>
          <li class="list-disc">
            An employer’s ability to create, view, assign, archive, and delete
            assessments and candidate assessment attempts
          </li>
          <li class="list-disc">
            An optional package that would allow employers to assign a
            supplemental personality evaluation that would accompany a
            candidate's overall job application
          </li>
        </ul>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="A detailed overview of a cybersecurity assessment"
            class="flex"
            format="webp"
            src="/img/work/enigma/enigma-hirer-assessment-detail.png"
          />
        </div>
      </div>

      <div class="p-4 lg:pb-0 lg:p-12">
        <h2>Outcome</h2>
      </div>

      <div class="bg-enigma-blue flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="A detailed overview of all candidate assessment results"
            class="flex"
            format="webp"
            src="/img/work/enigma/enigma-hirer-results.png"
          />
        </div>
      </div>
      <div class="p-4 lg:p-12">
        <p class="pt-6">
          Ship Shape’s main priority was to successfully build and launch a
          feature rich application according to the client’s schedule, and we’re
          happy to report that we met this target! The Ship Shape crew had a
          great experience working with the Enigma team to get a
          production-ready product off the ground. The client also had this to
          say about their experience:
        </p>
      </div>

      <SingleQuote :testimonial="testimonial" />

      <BottomLinks
        next-link="/work/netflix/"
        next-link-text="Netflix"
        previous-link="/work/acquia/"
        previous-link-text="Acquia"
      />
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import { testimonial } from '~/pages/services/next-consulting';

export default {
  speedkitComponents: {
    BottomLinks: () => import('@/components/BottomLinks'),
    SingleQuote: () => import('@/components/SingleQuote')
  },
  data() {
    return { testimonial };
  },
  head() {
    const title = 'Netflix Ember.js Finance Dashboard';
    const description =
      "Netflix Finance had outdated, disjointed Ember.js apps. See how Ship Shape's enterprise app development experts increased efficiency & data granularity.";
    const url = 'https://shipshape.io/work/enigma/';

    return generateMeta(title, description, url);
  }
};
</script>
