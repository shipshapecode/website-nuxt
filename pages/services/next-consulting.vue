<template>
  <article itemscope itemtype="http://schema.org/Service">
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
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
    >
      <template #unboxed-text>
        Whether you’re dipping your toes into the app development waters and
        wondering, “What is Next.js?” or you already know the ropes and are
        exploring this open-source React framework, you’ve come to the right
        place.
        <br />
        <br />
        At Ship Shape, our veteran engineers recommend Next.js because it’s one
        of the most performant frameworks. With server-side rendering (SSR) and
        routing, TypeScript support, smart bundling, route pre-fetching, and
        more, it’s a great choice for production-ready web apps.
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
      data-aos="fade-up"
      hero-classes="mt-20"
      :content="marketing"
      :is-flipped="true"
    />

    <SingleQuote :testimonial="testimonial" />

    <TwoColumnSection :content="community" />

    <WaveMoreLinks />
  </article>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import {
  caseStudies,
  community,
  head,
  marketing,
  specialtyDetails,
  testimonial
} from '~/content/specialties/next.js';

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
      head,
      marketing,
      specialtyDetails,
      testimonial
    };
  },
  head() {
    const { title, description, url } = head;
    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.logo-navy path {
  fill: var(--navy);
}
</style>
