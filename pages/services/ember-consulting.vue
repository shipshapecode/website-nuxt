<template>
  <div itemscope itemtype="http://schema.org/Service">
    <div class="waves white-waves sm:pb-20 lg:pb-8">
      <HeroBlock class="ember-consulting">
        <template #content>
          <div class="sm:px-16 lg:pr-0">
            <h1 itemprop="name" class="text-4xl leading-10">
              Build fast, reliable apps with expert Ember.js development,
              consulting, and training
            </h1>
            <div>
              <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
                Let's get started
              </nuxt-link>
            </div>
          </div>
        </template>
        <template #icon>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            src="/img/hero-images/ember-consulting.png"
          />
        </template>
      </HeroBlock>
    </div>
    <div class="bg-navy py-32 flex flex-wrap justify-center">
      <div class="section-content px-8 md:px-24">
        <h2 class="text-white text-4xl">All about Ember.js</h2>
        <div
          class="
            grid
            space-y-12
            pt-8
            pb-16
            lg:pt-0 lg:grid-cols-7 lg:gap-20 lg:space-y-0
          "
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
            For these reasons, we often recommend it for enterprise app
            development, in-depth apps and dashboards, responsive web
            applications, and other projects for large firms.
            <br />
            <br />
            If your team is working on an Ember.js app or considering a
            greenfield project where this framework could be a good fit, turn to
            our top-tier Ember experts for a full range of support, from
            consulting to development to team training.
          </p>
        </div>
        <!-- fix spacing between this and icons; second breakpoint - 2 & 2 for sm or md -->
        <h3 class="text-white text-xl mb-8 leading-snug md:mb-16">
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
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
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
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/chart.svg"
            />
            <p class="text-white">Scalable UI architecture</p>
          </div>

          <div
            class="bg-navy flex flex-col justify-items-center pt-12 lg:px-16"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/retainer.svg"
            />
            <p class="text-white">Simple updates</p>
          </div>

          <div
            class="bg-navy flex flex-col justify-items-center pt-12 lg:px-16"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/sail.svg"
            />
            <p class="text-white">Commitment to stability</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        grid
        gap-8-x
        px-8
        py-20
        md:px-24 md:pt-32
        lg:grid-col-3 lg:grid-row-3 lg:grid-flow-col
      "
    >
      <nuxt-img format="webp" src="/img/hero-images/mentoring.png" />
      <div class="row-span-2 place-self-center">
        <h2 class="text-navy text-3xl pt-8">
          We’ll never leave you high and dry
        </h2>
        <p>
          Ship Shape is committed to leaving every engineering team we work with
          better than we found it. Not only do we build robust, reliable
          software, but we also train your staff along the way to understand,
          maintain, and improve your product after our engagement ends.
        </p>
      </div>
    </div>
    <div class="md:mx-12">
      <SingleQuote :testimonial="testimonial" />
    </div>
    <div
      class="flex flex-col mx-8 gap-y-4 sm:m-12 lg:mx-20 lg:mb-20 lg:gap-x-8"
    >
      <h2 class="text-navy pt-4">We ❤️ the Ember.js Community</h2>
      <div class="grid lg:grid-cols-3 lg:gap-x-16 xl:gap-x-24">
        <div class="w-full">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-8"
              format="webp"
              height="272"
              src="/img/emberconf-2020.png"
              width="290"
              alt="EmberConf 2020 Ship Shape Sticker"
            />
          </div>
          <h3 class="text-2xl">EmberConf 2020</h3>
          <p class="h-auto lg:h-64 xl:h-48">
            At the virtual EmberConf 2020, we presented
            <a href="https://www.youtube.com/watch?v=Kw0V9HvMpI4"
              >Talking to Your Dog with Ember</a
            >
            with Ember using the Web Audio API to translate dog barks into
            something more meaningful.
          </p>
        </div>
        <div class="w-full h-full">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-12 max-h-xs lg:p-4"
              src="/svgs/emberconf/2019.svg"
            />
          </div>
          <h3 class="text-2xl">EmberConf 2019</h3>
          <p>
            Check out
            <a href="https://www.youtube.com/watch?v=u5onNDpt8ks"
              >Ember Data - It's Not Just for JSON API Anymore</a
            >, our BonusConf talk at EmberConf 2019, and learn about several
            approaches to using Ember Data with non-standard APIs.
          </p>
        </div>
        <div class="w-full">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-8"
              format="webp"
              src="/img/ember-nyc.png"
              width="185"
              alt="Ember.JS NYC Tomster"
            />
          </div>
          <h3 class="text-2xl">Ember.js NYC</h3>
          <p>
            The Ember.js NYC Meetup has hosted Ship Shape many times. Check out
            <a
              href="https://www.youtube.com/watch?v=ax6QI-WryH0&feature=youtu.be&t=4805"
              >this presentation</a
            >, an abridged version of our EmberConf 2018 performance workshop.
          </p>
        </div>
      </div>
    </div>
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
