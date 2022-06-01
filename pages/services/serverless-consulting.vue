<template>
  <article itemscope itemtype="http://schema.org/Service">
    <HeroBlock
      hero-classes="next-consulting waves serverless-waves !pb-32 !pt-20 lg:!pb-52"
    >
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Start with the basics and scale quickly with serverless frameworks
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
          height="984"
          src="/img/hero-images/serverless-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty :benefits="specialtyBenefits" :flip-paragraphs="true">
      <template #h2>All about Serverless</template>
      <template #h3>This means your company can:</template>
      <template #unboxed-text>
        <p>
          Smaller APIs, GraphQL servers, front-end applications, microservices,
          and similar types of software work well within serverless frameworks.
        </p>

        <p>
          Working on something like this? Ship Shape’s first-rate software
          engineers know all the ins and outs. Whether you’re wondering, “What
          is serverless, and can it help my team?” or you’ve gotten started but
          need help taking it to the next level, we’ve got you covered.
        </p>
      </template>
      <template #boxed-text>
        <p>
          Why pay for computing power you aren’t using? With serverless
          frameworks, high server costs are a thing of the past.
        </p>

        <p>
          What is serverless? It’s a model that offloads server management to a
          third party, only charges you for actual usage, and makes it easy to
          auto-scale as demand increases.
        </p>
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

    <TwoColumnSection
      header="We ❤️ the Serverless Community"
      :image="community"
    >
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
  src: '/img/services/serverless/community.png',
  height: '1008',
  width: '1312'
};

const copilot = {
  src: '/img/services/serverless/copilot.png',
  height: '1132',
  width: '1312'
};

const specialtyBenefits = [
  { imgSrc: '/svgs/icons/modular.svg', description: 'Clear Organization' },
  {
    imgSrc: '/svgs/icons/chart.svg',
    description: 'Scalable UI architecture'
  },
  { imgSrc: '/svgs/icons/retainer.svg', description: 'Simple updates' },
  { imgSrc: '/svgs/icons/sail.svg', description: 'Commitment to stability' }
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
    const title = 'Serverless Framework Solutions';
    const description =
      "Turn to Ship Shape's serverless framework experts to better understand what is serverless, and save time and resources on your next app build.";
    const url = 'https://shipshape.io/services/serverless-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
