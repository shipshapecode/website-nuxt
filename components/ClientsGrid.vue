<template>
  <div class="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-3">
    <div>
      <a href="https://marianatek.com/" aria-label="Mariana Tek">
        <inline-svg
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/mariana-tek-full.svg"
        />
      </a>

      <p>
        We worked hand in hand with the Mariana Tek dev team to develop several
        required features for a major client release. This included an initial
        scan of the codebase, the addition of several ESLint rules from
        eslint-plugin-ember, and updates of various dependencies. We enforced
        best practices at every turn, and ensured the code looked very
        consistent, no matter who wrote it.
      </p>
    </div>

    <div>
      <a href="https://www.scoutforpets.com/" aria-label="Scout">
        <inline-svg
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/scout-white.svg"
        />
      </a>
      <p>
        We did several months of work with Scout, starting with updating to the
        latest versions of Ember and Ember CLI, adding Ember Suave, and adhering
        to the new set of ESLint rules. We worked extensively on the appointment
        scheduling aspects of the app, creating full screen overlays, using
        Ember Flatpickr, Ember Paper and Ember Power Select, to allow a customer
        or staff member to create or edit an appointment.
      </p>
    </div>

    <div>
      <a href="https://www.greenlight.guru/" aria-label="Greenlight Guru">
        <inline-svg
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/greenlight-guru.svg"
        />
      </a>
      <p>
        We first updated the greenlight.guru app to Ember 1.12, fixing
        deprecations as we went. After 1.12 was complete, we undertook the task
        of migrating a grunt based build to ember-cli. We finally updated the
        app to Ember 1.13 and fixed all the deprecations.
      </p>
    </div>

    <div>
      <a href="https://www.mentrs.com/" aria-label="Mentrs">
        <inline-svg class="h-8 mb-3 w-auto" src="/svgs/clients/mentrs.svg" />
      </a>

      <p>
        We worked on the Mentrs MVP from the ground up, starting with running
        'ember new', and adding all the addons, ESLint plugins, template
        lintings, and doing all the initial work required to create an Ember
        app, rooted in the latest Ember standards. Features we implemented
        included everything from login and sign up, to class creation, and
        Stripe integration for paying to enroll in classes.
      </p>
    </div>

    <div>
      <a href="https://anvyl.com/" aria-label="Anvyl">
        <inline-svg class="h-8 mb-3 w-auto" src="/svgs/clients/anvyl.svg" />
      </a>
      <p>
        We helped Anvyl create a new messaging feature to allow brands and
        suppliers to communicate directly within the Anvyl app. This required us
        to implement many of the features people are used to, from apps like
        Slack, such as threaded replies, editing messages inline, user avatars,
        and much more! This feature greatly simplifies things for Anvyl users
        because they no longer have to leave the app to communicate about an
        order.
      </p>
    </div>

    <div>
      <a href="https://cos.io/" aria-label="COS">
        <inline-svg class="h-8 mb-3 w-auto" src="/svgs/clients/cos.svg" />
      </a>
      <p>
        We helped The Center for Open Science develop some custom dashboards for
        institutions to get a better view into their organization's usership.
        These dashboards allowed admins to log in and see lists of the people
        using the system and visualize the traffic based on the department each
        user belonged to.
      </p>
    </div>

    <div>
      <a href="https://musicat.co/rabble" aria-label="Rabble">
        <inline-svg class="h-8 mb-3 w-auto" src="/svgs/clients/rabble.svg" />
      </a>
      <p>
        We helped Rabble with updating their MUSICat app from Ember 2.14 to 3.0
        and beyond. This effort included removing bower in favor of npm,
        migrating from ic-ajax to ember-ajax, enforcing consistent code quality
        with ESLint, and other various tweaks. We also served as Ember subject
        matter experts and helped mentor and level up the team's Ember
        knowledge.
      </p>
    </div>
  </div>
</template>
