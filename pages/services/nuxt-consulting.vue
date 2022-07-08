<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="nuxt-consulting waves nuxt-waves !pb-48 2xl:!pb-56"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Create a Nuxt.js app that's universal — without all the hassle
        </h1>

        <div class="flex justify-center mt-3 w-full lg:justify-start lg:mt-8">
          <NuxtLink class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let's get started
          </NuxtLink>
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

    <AllAboutSpecialty :benefits="specialtyBenefits" :flip-paragraphs="true">
      <template #h2>All about Nuxt.js</template>
      <template #h3
        >Nuxt works well for apps big and small thanks to its:</template
      >
      <template #unboxed-text>
        <p>
          At Ship Shape, we love Nuxt.js because it’s still an opinionated
          framework (though not quite as opinionated as Ember.js), and it has
          features that strip out unused code to make your app fast and
          lightweight. You’ll enjoy its approachable syntax, easy-to-read read
          templates, and more.
        </p>

        <p>
          Whether you're building a brand new web app or elevating an existing
          experience with the latest best practices, our first-class engineers
          can refine or create a Nuxt.js app while training your team in the
          process.
        </p>
      </template>
      <template #boxed-text>
        Nuxt.js is an open-source framework used to build Vue.js web
        applications. It’s a performant system that makes creating universal
        apps easier because of its reduced routing complexity, giving you SEO
        benefits right out of the box.
      </template>
    </AllAboutSpecialty>

    <TwoColumnSection
      class-string="mt-20"
      header="Your first mate's in rough waters"
      :image="marketing"
      :is-flipped="true"
    >
      <template #content>
        Ship Shape is committed to leaving every engineering team we work with
        better than we found it. Not only do we build robust, reliable software,
        but we also train your staff along the way to understand, maintain, and
        improve your product after our engagement ends.
      </template>
    </TwoColumnSection>

    <SingleQuote :testimonial="testimonial" />

    <TwoColumnSection :image="community" header="We ❤️ the Nuxt.js Community">
      <template #content>
        <h3 class="text-2xl" data-aos="fade-up">Proud Nuxt.js partners</h3>
        <p data-aos="fade-up">
          Ship Shape proudly
          <a href="https://nuxtjs.org/partners/ship-shape">sponsors Nuxt.js</a>
          to support its talented team and dynamic framework. Our partnership is
          one of the main reasons we’re always ready to create Nuxt.js apps:
          because we stay up-to-date with the Nuxt team and give back to the
          community.
        </p>
      </template>
    </TwoColumnSection>

    <WaveMoreLinks />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import { sephoraTestimonial as testimonial } from '~/content/testimonials/index.js';

const community = {
  src: '/img/hero-images/ember-consulting.png',
  height: '1040',
  width: '1312'
};

const marketing = {
  src: '/img/hero-images/mentoring.png',
  height: '792',
  width: '1312'
};

const specialtyBenefits = [
  {
    imgSrc: '/svgs/icons/modular.svg',
    description: 'Modular architecture, which speeds up development'
  },
  {
    imgSrc: '/svgs/icons/native-apps.svg',
    description:
      'Server-side rendered (SSR) to deliver HTML, rather than JavaScript'
  },
  {
    imgSrc: '/svgs/icons/static.svg',
    description:
      'Static Site Generation to net SEO benefits without needing a server'
  }
];

export default {
  data() {
    return { community, marketing, testimonial, specialtyBenefits };
  },
  head() {
    const title = 'Nuxt.js Software Consultants & Developers';
    const description =
      "Working to improve or create a Nuxt app? Ship Shape's first-class engineers build fast, lightweight Nuxt.js applications while training your team too.";
    const url = 'https://shipshape.io/services/nuxt-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
