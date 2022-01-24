<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Enigma</h1>

        <p>
          Enigma is a platform designed to connect cybersecurity professionals
          and potential employers during the interviewing process. Through this
          web application, employers can create and assign technical assessments
          to candidates to ascertain their level of competency with key
          cybersecurity concepts and industry best practices. Once a candidate
          has completed an assessment through the Enigma platform, employers can
          review their responses and overall performance and then use these
          findings to better evaluate the candidate’s overall application.
        </p>
      </div>

      <div class="p-4 lg:p-12">
        <h2>Challenge</h2>

        <p>
          The Enigma assessment application was in a very raw proof of concept
          state when Ship Shape was brought in to act as the development team
          that would create a production-ready product. Enigma already had
          customers signed up and ready to start utilizing the application for
          their recruiting needs, but still had a substantial roadmap of
          features in need of implementation, including the full assessment
          workflow and administration-related tasks. Ship Shape’s challenge was
          to implement the crucial features necessary to launch Enigma and meet
          customers’ various requests.
        </p>

        <h2>Solution</h2>

        <h3>Next.js</h3>

        <p>
          The development team made use of
          <a href="/https://nextjs.org/">Next.js</a> to prioritize quick loading
          times on the client side of this application. The server-side
          rendering capabilities of Next.js allows the Enigma application to
          retrieve web pages and any corresponding data in one go, eliminating
          the need for multiple network requests and subsequent delays in data
          population.
        </p>

        <h3>Shepherd Tour</h3>

        <p>
          The Ship Shape team also had the opportunity to integrate one of our
          own open-source projects,
          <a href="https://shepherdjs.dev/docs/">Shepherd</a>, into the Enigma
          platform. The Shepherd library offers a way to guide Enigma users
          through a tour of the application, highlighting the key features users
          should familiarize themselves with in order to use the app at its full
          potential.
        </p>

        <h3>Cypress Testing</h3>

        <p>
          The development team also incorporated
          <a href="https://www.cypress.io/">Cypress</a>, an integration testing
          framework, into the Enigma application. This end-to-end testing
          technology allowed the development team to deliver features to users
          with confidence that critical tasks aren’t disrupted by bugs.
        </p>

        <h3>Key Application Features</h3>

        <p>
          In order to successfully launch this application, the Enigma and Ship
          Shape development teams focused on implementing the key features that
          are central to making Enigma the unique web application that it is.
          These features included the following crucial workflows:
        </p>

        <ul class="ml-16">
          <li class="list-disc">
            Authentication processes that allow candidates and employers to
            access their respective accounts
          </li>
          <li class="list-disc">
            A candidate’s ability to work through various assessments assigned
            by potential employers
          </li>
          <li class="list-disc">
            An employer’s ability to create, view, assign, archive, and delete
            assessments and candidate assessment attempts
          </li>
          <li class="list-disc">
            An optional package that would allow employers to assign, and
            candidates to take, a supplemental personality evaluation that would
            accompany their overall job application
          </li>
        </ul>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Ship Shape’s main priority was to successfully build and launch a
          feature rich application, according to the client’s schedule, and
          we’re happy to report that we met this target. The Ship Shape crew had
          a great experience working with the Enigma team to get a
          production-ready product off the ground. The client also had this to
          say about their experience:
        </p>
        <p>
          “I loved working with Ship Shape. They helped our small team build a
          product from the ground up and were strong partners every step of the
          way. Their domain expertise in Next.js and React helped lay the
          foundation for a scalable codebase, and they were great at ensuring we
          adhered to engineering best practices. Every member of the team was a
          pleasure to work with and (best of all) we ended up launching our MVP
          on schedule!”
        </p>
        <p>-Harley Sugarman Founder, CEO at Enigma</p>
      </div>

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

export default {
  speedkitComponents: {
    BottomLinks: () => import('@/components/BottomLinks')
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
