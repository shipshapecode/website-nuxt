<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves next-waves">
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
    />

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
            alt=""
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="772"
            src="/img/hero-images/mentoring.png"
            width="1312"
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
            alt=""
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="1034"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
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
    h2: 'All about Cloud Native',
    h3: 'Ship Shape’s engineering staff prefers using a cloud-native approach because of its:',
    boxedText:
      'If you’re working on developing cloud-native applications or would like to explore the value they could bring to your team and customers, look no further. Our cloud-native specialists can help you build efficient and effective products today, lay a solid foundation for the future, and upskill your team so they can continue making positive progress long after our engagement ends.',
    unboxedText:
      'Cloud-native development is a methodology for building and running scalable applications in modern, dynamic environments. This platform-agnostic approach gives you flexibility so you don’t have to work with one vendor (such as AWS or Azure) and provides engineering teams with tools to set up a clear, effective software delivery pipeline so they can deliver battle-tested, secure solutions faster.'
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
