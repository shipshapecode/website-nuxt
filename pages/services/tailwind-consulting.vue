<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="next-consulting waves tailwind-waves !pb-48 !pt-20 lg:!pb-52"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Customize your app quickly with the help of our Tailwind CSS experts
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
          height="936"
          src="/img/hero-images/tailwind-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty :benefits="specialtyBenefits" :flip-paragraphs="true">
      <template #h2>All about Tailwind CSS</template>
      <template #h3>
        Ship Shape’s experienced engineers love Tailwind CSS because:
      </template>
      <template #unboxed-text>
        At Ship Shape, we like Tailwind CSS so much that we even use it on our
        own products and passion projects, such as our
        <a class="hover:brightness-125 hover:text-red" href="https://swach.io/">
          robust color management app called Swach.
        </a>
        In addition to building Tailwind UIs, we also love training other teams
        on it to help sharpen their skills too.
      </template>
      <template #boxed-text>
        Much faster than with most CSS frameworks, Tailwind CSS provides almost
        all the tools you need to build a site without writing any custom
        styles.
      </template>
    </AllAboutSpecialty>

    <TwoColumnSection
      class-string="mt-20"
      header="Your co-pilots in the storm"
      :image="copilot"
      :is-flipped="true"
    >
      <template #content>
        Ship Shape is committed to leaving every engineering team we work with
        better than we found it. Not only do we build robust, reliable software,
        but we also train your staff along the way to understand, maintain, and
        improve your product after our engagement ends.
      </template>
    </TwoColumnSection>

    <!-- <SingleQuote :testimonial="testimonial" /> -->

    <TwoColumnSection header="We ❤️ the Tailwind Community" :image="community">
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

const community = {
  src: '/img/services/tailwind/community.png',
  height: '1008',
  width: '1312'
};

const copilot = {
  src: '/img/services/tailwind/copilot.png',
  height: '1132',
  width: '1312'
};

const specialtyBenefits = [
  {
    imgSrc: '/svgs/icons/image.svg',
    description: 'It matches mocks and designs with ease.'
  },
  {
    imgSrc: '/svgs/icons/speed.svg',
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
];

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    TwoColumnSection: () => import('@/components/TwoColumnSection'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { community, copilot, specialtyBenefits };
  },
  head() {
    const title = 'Tailwind CSS & Tailwind UI Experts';
    const description =
      "Tailwind CSS makes it easy to build a site without using any custom CSS. Learn how Ship Shape's team of Tailwind UI experts can help tailor your app quickly. ";
    const url = 'https://shipshape.io/services/tailwind-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
