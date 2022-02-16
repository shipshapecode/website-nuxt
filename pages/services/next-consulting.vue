<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="next-consulting waves next-waves !pb-20 2xl:!pb-48"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Boost performance and easily make the leap from React to Next.js
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="1000"
          src="/img/hero-images/next-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
    />

    <div
      class="section flex flex-wrap justify-center !pt-40"
      data-aos="fade-down"
    >
      <div class="section-content">
        <h2 class="pb-8">Next.js in action</h2>
        <div
          class="
            bg-blue-light
            rounded-b-lg
            lg:grid lg:grid-cols-3 lg:rounded-l-lg
          "
          data-aos="flip-down"
        >
          <nuxt-img
            class="
              rounded-t-lg
              mb-4
              lg:order-last
              lg:mb-0
              lg:rounded-t-none
              lg:rounded-r-lg
              lg:col-span-2
            "
            src="/img/work/enigma/enigma-hirer-dashboard.png"
            alt="Enigma hirer dashboard with a pop-up notification introducing the page"
          />
          <div class="p-8 lg:p-12">
            <inline-svg
              class="h-8 max-w-full mb-8 self-start w-auto logo-red"
              src="/svgs/clients/enigma.svg"
            />
            <p class="mb-16">
              Enigma is a platform designed to help cybersecurity teams make
              faster hiring decisions and find...
            </p>
            <nuxt-link class="learn-more" to="/work/enigma/">
              Dive deeper
              <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="section flex flex-wrap justify-center !pt-40"
      data-aos="fade-down"
    >
      <div
        class="
          section-content
          gap-20
          grid grid-cols-1
          items-center
          lg:gap-32 lg:grid-cols-2
        "
      >
        <div>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="792"
            src="/img/hero-images/mentoring.png"
            width="1312"
          />
        </div>
        <div>
          <h2>We’ll never leave you high and dry</h2>
          <p>
            Ship Shape is committed to leaving every engineering team we work
            with better than we found it. Not only do we build robust, reliable
            software, but we also train your staff along the way to understand,
            maintain, and improve your product after our engagement ends.
          </p>
        </div>
      </div>
    </div>

    <SingleQuote :testimonial="testimonial" />

    <div class="section flex flex-wrap justify-center">
      <div
        class="
          section-content
          gap-20
          grid grid-cols-1
          items-center
          lg:gap-32 lg:grid-cols-2
        "
      >
        <div class="lg:order-last" data-aos="fade-up">
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="1040"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
          />
        </div>
        <div>
          <h2 data-aos="fade-left">We ❤️ the Next.js Community</h2>
          <p data-aos="fade">
            We’re a team of makers who are passionate about improving software
            products and the people who create them.
          </p>
        </div>
      </div>
    </div>

    <WaveMoreLinks />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import {
  head,
  specialtyDetails,
  testimonial
} from '~/content/specialties/next.js';

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { head, specialtyDetails, testimonial };
  },
  head() {
    const { title, description, url } = head;
    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.logo-red path {
  fill: #ed6a5e;
}
</style>
