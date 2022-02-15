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

const specialtyDetails = {
  text: {
    h2: 'All about Next.js',
    h3: 'Some of our favorite Next.js features include:',
    boxedText:
      'Teams who have worked in generic React apps can easily make the leap into Next.js. If you’re wondering “What is Next.js, and can my team transition?” Ship Shape’s experienced developers not only consult and develop in Next.js, but also train and mentor teams to maintain and improve their code over time.',
    unboxedText: `Whether you’re dipping your toes into the app development waters and wondering, “What is Next.js?” or you already know the ropes and are exploring this open-source React framework, you’ve come to the right place. \n \n At Ship Shape, our veteran engineers recommend Next.js because it’s one of the most performant frameworks. With server-side rendering (SSR) and routing, TypeScript support, smart bundling, route pre-fetching, and more, it’s a great choice for production-ready web apps.'`
  },
  benefits: [
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
      description:
        'Zero config! Developing features is a simple “yarn dev” away'
    }
  ]
};

export const testimonial = {
  name: 'Harley Sugarman',
  title: 'Founder, CEO at Enigma',
  imgSrc: 'harley',
  svgSrc: '/svgs/clients/enigma-white.svg',
  quote: `I loved working with Ship Shape.
          They helped our small team build a product from the ground up
          and were strong partners every step of the way. Their domain expertise
          in Next.js and React helped lay the foundation for a scalable codebase,
          and they were great at ensuring we adhered to engineering best practices.
          Every member of the team was a pleasure to work with and (best of all)
          we ended up launching our MVP on schedule!`
};

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { specialtyDetails, testimonial };
  },
  head() {
    const title = 'Next.js Software Consultants & Developers';
    const description =
      'As a proven leader in Next.js development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/next-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.logo-red path {
  fill: #ed6a5e;
}
</style>
