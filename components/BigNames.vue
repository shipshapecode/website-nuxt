<template>
  <div class="bg-white flex flex-wrap justify-center pb-8 pt-16">
    <div
      class="section-content divide-[#D8E3E8] divide-y p-8 relative lg:pt-40"
      data-aos="fade"
    >
      <div class="flex flex-wrap justify-between w-full lg:flex-nowrap">
        <div class="flex-grow max-w-4xl w-full">
          <h3 class="leading-tight text-3xl lg:text-4xl">
            Trusted software consultants for today’s big names and tomorrow’s
            leaders
          </h3>

          <p class="pb-6">
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
            -mb-8
            self-start
            w-full
            lg:bottom-auto lg:mb-0 lg:relative lg:justify-end lg:w-auto
          "
        >
          <nuxt-link
            to="/contact/"
            class="btn btn-red mr-16 w-full lg:mb-10 lg:mr-0 lg:w-auto"
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
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/scout.svg"
          />
        </a>
        <nuxt-link class="text-center" to="/work/expel" aria-label="Expel">
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/expel.svg"
          />
        </nuxt-link>
        <nuxt-link class="text-center" to="/work/netflix/" aria-label="Netflix">
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/netflix.svg"
          />
        </nuxt-link>
        <a
          class="text-center"
          href="https://www.sephora.sg/"
          aria-label="Sephora"
        >
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/sephora.svg"
          />
        </a>
        <a
          class="text-center"
          href="https://www.whitepages.com/"
          aria-label="Whitepages"
        >
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/whitepages.svg"
          />
        </a>
        <a
          class="text-center"
          href="https://marianatek.com/"
          aria-label="Mariana Tek"
        >
          <nuxt-img
            class="h-full inline w-full max-w-xxs"
            src="/svgs/clients/mariana-tek-full.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>
