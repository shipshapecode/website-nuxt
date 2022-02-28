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
        <p class="text-white lg:content-center lg:place-self-center">
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
        </p>
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
import {
  caseStudies,
  head,
  marketing,
  specialtyDetails,
  testimonial
} from '~/content/specialties/ember.js';

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
