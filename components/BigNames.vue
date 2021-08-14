<template>
  <div class="bg-white flex flex-wrap justify-center py-16">
    <div
      class="
        section-content
        divide-blue-light divide-y-2
        p-8
        pb-32
        relative
        lg:pt-32
      "
    >
      <div class="flex flex-wrap justify-between w-full lg:flex-nowrap">
        <div class="flex-grow max-w-4xl w-full">
          <h3 class="leading-tight text-3xl lg:text-4xl">
            Trusted software consultants for today’s big names and tomorrow’s
            leaders
          </h3>

          <p>
            Companies around the world hire Ship Shape’s talented engineers to
            solve their toughest software and app development challenges.
          </p>
        </div>
        <div
          class="
            absolute
            bottom-0
            flex
            justify-center
            self-start
            w-full
            lg:bottom-auto lg:relative lg:justify-end lg:w-auto
          "
        >
          <nuxt-link
            to="/contact/"
            class="btn btn-red mb-10 mr-16 w-full lg:mr-0 lg:w-auto"
          >
            Dive deeper
          </nuxt-link>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-x-20 gap-y-10 py-12 w-full lg:grid-cols-6"
      >
        <a
          class="text-center"
          href="https://www.scoutforpets.com/"
          aria-label="Scout"
        >
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/scout.svg"
          />
        </a>
        <nuxt-link class="text-center" to="/work/expel" aria-label="Expel">
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/expel.svg"
          />
        </nuxt-link>
        <nuxt-link class="text-center" to="/work/netflix/" aria-label="Netflix">
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/netflix.svg"
          />
        </nuxt-link>
        <a
          class="text-center"
          href="https://www.sephora.sg/"
          aria-label="Sephora"
        >
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/sephora.svg"
          />
        </a>
        <a
          class="text-center"
          href="https://www.whitepages.com/"
          aria-label="Whitepages"
        >
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/whitepages.svg"
          />
        </a>
        <a
          class="text-center"
          href="https://marianatek.com/"
          aria-label="Mariana Tek"
        >
          <inline-svg
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/mariana-tek-full.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>
