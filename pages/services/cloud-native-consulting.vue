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

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <div class="grid grid-cols-1 gap-20 mb-32 lg:gap-32 lg:grid-cols-2">
          <div class="text-white" data-aos="fade-up">
            <h2 class="mb-10 text-4xl text-white">
              All about cloud-native applications
            </h2>

            <p>
              Cloud-native development is a methodology for building and running
              scalable applications in modern, dynamic environments. This
              platform-agnostic approach gives you flexibility so you don’t have
              to work with one vendor (such as AWS or Azure) and provides
              engineering teams with tools to set up a clear, effective software
              delivery pipeline so they can deliver battle-tested, secure
              solutions faster.
            </p>
          </div>

          <div
            class="
              bg-blue-light
              flex
              items-center
              p-12
              rounded-md
              text-navy
              lg:mt-16
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p class="mb-0">
              If you’re working on developing cloud-native applications or would
              like to explore the value they could bring to your team and
              customers, look no further. Our cloud-native specialists can help
              you build efficient and effective products today, lay a solid
              foundation for the future, and upskill your team so they can
              continue making positive progress long after our engagement ends.
            </p>
          </div>
        </div>

        <h3 class="text-white text-2xl" data-aos="fade">
          Ship Shape’s engineering staff prefers using a cloud-native approach
          because of its:
        </h3>

        <div
          class="
            divide-grey-light divide-y
            grid grid-cols-1
            my-20
            text-white
            lg:divide-x lg:divide-y-0 lg:grid-cols-4
          "
        >
          <div class="flex flex-col items-center px-16" data-aos="flip-down">
            <nuxt-img
              alt=""
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/retainer.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Fast, transparent software delivery cycle
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <nuxt-img
              alt=""
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/speed.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Ability to deliver value to customers even faster
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <nuxt-img
              alt=""
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/secure.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Tested, safe, and secure deployment
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="600"
          >
            <nuxt-img
              alt=""
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/chart.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">Rapid scalability</p>
          </div>
        </div>
      </div>
    </div>

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
    HeroBlock: () => import('@/components/HeroBlock'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },
  data() {
    return { testimonial };
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
