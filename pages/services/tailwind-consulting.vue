<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves next-waves">
      <template #content>
        <div class="pb-24 lg:pb-0">
          <h1 itemprop="name" class="leading-tight text-5xl">
            Customize your app quickly with the help of our Tailwind CSS experts
          </h1>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full lg:pb-32"
          format="webp"
          height="1030"
          src="/img/hero-images/tailwind-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
      :flip-paragraphs="true"
    >
      <template #unboxed-text>
        <p class="text-white lg:content-center lg:place-self-center">
          At Ship Shape, we like Tailwind CSS so much that we even use it on our
          own products and passion projects, such as our
          <a href="https://swach.io/"
            >robust color management app called Swach.</a
          >
          In addition to building Tailwind UIs, we also love training other
          teams on it to help sharpen their skills too.
        </p>
      </template>
    </AllAboutSpecialty>

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
          <h2>Your co-pilots in the storm</h2>
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
            height="1034"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
            alt=""
          />
        </div>
        <div>
          <h2 data-aos="fade-left">We ❤️ the Developer Community</h2>
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
    h2: 'All about Tailwind CSS',
    h3: 'Ship Shape’s experienced engineers love Tailwind CSS because:',
    boxedText:
      'Much faster than with most CSS frameworks, Tailwind CSS provides almost all the tools you need to build a site without writing any custom styles.',
    unboxedText: ''
  },
  benefits: [
    {
      imgSrc: '/svgs/icons/image.svg',
      description: 'It matches mocks and designs with ease.'
    },
    {
      imgSrc: '/svgs/icons/time.svg',
      description:
        'It automatically removes all unused CSS when building for production, which improves speed.'
    },
    {
      imgSrc: '/svgs/icons/modular.svg',
      description:
        'Its usability is quite nimble compared to similar frameworks (like Bootstrap).'
    },
    {
      imgSrc: '/svgs/icons/pwa.svg',
      description: 'Prototyping is super fast with Tailwind UI components.'
    }
  ]
};

const testimonial = {
  name: 'Harley Sugarman',
  title: 'Founder, CEO at Enigma',
  imgSrc: 'harley',
  svgSrc: '/svgs/clients/enigma.svg',
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
    return { testimonial, specialtyDetails };
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
