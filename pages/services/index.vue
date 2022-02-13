<template>
  <div>
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
          alt=""
        />
      </template>
    </HeroBlock>

    <div class="section bg-white flex flex-wrap justify-center !pt-32">
      <div>
        <h3 class="py-12" data-aos="fade-left">High impact, low ego</h3>
        <div class="divide-[#D8E3E8] divide-y-2">
          <div
            class="
              section-content
              grid grid-cols-1
              gap-8
              items-center
              pb-12
              lg:gap-32 lg:grid-cols-2 lg:pb-20
            "
            data-aos="fade-left"
          >
            <nuxt-img
              class="h-auto m-auto max-w-2xl w-full"
              format="webp"
              height="1034"
              src="/img/services/design.png"
              width="1312"
              alt=""
            />
            <p>
              Sailing the open seas to a new destination requires a sturdy
              vessel and a competent crew. Ship Shape’s app development company
              is full of top-tier engineers who tackle your toughest technical
              challenges every step of the way.
            </p>
          </div>
          <div
            class="
              section-content
              grid grid-cols-1
              gap-8
              items-center
              py-16
              lg:gap-32 lg:grid-cols-2 lg:py-24
            "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <nuxt-img
              class="h-auto m-auto max-w-2xl w-full lg:order-last"
              format="webp"
              height="1034"
              src="/img/services/build.png"
              width="1312"
              alt=""
            />
            <p>
              Our software engineers specialize in
              <nuxt-link to="/services//ember-consulting/"
                >Ember.js</nuxt-link
              >, <nuxt-link to="/services/nuxt-consulting/">Nuxt.js</nuxt-link>,
              <nuxt-link to="/services/next-consulting/">Next.js</nuxt-link>,
              and emerging technologies like
              <nuxt-link to="/services/serverless-consulting/"
                >serverless frameworks</nuxt-link
              >
              and
              <nuxt-link to="/services/cloud-native-consulting/"
                >cloud native applications</nuxt-link
              >. We combine our high IQ in these technologies with a high EQ to
              ensure your experience with us is just as good as the final
              product. Plus, we upskill your team as we work together so they
              can sustain and improve your products long after our engagement
              ends.
            </p>
          </div>
          <div
            class="
              section-content
              grid grid-cols-1
              gap-8
              items-center
              py-16
              lg:gap-32 lg:grid-cols-2 lg-py-24
            "
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <nuxt-img
              class="h-auto m-auto max-w-2xl w-full"
              format="webp"
              height="950"
              src="/img/hero-images/open-source.png"
              width="1312"
              alt=""
            />
            <p>
              From the future of fintech, to
              <nuxt-link to="/work/enigma">cybersecurity</nuxt-link>, and more,
              we help a wide variety of industries level-up their products and
              their people.
            </p>
          </div>
        </div>
      </div>
    </div>

    <ServicesBlurbs />

    <SingleQuote :testimonial="testimonial" />

    <!-- maybe this should be all one component? -->
    <div
      class="section flex flex-wrap justify-center bg-white"
      data-aos="fade-down"
    >
      <div class="section-content flex flex-col divide-y-2 divide-[#D8E3E8]">
        <div
          class="
            pb-24
            lg:flex lg:flex-row lg:place-content-between lg:items-center
          "
        >
          <h3>Check out the latest insights</h3>
          <nuxt-link class="btn btn-red w-full lg:w-1/5" to="/blog/">
            Read on
          </nuxt-link>
        </div>
        <div>
          <div>
            <h3 class="py-12">Latest Podcast</h3>
            <div
              :key="latestPodcastEpisode.title"
              class="
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
                src="/img/hero-images/www.png"
                width="500"
                alt=""
              />
              <div class="lg:col-span-5">
                <h4 class="lg:text-xl lg:mb-4">
                  {{ latestPodcastEpisode.title }}
                </h4>
                <h5 class="font-light text-grey-light lg:text-lg lg:mb-4">
                  {{ formatDateWithDots(latestPodcastEpisode.pubDate) }}
                </h5>
                <p>
                  {{ latestPodcastEpisode.description }}
                </p>
              </div>
              <a
                class="
                  learn-more
                  lg:col-span-2 lg:justify-self-end lg:self-end lg:pb-16
                "
                href="https://www.whiskeywebandwhatnot.fm/"
              >
                Dive Deeper
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </a>
            </div>
          </div>
          <div>
            <h3 class="py-12">Latest Blog Post</h3>
            <div
              :key="latestBlogPost.slug"
              class="
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
                alt=""
              />
              <div class="lg:col-span-5">
                <h4 class="lg:text-xl lg:mb-4">
                  {{ latestBlogPost.linktitle || latestBlogPost.title }}
                </h4>
                <h5 class="font-light text-grey-light lg:text-lg lg:mb-4">
                  {{ formatDateWithDots(latestBlogPost.date) }}
                </h5>
                <p>
                  {{ latestBlogPost.description }}
                </p>
              </div>
              <nuxt-link
                class="
                  learn-more
                  lg:col-span-2 lg:justify-self-end lg:self-end lg:pb-16
                "
                :to="`/blog/${latestBlogPost.slug}/`"
              >
                Dive Deeper
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeroBlock hero-classes="waves blue-waves bg-blue-light">
      <template #content>
        <h2 itemprop="name" class="leading-tight text-5xl">
          Ready to set sail?
        </h2>
        <div>
          <p>
            Reach out to tell us more about your goals and chat about how our
            app development company can help you get there.
          </p>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Contact us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          height="1034"
          format="webp"
          src="/img/hero-images/ember-consulting.png"
          width="1312"
          alt=""
        />
      </template>
    </HeroBlock>
  </div>
</template>

<script>
import truncate from 'lodash.truncate';
import { formatDateWithDots } from '~/utils/date';
import { generateMeta } from '~/utils/meta';

const testimonial = {
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
    ServicesBlurbs: () => import('@/components/ServicesBlurbs'),
    SingleQuote: () => import('@/components/SingleQuote')
  },

  async asyncData({ $content }) {
    const response = await fetch(
      'https://player.megaphone.fm/playlist/PODRYL5396410253/'
    );
    const podcastData = await response.json();
    const latestPodcastEpisode = podcastData?.episodes[0];

    const description = truncate(
      latestPodcastEpisode?.summary?.replace(/(<([^>]+)>)/gi, ''),
      {
        length: 260,
        separator: /,?\.* +/
      }
    );

    latestPodcastEpisode.description = description;

    const content = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(1)
      .fetch();

    const latestBlogPost = content[0];

    return { latestPodcastEpisode, latestBlogPost };
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
