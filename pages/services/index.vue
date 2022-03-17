<template>
  <article>
    <HeroBlock hero-classes="services waves blue-waves bg-blue-light !pb-20">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-4xl lg:text-6xl">
          Software consultants who build it right the first time, every time
        </h1>
        <div>
          <div class="flex justify-center mt-3 w-full lg:justify-start lg:mt-8">
            <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
              Work with us
            </nuxt-link>
          </div>
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

    <section class="section bg-white flex flex-wrap justify-center !pt-32">
      <div>
        <h2 class="pt-12 mb-0 text-4xl lg:text-5xl" data-aos="fade-down">
          High impact, low ego
        </h2>

        <div class="section">
          <div class="section-content divide-[#D8E3E8] divide-y-2">
            <section
              class="flex flex-wrap justify-center py-12"
              data-aos="fade-right"
            >
              <div
                class="
                  gap-8
                  grid grid-cols-1
                  items-center
                  lg:gap-48 lg:grid-cols-2
                "
              >
                <div class="order-last">
                  <div>
                    Sailing the open seas to a new destination requires a sturdy
                    vessel and a competent crew. Ship Shape’s app development
                    company is full of top-tier engineers who tackle your
                    toughest technical challenges every step of the way.
                  </div>
                </div>

                <div>
                  <nuxt-img
                    alt=""
                    class="h-auto m-auto max-w-2xl w-full"
                    format="webp"
                    :height="textSection[0].height"
                    :src="textSection[0].src"
                    :width="textSection[0].width"
                  />
                </div>
              </div>
            </section>

            <section
              class="flex flex-wrap justify-center py-12"
              data-aos="fade-left"
            >
              <div
                class="
                  gap-8
                  grid grid-cols-1
                  items-center
                  lg:gap-48 lg:grid-cols-2
                "
              >
                <div class="order-last lg:order-none">
                  <div>
                    Our software engineers specialize in
                    <nuxt-link to="/services/ember-consulting/"
                      >Ember.js</nuxt-link
                    >,
                    <nuxt-link to="/services/nuxt-consulting/"
                      >Nuxt.js</nuxt-link
                    >,
                    <nuxt-link to="/services/next-consulting/"
                      >Next.js</nuxt-link
                    >, and emerging technologies like
                    <nuxt-link to="/services/serverless-consulting/"
                      >serverless frameworks</nuxt-link
                    >
                    and
                    <nuxt-link to="/services/cloud-native-consulting/"
                      >cloud native applications</nuxt-link
                    >. We combine our high IQ in these technologies with a high
                    EQ to ensure your experience with us is just as good as the
                    final product. Plus, we upskill your team as we work
                    together so they can sustain and improve your products long
                    after our engagement ends.
                  </div>
                </div>

                <div>
                  <nuxt-img
                    alt=""
                    class="h-auto m-auto max-w-2xl w-full"
                    format="webp"
                    :height="textSection[1].height"
                    :src="textSection[1].src"
                    :width="textSection[1].width"
                  />
                </div>
              </div>
            </section>

            <section
              class="flex flex-wrap justify-center py-12"
              data-aos="fade-right"
            >
              <div
                class="
                  gap-8
                  grid grid-cols-1
                  items-center
                  lg:gap-48 lg:grid-cols-2
                "
              >
                <div class="order-last">
                  <div>
                    From the future of fintech, to
                    <nuxt-link to="/work/enigma">cybersecurity</nuxt-link>, and
                    more, we help a wide variety of industries level-up their
                    products and their people.
                  </div>
                </div>

                <div>
                  <nuxt-img
                    alt=""
                    class="h-auto m-auto max-w-2xl w-full"
                    format="webp"
                    :height="textSection[2].height"
                    :src="textSection[2].src"
                    :width="textSection[2].width"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <ServicesBlurbs />

    <SingleQuote class-string="lg:pt-32" :testimonial="testimonial" />

    <LatestInsights
      :latest-blog-post="latestBlogPost"
      :latest-podcast-episode="latestPodcastEpisode"
    />

    <div
      class="
        waves
        blue-waves
        section
        bg-blue-light
        flex flex-wrap
        justify-center
      "
    >
      <div class="section-content py-20">
        <section class="flex flex-wrap justify-center" data-aos="fade">
          <div
            class="gap-8 grid grid-cols-1 items-center lg:gap-48 lg:grid-cols-2"
          >
            <div class="order-last lg:order-none">
              <h2 class="text-4xl lg:text-5xl">Ready to set sail?</h2>

              <div>
                <div>
                  <p>
                    Reach out to tell us more about your goals and chat about
                    how our app development company can help you get there.
                  </p>
                  <div
                    class="
                      flex
                      justify-center
                      mt-3
                      w-full
                      lg:justify-start lg:mt-8
                    "
                  >
                    <nuxt-link
                      class="btn btn-red w-full lg:w-auto"
                      to="/contact/"
                    >
                      Contact us
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nuxt-img
                alt=""
                class="h-auto m-auto max-w-2xl w-full"
                format="webp"
                :height="footerCTA.height"
                :src="footerCTA.src"
                :width="footerCTA.width"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
import truncate from 'lodash.truncate';
import { generateMeta } from '~/utils/meta';
import { enigmaTestimonial as testimonial } from '~/content/testimonials/index.js';

const textSection = [
  { src: '/img/hero-images/design.png', width: '1312', height: '1034' },
  { src: '/img/hero-images/build.png', width: '1312', height: '932' },
  { src: '/img/hero-images/open-source.png', width: '1312', height: '960' }
];

const footerCTA = {
  src: '/img/hero-images/ember-consulting.png',
  width: '1312',
  height: '1040'
};

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock'),
    LatestInsights: () => import('@/components/LatestInsights'),
    ServicesBlurbs: () => import('@/components/ServicesBlurbs'),
    SingleQuote: () => import('@/components/SingleQuote'),
    TwoColumnSection: () => import('@/components/TwoColumnSection')
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
    return { testimonial, textSection, footerCTA };
  },

  head() {
    const title = 'Ember.js, Next.js & Nuxt.js Software Consultant';
    const description =
      'Ship Shape’s software consultants are top-tier engineers who tackle tough tech challenges in Ember.js, Next.js, Nuxt.js, Tailwind CSS, cloud-native, & more.';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
