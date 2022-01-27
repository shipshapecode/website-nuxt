<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="services bg-blue-light waves blue-light-waves">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Software consultants who build it right the first time, every time
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          height="1020"
          format="webp"
          src="/img/hero-images/services.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <div class="section bg-white flex flex-wrap !pt-32" data-aos="fade-down">
      <h3 class="py-12">High impact, low ego</h3>
      <div class="divide-grey-light divide-y-2">
        <div
          class="
            section-content
            justify-center
            grid grid-cols-1
            gap-8
            items-center
            pb-12
            lg:gap-32 lg:grid-cols-2 lg:pb-20
          "
        >
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="772"
            src="/img/hero-images/mentoring.png"
            width="1312"
          />
          <p>
            Sailing the open seas to a new destination requires a sturdy vessel
            and a competent crew. Ship Shape’s app development company is full
            of top-tier engineers who tackle your toughest technical challenges
            every step of the way.
          </p>
        </div>
        <div
          class="
            section-content
            justify-center
            grid grid-cols-1
            gap-8
            items-center
            py-16
            lg:gap-32 lg:grid-cols-2 lg:py-24
          "
        >
          <p>
            Our software engineers specialize in
            <a href="http://localhost:3000/services/cloud-native-consulting/"
              >Ember.js</a
            >,
            <a href="http://localhost:3000/services/nuxt-consulting/">Nuxt.js</a
            >,
            <a href="http://localhost:3000/services/next-consulting/">Next.js</a
            >, and emerging technologies like
            <a href="http://localhost:3000/services/serverless-consulting/"
              >serverless frameworks</a
            >
            and
            <a href="http://localhost:3000/services/cloud-native-consulting/"
              >cloud native applications</a
            >. We combine our high IQ in these technologies with a high EQ to
            ensure your experience with us is just as good as the final product.
            Plus, we upskill your team as we work together so they can sustain
            and improve your products long after our engagement ends.
          </p>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="740"
            src="/img/hero-images/mentoring.png"
            width="1224"
          />
        </div>
        <div
          class="
            section-content
            justify-center
            grid grid-cols-1
            gap-8
            items-center
            py-16
            lg:gap-32 lg:grid-cols-2 lg-py-24
          "
        >
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="950"
            src="/img/hero-images/open-source.png"
            width="1312"
          />
          <p>
            From the future of fintech, to cybersecurity, and more, we help a
            wide variety of industries level-up their products and their people.
          </p>
        </div>
      </div>
    </div>

    <ServicesBlurbs />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock'),
    ServicesBlurbs: () => import('@/components/ServicesBlurbs')
  },

  head() {
    const title = 'Custom Software Development';
    const description =
      'Ship Shape specializes in custom software and app development services. ' +
      'Learn how we turn ideas into world-class products.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
