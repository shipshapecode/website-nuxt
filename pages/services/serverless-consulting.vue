<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="next-consulting waves next-waves">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl">
          Start with the basics and scale quickly with serverless frameworks
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
          src="/img/hero-images/serverless-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <div class="section bg-navy flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-white text-4xl" data-aos="fade-up">
          All about Serverless
        </h2>
        <div
          class="
            grid
            space-y-12
            pt-10
            pb-32
            lg:pt-4 lg:grid-cols-7 lg:gap-20 lg:space-y-0
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p
            class="
              grid
              mb-0
              p-6
              bg-blue-light
              text-navy
              rounded
              place-self-center
              sm:p-8
              lg:col-span-3 lg:p-12
            "
          >
            Why pay for computing power you aren’t using? With serverless
            frameworks, high server costs are a thing of the past.
            <br />
            <br />
            What is serverless? It’s a model that offloads server management to
            a third party, only charges you for actual usage, and makes it easy
            to auto-scale as demand increases.
          </p>
          <p class="text-white lg:col-span-4 lg:content-center lg:p-8">
            Smaller APIs, graph QL servers, front-end applications,
            microservices, and similar types of software work well within
            serverless frameworks.
            <br />
            <br />
            Working on something like this? Ship Shape’s first-rate software
            engineers know all the ins and outs. Whether you’re wondering, “What
            is serverless, and can it help my team?” or you’ve gotten started
            but need help taking it to the next level, we’ve got you covered.
          </p>
        </div>

        <h3 class="text-white text-2xl" data-aos="fade">
          This means your company can:
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
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/speed.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Quickly spin up more servers when traffic spikes
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
              src="/svgs/icons/time.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Only pay for the computing power you use
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
              src="/svgs/icons/modular.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Eliminate the need to manage physical hardware
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
              src="/svgs/icons/sail.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Control power and speed as needed
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
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="1034"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
            alt=""
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
