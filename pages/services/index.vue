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

    <SingleQuote :testimonial="testimonial" />

    <!-- maybe this should be all one component? -->
    <div
      class="section bg-white divide-y-2 divide-grey-light"
      data-aos="fade-down"
    >
      <div class="flex flex-col pb-24 lg:flex-row">
        <h3>Check out the latest insights</h3>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/blog/">
            Read on
          </nuxt-link>
        </div>
      </div>
      <div>
        <div>
          <h3 class="py-12">Latest Podcast</h3>
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
              height="500"
              src="/img/hero-images/www.png"
              width="500"
            />
            <p>
              Sailing the open seas to a new destination requires a sturdy
              vessel and a competent crew. Ship Shape’s app development company
              is full of top-tier engineers who tackle your toughest technical
              challenges every step of the way.
            </p>
            <nuxt-link class="learn-more" to="/services/serverless-consulting/">
              Dive Deeper
              <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
            </nuxt-link>
          </div>
        </div>
        <div>
          <h3 class="py-12">Latest Blog Post</h3>
          <div
            :key="post.slug"
            class="
              section-content
              justify-center
              items-center
              grid grid-cols-1
              pb-12
              lg:gap-12 lg:grid-cols-9
            "
          >
            <nuxt-img
              class="h-auto m-auto max-w-md w-full pb-10 lg:col-span-2"
              format="webp"
              height="500"
              src="/img/about/desk.jpg"
              width="500"
            />
            <div class="lg:col-span-5">
              <h4 class="lg:text-xl lg:mb-4">
                {{ post.linktitle || post.title }}
              </h4>
              <h5 class="font-light text-grey-light lg:text-lg lg:mb-4">
                {{ formatDateWithDots(post.date) }}
              </h5>
              <p>
                {{ post.description }}
              </p>
            </div>
            <nuxt-link
              class="
                learn-more
                lg:col-span-2 lg:justify-self-end lg:self-end lg:pb-16
              "
              :to="`/blog/${post.slug}/`"
            >
              Dive Deeper
              <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDateWithDots } from '~/utils/date';
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
    ServicesBlurbs: () => import('@/components/ServicesBlurbs'),
    SingleQuote: () => import('@/components/SingleQuote')
  },

  async asyncData({ $content }) {
    const content = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(1)
      .fetch();

    const post = content[0];

    return { post };
  },

  data() {
    return { testimonial };
  },

  head() {
    const title = 'Custom Software Development';
    const description =
      'Ship Shape specializes in custom software and app development services. ' +
      'Learn how we turn ideas into world-class products.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  },

  methods: {
    formatDateWithDots
  }
};
</script>
