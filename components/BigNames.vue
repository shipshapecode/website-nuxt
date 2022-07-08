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
          <NuxtLink
            to="/contact/"
            class="btn btn-red mr-16 w-full lg:mb-10 lg:mr-0 lg:w-auto"
          >
            Dive deeper
          </NuxtLink>
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
            alt="Scout logo"
            class="h-full inline w-full max-w-xxs"
            height="44"
            loading="lazy"
            src="/svgs/clients/scout.svg"
            width="138"
          />
        </a>
        <NuxtLink class="text-center" to="/work/expel" aria-label="Expel">
          <nuxt-img
            alt="Expel logo"
            class="h-full inline w-full max-w-xxs"
            height="88"
            loading="lazy"
            src="/svgs/clients/expel.svg"
            width="275"
          />
        </NuxtLink>
        <NuxtLink class="text-center" to="/work/netflix/" aria-label="Netflix">
          <nuxt-img
            alt="Netflix logo"
            class="h-full inline w-full max-w-xxs"
            height="37"
            loading="lazy"
            src="/svgs/clients/netflix.svg"
            width="136"
          />
        </NuxtLink>
        <a
          class="text-center"
          href="https://www.sephora.sg/"
          aria-label="Sephora"
        >
          <nuxt-img
            alt="Sephora logo"
            class="h-full inline w-full max-w-xxs"
            height="39"
            loading="lazy"
            src="/svgs/clients/sephora.svg"
            width="300"
          />
        </a>
        <a
          class="text-center"
          href="https://www.whitepages.com/"
          aria-label="Whitepages"
        >
          <nuxt-img
            alt="Whitepages logo"
            class="h-full inline w-full max-w-xxs"
            height="32"
            loading="lazy"
            src="/svgs/clients/whitepages.svg"
            width="122"
          />
        </a>
        <a
          class="text-center"
          href="https://marianatek.com/"
          aria-label="Mariana Tek"
        >
          <nuxt-img
            alt="Mariana Tek logo"
            class="h-full inline w-full max-w-xxs"
            height="42"
            loading="lazy"
            src="/svgs/clients/mariana-tek-full.svg"
            width="225"
          />
        </a>
      </div>
    </div>
  </div>
</template>
