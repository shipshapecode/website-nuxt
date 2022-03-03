<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="next-consulting waves next-waves !pb-20 2xl:!pb-48"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Boost performance and easily make the leap from React to Next.js
        </h1>

        <div class="flex justify-center mt-3 w-full lg:justify-start lg:mt-8">
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
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty :benefits="specialtyBenefits">
      <template #h2>All about Next.js</template>
      <template #h3>Some of our favorite Next.js features include:</template>
      <template #unboxed-text>
        <p>
          Whether you’re dipping your toes into the app development waters and
          wondering, “What is Next.js?” or you already know the ropes and are
          exploring this open-source React framework, you’ve come to the right
          place.
        </p>

        <p>
          At Ship Shape, our veteran engineers recommend Next.js because it’s
          one of the most performant frameworks. With server-side rendering
          (SSR) and routing, TypeScript support, smart bundling, route
          pre-fetching, and more, it’s a great choice for production-ready web
          apps.
        </p>
      </template>
      <template #boxed-text>
        Teams who have worked in generic React apps can easily make the leap
        into Next.js. If you’re wondering “What is Next.js, and can my team
        transition?” Ship Shape’s experienced developers not only consult and
        develop in Next.js, but also train and mentor teams to maintain and
        improve their code over time.
      </template>
    </AllAboutSpecialty>

    <SpecialtyInAction specialty="Next.js" :case-studies="caseStudies" />

    <TwoColumnSection
      class-string="mt-20"
      header="We’ll never leave you high and dry"
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

    <TwoColumnSection header="We ❤️ the Next.js Community" :image="community">
      <template #content>
        We’re a team of makers who are passionate about improving software
        products and the people who create them.
      </template>
    </TwoColumnSection>

    <WaveMoreLinks />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import { enigmaTestimonial as testimonial } from '~/content/testimonials/index.js';

const caseStudies = [
  {
    imgAlt:
      'Enigma hirer dashboard with a pop-up notification introducing the page',
    imgSrc: '/img/work/enigma/enigma-hirer-dashboard.png',
    logoSrc: '/svgs/clients/enigma.svg',
    text: 'Built MVP application that was successfully launched and established for immediate use among initial client base',
    linkName: 'enigma'
  }
];

const community = {
  src: '/img/hero-images/ember-consulting.png',
  height: '1034'
};

const marketing = {
  src: '/img/hero-images/mentoring.png',
  height: '772'
};

const specialtyBenefits = [
  {
    imgSrc: '/svgs/icons/image.svg',
    description: 'Out-of-the-box internationalization features'
  },
  {
    imgSrc: '/svgs/icons/mentor.svg',
    description:
      'Automatic image resizing and one-off, on-the-fly image generation'
  },
  {
    imgSrc: '/svgs/icons/chart.svg',
    description: 'Amazingly high performance'
  },
  {
    imgSrc: '/svgs/icons/pwa.svg',
    description: 'Zero config! Developing features is a simple “yarn dev” away'
  }
];

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    SpecialtyInAction: () => import('@/components/SpecialtyInAction'),
    HeroBlock: () => import('@/components/HeroBlock'),
    TwoColumnSection: () => import('@/components/TwoColumnSection'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return {
      caseStudies,
      community,
      marketing,
      specialtyBenefits,
      testimonial
    };
  },
  head() {
    const title = 'Next.js Software Consultants & Developers';
    const description =
      'Wondering, "What is Next js?" or optimizing your Next application? See how Ship Shape\'s Next.js specialists can help build a universal app without the hassle.';
    const url = 'https://shipshape.io/services/next-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.logo-navy path {
  fill: var(--navy);
}
</style>
