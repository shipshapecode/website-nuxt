<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves next-waves">
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
          height="1030"
          src="/img/hero-images/next-consulting.png"
          width="1344"
        />
      </template>
    </HeroBlock>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <div class="grid grid-cols-1 gap-20 mb-32 lg:gap-32 lg:grid-cols-2">
          <div class="text-white" data-aos="fade-up">
            <h2 class="mb-10 text-3xl text-white">All about Next.js</h2>

            <p>
              Whether you’re dipping your toes into the app development waters
              and wondering, “What is Next.js?” or you already know the ropes
              and are exploring this open-source React framework, you’ve come to
              the right place.
            </p>

            <p>
              At Ship Shape, our veteran engineers recommend Next.js because
              it’s one of the most performant frameworks. With server-side
              rendering (SSR) and routing, TypeScript support, smart bundling,
              route pre-fetching, and more, it’s a great choice for
              production-ready web apps.
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
              Teams who have worked in generic React apps can easily make the
              leap into Next.js. If you’re wondering “What is Next.js, and can
              my team transition?” Ship Shape’s experienced developers not only
              consult and develop in Next.js, but also train and mentor teams to
              maintain and improve their code over time.
            </p>
          </div>
        </div>

        <h5 class="text-white" data-aos="fade">
          Some of our favorite Next.js features include:
        </h5>

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
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/image.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Automatic image resizing and one-off, on-the-fly image generation
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/mentor.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Out-of-the-box internationalization features
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/chart.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Amazingly high performance
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="600"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/pwa.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Zero config! Developing features is a simple “yarn dev” away
            </p>
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
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="772"
            src="/img/hero-images/mentoring.png"
            width="1312"
          />
        </div>
        <div>
          <h3>We’ll never leave you high and dry</h3>
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
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="1034"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
          />
        </div>
        <div>
          <h3 data-aos="fade-left">We ❤️ the Next.js Community</h3>
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

export const testimonial = {
  name: 'Harley Sugarman',
  title: 'Founder, CEO at Enigma',
  imgSrc: 'harley',
  svgSrc: '/svgs/clients/enigma-white.svg',
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
