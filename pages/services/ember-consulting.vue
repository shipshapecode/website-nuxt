<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="ember-consulting waves ember-waves !pb-48 !pt-20">
      <template #content>
        <header>
          <h1 itemprop="name" class="text-5xl leading-tight">
            Build fast, reliable apps with expert Ember.js development,
            consulting, and training
          </h1>
        </header>
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
          height="1058"
          src="/img/hero-images/ember-consulting.png"
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
        For these reasons, we often recommend it for
        <nuxt-link to="/work/expel">enterprise app development</nuxt-link>,
        in-depth apps and dashboards, responsive web applications, and other
        projects for large firms.
        <br />
        <br />
        If your team is working on an Ember.js app or considering a greenfield
        project where this framework could be a good fit, turn to our top-tier
        Ember experts for a full range of support, from consulting to
        development to team training.
      </template>
      <template #boxed-text>
        Ember.js is an open-source JavaScript web framework. We love its strong
        opinions, which help engineers work faster and keep their work
        organized.
      </template>
    </AllAboutSpecialty>

    <SpecialtyInAction :case-studies="caseStudies" specialty="Ember.js" />

    <TwoColumnSection
      data-aos="fade-up"
      hero-classes="mt-20"
      :content="marketing"
      :is-flipped="true"
    />

    <SingleQuote :testimonial="testimonial" />

    <CommunityInvolvement />

    <WaveMoreLinks class="md:px-20" />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import { expelTestimonial as testimonial } from '~/content/testimonials/index.js';

const caseStudies = [
  {
    imgAlt:
      'An overview of NIST scores, broken down by category and visualized in a radar graph.',
    imgSrc: '/img/work/expel/nist-overview.png',
    logoSrc: '/svgs/clients/expel.svg',
    text: 'Expel offers 24x7 security monitoring and response for cloud, hybrid and on-premises environments...'
  },
  {
    imgAlt: '',
    imgSrc: '/svgs/data-graphic.svg',
    logoSrc: '/svgs/clients/netflix.svg',
    text: "Netflix is the world's leading internet entertainment service with more than 130 million memberships..."
  },
  {
    imgAlt: 'Jebbit Experience Builder Legacy',
    imgSrc: '/img/work/jebbit/jebbit-case-study-screenshot.png',
    logoSrc: '/svgs/clients/jebbit.svg',
    text: 'Jebbit is an enterprise software platform that enables a future of total data transparency...'
  }
];

const head = {
  title: 'Ember.js Enterprise App Development',
  description:
    "Learn how Ship Shape's top-tier enterprise app development experts can help your team build fast, reliable Ember.js applications.",
  url: 'https://shipshape.io/services/ember-consulting/'
};

const marketing = {
  imgSrc: '/img/hero-images/mentoring.png',
  imgHeight: '772',
  h2: 'We’ll never leave you high and dry',
  paragraph:
    'Ship Shape is committed to leaving every engineering team we work with better than we found it. Not only do we build robust, reliable software, but we also train your staff along the way to understand, maintain, and improve your product after our engagement ends.'
};

const specialtyDetails = {
  text: {
    h2: 'All about Ember.js',
    h3: 'Ember is great for large companies because of its:'
  },
  benefits: [
    { imgSrc: '/svgs/icons/modular.svg', description: 'Clear Organization' },
    {
      imgSrc: '/svgs/icons/chart.svg',
      description: 'Scalable UI architecture'
    },
    { imgSrc: '/svgs/icons/retainer.svg', description: 'Simple updates' },
    { imgSrc: '/svgs/icons/sail.svg', description: 'Commitment to stability' }
  ]
};

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    SpecialtyInAction: () => import('@/components/SpecialtyInAction'),
    CommunityInvolvement: () => import('@/components/CommunityInvolvement'),
    HeroBlock: () => import('@/components/HeroBlock'),
    TwoColumnSection: () => import('@/components/TwoColumnSection'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { caseStudies, head, marketing, testimonial, specialtyDetails };
  },
  head() {
    const { title, description, url } = head;

    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.ember-image {
  height: 250px;
  width: auto;
}

.logo-navy path {
  fill: var(--navy);
}
</style>
