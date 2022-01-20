<template>
  <div itemscope itemtype="http://schema.org/Service">
    <div class="waves white-waves">
      <HeroBlock class="nuxt-consulting">
        <template #content>
          <div class="md:pl-16">
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
            src="/img/hero-images/nuxt-consulting.png"
          />
        </template>
      </HeroBlock>
    </div>
    <div class="bg-navy py-32 flex flex-wrap justify-center">
      <div class="section-content px-8 md:px-24">
        <h2 class="text-white text-4xl">All about Nuxt.js</h2>
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
            Nuxt.js is an open-source framework used to build Vue.js web
            applications. It’s a performant system that makes creating universal
            apps easier because of its reduced routing complexixty, giving you
            SEO benefits right out of the box.
          </p>
          <p class="text-white lg:col-span-4 lg:content-center">
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
        <h3 class="text-white text-xl mb-8">
          Nuxt works well for apps big and small thanks to its:
        </h3>
        <div
          class="
            grid
            text-center
            divide-grey-light divide-y
            lg:grid-cols-3 lg:divide-x lg:divide-y-0
          "
        >
          <div
            class="
              bg-navy
              flex flex-col
              justify-items-center
              p-8
              lg:px-16 lg:pb-0
            "
          >
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
            />
            <p class="text-white">
              Modular architecture, which speeds up development
            </p>
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
              src="/svgs/icons/native-apps.svg"
            />
            <p class="text-white">
              Server-side rendered (SSR) to deliver HTML, rather than JavaScript
            </p>
          </div>

          <div
            class="bg-navy flex flex-col justify-items-center pt-12 lg:px-16"
          >
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
    <div
      class="
        grid
        gap-8-x
        p-8
        md:p-20
        lg:grid-col-3 lg:grid-row-3 lg:grid-flow-col
      "
    >
      <nuxt-img format="webp" src="/img/hero-images/mentoring.png" />
      <div class="row-span-2 place-self-center">
        <h2 class="text-navy text-3xl pt-4">
          Your first mate's in rough waters
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
      class="grid mx-8 place-self-center lg:grid-flow-col md:mx-20 lg:gap-x-8"
    >
      <nuxt-img
        class="col-span-2 lg:order-last"
        format="webp"
        src="/img/hero-images/ember-consulting.png"
      />
      <div>
        <h2 class="text-navy pt-4">We ❤️ the Nuxt.js Community</h2>
        <h3 class="text-2xl">Proud Nuxt.js partners</h3>
        <p>
          Ship Shape proudly
          <a href="https://nuxtjs.org/">sponsors Nuxt.js</a> to support its
          talented team and dynamic framework. Our partnership is one of the
          main reasons we’re always ready to create Nuxt.js apps: because we
          stay up-to-date with the Nuxt team and give back to the community.
        </p>
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
    const title = 'Nuxt.js Software Consultants & Developers';
    const description =
      'As a proven leader in Nuxt development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/nuxt-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
