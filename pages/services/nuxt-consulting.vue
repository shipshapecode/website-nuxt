<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="nuxt-consulting">
      <template #content>
        <div class="pl-16">
          <h1 itemprop="name" class="text-4xl leading-10">
            Create a Nuxt.js app that's universal — without all the hassle
          </h1>
          <div>
            <nuxt-link class="btn btn-red" to="/contact/">
              Let's get started
            </nuxt-link>
          </div>
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
    <!-- blue waves style -->
    <div class="bg-navy section flex flex-wrap justify-center">
      <div class="section-content px-16">
        <h2 class="text-white w-full text-3xl">All about Nuxt.js</h2>
        <div class="grid grid-cols-7 gap-20 pt-8 pb-32">
          <div class="grid bg-blue-light rounded col-span-3 text-navy">
            <p class="place-self-center w-4/5 mb-0">
              Nuxt.js is an open-source framework used to build Vue.js web
              applications. It’s a performant system that makes creating
              universal apps easier because of its reduced routing complexixty,
              giving you SEO benefits right out of the box.
            </p>
          </div>
          <div class="col-span-4">
            <p class="text-white mb-0">
              At Ship Shape, we love Nuxt.js because it’s still an opinionated
              framework (though not quite as opinionated as Ember.js), and it
              has features that strip out unused code to make your app fast and
              lightweight. You’ll enjoy its approachable syntax, easy-to-read
              read templates, and more.
              <br />
              <br />
              Whether you're building a brand new web app or elevating an
              existing experience with the latest best practices, our
              first-class engineers can refine or create a Nuxt.js app while
              training your team in the process.
            </p>
          </div>
        </div>
        <h3 class="text-white text-xl">
          Nuxt works well for apps big and small thanks to its:
        </h3>
        <div
          class="grid grid-cols-3 divide-grey-light divide-x text-center my-20"
        >
          <div class="bg-navy flex flex-col justify-items-center px-16">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
            />
            <p class="text-white">
              Modular architecture, which speeds up development
            </p>
          </div>

          <div class="bg-navy flex flex-col justify-items-center px-16">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/native-apps.svg"
            />
            <p class="text-white">
              Server-side rendered (SSR) to deliver HTML, rather than JavaScript
            </p>
          </div>

          <div class="bg-navy flex flex-col justify-items-center px-16">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/static.svg"
            />
            <p class="text-white">
              Static Site Generation to net SEO benefits without needing a
              server
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-20 grid grid-col-3 grid-row-3 grid-flow-col gap-x-8">
      <nuxt-img format="webp" src="/img/hero-images/mentoring.png" />
      <div class="section-content row-span-2 place-self-center">
        <h2 class="text-navy text-3xl">Your first mate's in rough waters</h2>
        <p>
          Ship Shape is committed to leaving every engineering team we work with
          better than we found it. Not only do we build robust, reliable
          software, but we also train your staff along the way to understand,
          maintain, and improve your product after our engagement ends.
        </p>
      </div>
    </div>
    <div class="mx-12">
      <SingleQuote :testimonial="testimonial" />
    </div>
    <div class="bg-white pb-20 mx-20 grid grid-col-3 grid-flow-col gap-x-8">
      <div class="section-content row-span-2 place-self-center">
        <h2 class="text-navy text-3xl">We ❤️ the Nuxt.js Community</h2>
        <h3 class="text-xl">Proud Nuxt.js partners</h3>
        <p>
          Ship Shape proudly
          <a href="https://nuxtjs.org/">sponsors Nuxt.js</a> to support its
          talented team and dynamic framework. Our partnership is one of the
          main reasons we’re always ready to create Nuxt.js apps: because we
          stay up-to-date with the Nuxt team and give back to the community.
        </p>
      </div>
      <nuxt-img
        class="col-span-2"
        format="webp"
        src="/img/hero-images/ember-consulting.png"
      />
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
