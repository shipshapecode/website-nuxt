<template>
  <div class="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-3">
    <div>
      <a href="https://marianatek.com/" aria-label="Mariana Tek">
        <nuxt-img
          alt="Mariana Tek logo"
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/mariana-tek-full.svg"
        />
      </a>

      <p>
        After building a proof of concept using Ember.js, this fitness business
        management app had gradually strayed from best practices. Their software
        developers brought in our team to get them back on track. We worked side
        by side to not only apply consistent, up-to-date Ember coding practices
        (e.g., adding several ESLint rules from eslint-plugin-ember, updating
        various dependencies, etc.), but also realign the team and get everyone
        on the same page.
      </p>
    </div>

    <div>
      <a href="https://www.scoutforpets.com/" aria-label="Scout">
        <nuxt-img
          alt="Scout logo"
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/scout-white.svg"
        />
      </a>
      <p>
        Our partnership with the enterprise app development team from Scout
        focused on upgrading their app for dog walkers and enhancing its
        scheduling features. Our first order of business was updating the app to
        the latest versions of Ember and Ember CLI, adding Ember Suave, and
        adhering to the new set of ESLint rules. Then, we worked extensively on
        the appointment scheduling experience using full-screen overlays, Ember
        Flatpickr, Ember Paper, and Ember Power Select to make creating and
        editing appointments easier.
      </p>
    </div>

    <div>
      <a href="https://anvyl.com/" aria-label="Anvyl">
        <inline-svg class="h-8 mb-3 w-auto" src="/svgs/clients/anvyl.svg" />
      </a>
      <p>
        Our team collaborated with the engineers behind Anvyl’s supplier
        relationship management software to create a new messaging feature that
        allows brands and suppliers to communicate directly within the Anvyl
        app, rather than via email. By integrating many common messaging
        features, such as threaded replies, in-line editing, avatars, and more,
        we simplified the experience for both the customer and the supplier.
      </p>
    </div>

    <div>
      <a href="https://cos.io/" aria-label="COS">
        <nuxt-img
          alt="Center for Open Science logo"
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/cos.svg"
        />
      </a>
      <p>
        As a non-profit, it’s critical for the Center for Open Science (COS) to
        understand and communicate how funding is used. We developed custom
        Ember.js dashboards for COS that provide visibility into how people are
        using its system.
      </p>
    </div>

    <div>
      <a href="https://musicat.co/rabble" aria-label="Rabble">
        <nuxt-img
          alt="Rabble logo"
          class="h-8 mb-3 w-auto"
          src="/svgs/clients/rabble.svg"
        />
      </a>
      <p>
        We partnered with the Rabble team to bring their open source MUSICat
        platform up to date. Our work included removing bower in favor of npm,
        migrating from ic-ajax to ember-ajax, enforcing consistent code quality
        with ESLint, and other improvements. Our software developers also served
        as Ember subject matter experts who helped mentor the Rabble team and
        grow their Ember knowledge.
      </p>
    </div>
  </div>
</template>
