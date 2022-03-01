<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves cloud-native-waves">
      <template #content>
        <div class="pb-24 lg:pb-0">
          <h1 itemprop="name" class="leading-tight text-5xl">
            Launch and scale faster and more securely with cloud-native
            applications
          </h1>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          alt=""
          class="h-auto m-auto max-w-2xl w-full lg:pb-32"
          format="webp"
          height="1030"
          src="/img/hero-images/cloud-native-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
    >
      <template #unboxed-text>
        Cloud-native development is a methodology for building and running
        scalable applications in modern, dynamic environments. This
        platform-agnostic approach gives you flexibility so you don’t have to
        work with one vendor (such as AWS or Azure) and provides engineering
        teams with tools to set up a clear, effective software delivery pipeline
        so they can deliver battle-tested, secure solutions faster.
      </template>
      <template #boxed-text>
        If you’re working on developing cloud-native applications or would like
        to explore the value they could bring to your team and customers, look
        no further. Our cloud-native specialists can help you build efficient
        and effective products today, lay a solid foundation for the future, and
        upskill your team so they can continue making positive progress long
        after our engagement ends.
      </template>
    </AllAboutSpecialty>

    <TwoColumnSection
      data-aos="fade-up"
      hero-classes="mt-20"
      :content="marketing"
      :is-flipped="true"
    />

    <!-- <SingleQuote :testimonial="testimonial" /> -->

    <TwoColumnSection data-aos="fade-up" :content="community" />

    <WaveMoreLinks />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export const community = {
  imgSrc: '/img/hero-images/ember-consulting.png',
  imgHeight: '1034',
  h2: 'We ❤️ the Developer Community',
  paragraph:
    'We’re a team of makers who are passionate about improving software products and the people who create them.'
};

export const marketing = {
  imgSrc: '/img/hero-images/mentoring.png',
  imgHeight: '772',
  h2: 'We’ll never leave you high and dry',
  paragraph:
    'Ship Shape is committed to leaving every engineering team we work with better than we found it. Not only do we build robust, reliable software, but we also train your staff along the way to understand, maintain, and improve your product after our engagement ends.'
};

export const specialtyDetails = {
  text: {
    h2: 'All about Cloud Native',
    h3: 'Ship Shape’s engineering staff prefers using a cloud-native approach because of its:'
  },
  benefits: [
    {
      imgSrc: '/svgs/icons/retainer.svg',
      description: 'Fast, transparent software delivery cycle'
    },
    {
      imgSrc: '/svgs/icons/speed.svg',
      description: 'Ability to deliver value to customers even faster'
    },
    {
      imgSrc: '/svgs/icons/secure.svg',
      description: 'Tested, safe, and secure deployment'
    },
    {
      imgSrc: '/svgs/icons/chart.svg',
      description: 'Rapid scalability'
    }
  ]
};

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    HeroBlock: () => import('@/components/HeroBlock'),
    TwoColumnSection: () => import('@/components/TwoColumnSection'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { community, marketing, specialtyDetails };
  },
  head() {
    const title = 'Cloud-Native Applications';
    const description =
      "See how Ship Shape's software engineers can help your team leverage the cloud-native applications methodology to deliver value to customers even faster.";
    const url = 'https://shipshape.io/services/cloud-native-consulting/';
    return generateMeta(title, description, url);
  }
};
</script>
