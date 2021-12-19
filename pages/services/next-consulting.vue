<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves next-waves">
      <template #content>
        <h1 itemprop="name">
          Boost performance and easily make the leap from React to Next.js
        </h1>
        <div>
          <nuxt-link class="btn btn-red" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          src="/img/hero-images/next-consulting.png"
        />
      </template>
    </HeroBlock>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <div class="grid grid-cols-1 gap-x-32 mb-24 lg:grid-cols-5">
          <div class="text-white lg:col-span-3">
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
              lg:col-span-2
            "
          >
            <p>
              Teams who have worked in generic React apps can easily make the
              leap into Next.js. If you’re wondering “What is Next.js, and can
              my team transition?” Ship Shape’s experienced developers not only
              consult and develop in Next.js, but also train and mentor teams to
              maintain and improve their code over time.
            </p>
          </div>
        </div>

        <h5 class="text-white">
          Some of our favorite Next.js features include:
        </h5>

        <div
          class="
            divide-grey-light divide-y
            grid grid-cols-1
            my-12
            text-white
            lg:divide-x lg:divide-y-0 lg:grid-cols-4
          "
        >
          <div class="px-16 text-center">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/image.svg"
            />

            <p>
              Automatic image resizing and one-off, on-the-fly image generation
            </p>
          </div>

          <div class="px-16 text-center">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/mentor.svg"
            />
            <p>Out-of-the-box internationalization features</p>
          </div>

          <div class="px-16 text-center">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/chart.svg"
            />
            <p>Amazingly high performance</p>
          </div>

          <div class="px-16 text-center">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/pwa.svg"
            />
            <p>Zero config! Developing features is a simple “yarn dev” away</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-wrap justify-center">
      <div
        class="
          section-content
          gap-24
          grid grid-cols-1
          items-center
          lg:grid-cols-2
        "
      >
        <div>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            src="/img/hero-images/mentoring.png"
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
          gap-24
          grid grid-cols-1
          items-center
          lg:grid-cols-2
        "
      >
        <div class="lg:order-last">
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            src="/img/laptop.png"
          />
        </div>
        <div>
          <h3>We ❤️ the Next.js Community</h3>
          <p>
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
  name: 'Donald Piret',
  title: 'Director of Engineering at Sephora',
  imgSrc: 'donald',
  svgSrc: '/svgs/clients/sephora-white.svg',
  quote: `Ship Shape delivered beyond our expectations. They pointed out things
          we had never even thought of or knew about. Our team learned a huge
          amount of new information and new tricks, and we still have them on
          retainer for very specific questions. Plus, Ship Shape is the
          friendliest team of engineers I've worked with.`
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
