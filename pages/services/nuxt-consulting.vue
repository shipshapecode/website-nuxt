<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="nuxt-consulting waves next-waves">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Create a Nuxt.js app that's universal — without all the hassle
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
          height="834"
          src="/img/hero-images/nuxt-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-white text-3xl">All about Nuxt.js</h2>
        <div
          class="
            grid
            space-y-12
            pt-10
            pb-32
            lg:pt-4 lg:grid-cols-7 lg:gap-20 lg:space-y-0
          "
        >
          <p
            class="
              grid
              mb-0
              p-6
              bg-blue-light
              text-navy
              rounded
              place-self-center
              sm:p-8
              lg:col-span-3 lg:p-12
            "
          >
            Nuxt.js is an open-source framework used to build Vue.js web
            applications. It’s a performant system that makes creating universal
            apps easier because of its reduced routing complexixty, giving you
            SEO benefits right out of the box.
          </p>
          <p class="text-white lg:col-span-4 lg:content-center lg:p-8">
            At Ship Shape, we love Nuxt.js because it’s still an opinionated
            framework (though not quite as opinionated as Ember.js), and it has
            features that strip out unused code to make your app fast and
            lightweight. You’ll enjoy its approachable syntax, easy-to-read read
            templates, and more.
            <br />
            <br />
            Whether you're building a brand new web app or elevating an existing
            experience with the latest best practices, our first-class engineers
            can refine or create a Nuxt.js app while training your team in the
            process.
          </p>
        </div>

        <h5 class="text-white" data-aos="fade">
          Nuxt works well for apps big and small thanks to its:
        </h5>

        <div
          class="
            divide-grey-light divide-y
            grid grid-cols-1
            my-20
            text-white
            lg:divide-x lg:divide-y-0 lg:grid-cols-3
          "
        >
          <div class="flex flex-col items-center px-16" data-aos="flip-down">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-64">
              Modular architecture, which speeds up development
            </p>
          </div>

          <div class="flex flex-col items-center px-16" data-aos="flip-down">
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/native-apps.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-64">
              Server-side rendered (SSR) to deliver HTML, rather than JavaScript
            </p>
          </div>

          <div class="flex flex-col items-center px-16" data-aos="flip-down">
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/static.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-64">
              Static Site Generation to net SEO benefits without needing a
              server
            </p>
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
            src="/img/hero-images/mentoring.png"
            height="772"
            width="1312"
          />
        </div>
        <div>
          <h3>Your first mate's in rough waters</h3>
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
            src="/img/hero-images/ember-consulting.png"
            height="1034"
            width="1312"
          />
        </div>
        <div>
          <h3 data-aos="fade-left">We ❤️ the Nuxt.js Community</h3>
          <h4 class="text-2xl">Proud Nuxt.js partners</h4>
          <p>
            Ship Shape proudly
            <a href="https://nuxtjs.org/">sponsors Nuxt.js</a> to support its
            talented team and dynamic framework. Our partnership is one of the
            main reasons we’re always ready to create Nuxt.js apps: because we
            stay up-to-date with the Nuxt team and give back to the community.
          </p>
        </div>
      </div>
    </div>

    <WaveMoreLinks />
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
    const title = 'Nuxt.js Software Consultants & Developers';
    const description =
      'As a proven leader in Nuxt development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/nuxt-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
