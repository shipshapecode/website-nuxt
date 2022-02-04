<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="ember-consulting waves white-waves">
      <template #content>
        <h1 itemprop="name" class="text-5xl leading-tight">
          Build fast, reliable apps with expert Ember.js development,
          consulting, and training
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let's get started
          </nuxt-link>
        </div>
      </template>
      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          src="/img/hero-images/ember-consulting.png"
          height="1030"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-white text-4xl pt-20" data-aos="fade-up">
          All about Ember.js
        </h2>
        <div
          class="
            grid
            space-y-12
            pt-10
            pb-32
            lg:pt-4 lg:grid-cols-7 lg:gap-20 lg:space-y-0
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p
            class="
              grid
              mb-0
              p-4
              bg-blue-light
              text-navy
              rounded
              place-self-center
              sm:p-8
              lg:col-span-3
            "
          >
            Ember.js is an open-source JavaScript web framework. We love its
            strong opinions, which help engineers work faster and keep their
            work organized.
          </p>
          <p class="text-white lg:col-span-4 lg:content-center">
            For these reasons, we often recommend it for
            <nuxt-link to="/work/expel">enterprise app development</nuxt-link>,
            in-depth apps and dashboards, responsive web applications, and other
            projects for large firms.
            <br />
            <br />
            If your team is working on an Ember.js app or considering a
            greenfield project where this framework could be a good fit, turn to
            our top-tier Ember experts for a full range of support, from
            consulting to development to team training.
          </p>
        </div>
        <h3 class="text-white text-2xl" data-aos="fade">
          Ember is great for large companies because of its:
        </h3>
        <div
          class="
            grid
            text-center
            divide-grey-light divide-y-2
            lg:grid-cols-4 lg:divide-x-2 lg:divide-y-0
          "
        >
          <div
            class="
              bg-navy
              flex flex-col
              justify-items-center
              py-8
              lg:px-16 lg:pb-0
            "
            data-aos="flip-down"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
              alt=""
            />
            <p class="text-white">Clear Organization</p>
          </div>

          <div
            class="
              bg-navy
              flex flex-col
              justify-items-center
              py-12
              lg:px-16 lg:pb-0
            "
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/chart.svg"
              alt=""
            />
            <p class="text-white">Scalable UI architecture</p>
          </div>

          <div
            class="bg-navy flex flex-col justify-items-center pt-12 lg:px-16"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/retainer.svg"
              alt=""
            />
            <p class="text-white">Simple updates</p>
          </div>

          <div
            class="bg-navy flex flex-col justify-items-center pt-12 lg:px-16"
            data-aos="flip-down"
            data-aos-delay="600"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/sail.svg"
              alt=""
            />
            <p class="text-white">Commitment to stability</p>
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
            height="772"
            src="/img/hero-images/mentoring.png"
            width="1312"
            alt=""
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

    <CommunityInvolvement />

    <WaveMoreLinks class="md:px-20" />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

const testimonial = {
  name: 'Namey Nameson',
  title: 'Founder, CEO at Client',
  imgSrc: 'roger',
  svgSrc: '/svgs/clients/netflix.svg',
  quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
};

export default {
  speedkitComponents: {
    CommunityInvolvement: () => import('@/components/CommunityInvolvement'),
    HeroBlock: () => import('@/components/HeroBlock'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },

  data() {
    return { testimonial };
  },

  head() {
    const title = 'Ember.js Enterprise App Development';
    const description =
      "Learn how Ship Shape's top-tier enterprise app development experts can help your team build fast, reliable Ember.js applications.";
    const url = 'https://shipshape.io/services/ember-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.ember-image {
  height: 250px;
  width: auto;
}
</style>
