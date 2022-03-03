<template>
  <section class="section bg-blue-light flex flex-wrap justify-center">
    <div class="section-content">
      <TwoColumnSection
        :image="headerImage"
        header="Our fleet of specialties"
        class-string="lg-header"
      >
        <template #content>
          Our senior-level software consultants ensure your applications are
          optimized for today and ready for the future.
        </template>
      </TwoColumnSection>

      <section class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ServiceCard
          v-for="service in services"
          :key="service.learnMoreLink"
          :learn-more-link="service.learnMoreLink"
          :case-study-link="service.caseStudyLink"
        >
          <template #header>
            <inline-svg :class="service.logoClasses" :src="service.logoSrc" />
          </template>
          <template #description>
            {{ service.description }}
          </template>
        </ServiceCard>
      </section>
    </div>
  </section>
</template>

<script>
const headerImage = { src: '/img/hero-images/specialties.png', height: '814' };

const services = [
  {
    logoClasses: 'h-auto w-20 nested-svg pb-6 lg:w-32 lg:pb-12',
    logoSrc: '/svgs/technologies/ember.svg',
    description:
      "One of the best frameworks for fast, reliable builds, especially complex apps and dashboards. Ember's opinionated structure lends well to efficiency and organization.",
    learnMoreLink: '/services/ember-consulting/',
    caseStudyLink: '/work/netflix/'
  },
  {
    logoClasses: 'h-auto w-24 nested-svg pb-6 lg:w-40 lg:pt-5 lg:pb-12',
    logoSrc: '/svgs/technologies/nuxt.svg',
    description:
      'A performant framework used to create flexible, universal Vue.js web apps, thanks to its simple routing and out-of-the-box optimizations.',
    learnMoreLink: '/services/nuxt-consulting/',
    caseStudyLink: '/services/nuxt-consulting/'
  },
  {
    logoClasses: 'h-auto w-20 nested-svg pb-6 lg:w-32 lg:pb-12',
    logoSrc: '/svgs/technologies/next.svg',
    description:
      'A nimble React framework for production with lots of magic built in, from server-side rendering for enhanced SEO to internationalization features.',
    learnMoreLink: '/services/next-consulting/',
    caseStudyLink: '/work/enigma/'
  },
  {
    logoClasses: 'h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20',
    logoSrc: '/svgs/technologies/tailwind.svg',
    description:
      'Match mocks from designers with ease, and automagically remove all unused CSS with this convenient framework.',
    learnMoreLink: '/services/tailwind-consulting/',
    caseStudyLink: '/services/tailwind-consulting/'
  },
  {
    logoClasses: 'h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20',
    logoSrc: '/svgs/technologies/serverless.svg',
    description:
      'Only pay for the computing you need, scale quickly, and reduce maintenance with serverless applications. We’ll show you how.',
    learnMoreLink: '/services/serverless-consulting/',
    caseStudyLink: '/services/serverless-consulting/'
  },
  {
    logoClasses: 'h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20',
    logoSrc: '/svgs/technologies/cncf.svg',
    description:
      'Say goodbye to being locked into vendors, and deliver well-tested, secure products faster with this platform-agnostic methodology.',
    learnMoreLink: '/services/cloud-native-consulting/',
    caseStudyLink: '/services/cloud-native-consulting/'
  }
];

export default {
  speedkitComponents: {
    ServiceCard: () => import('@/components/ServiceCard'),
    TwoColumnSection: () => import('@/components/TwoColumnSection')
  },
  data() {
    return { headerImage, services };
  }
};
</script>

<style lang="scss">
.nested-svg g,
.nested-svg path {
  fill: #1b3b5d;
}

.lg-header {
  h2 {
    @apply lg:text-5xl;
  }
}
</style>
