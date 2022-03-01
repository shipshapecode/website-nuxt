<template>
  <article>
    <HeroBlock hero-classes="services waves blue-waves bg-blue-light !pb-20">
      <template #content>
        <h1 itemprop="name" class="leading-tight text-5xl lg:text-6xl">
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

    <section class="section bg-white flex flex-wrap justify-center !pt-32">
      <div>
        <h2 class="py-12 text-4xl lg:text-5xl" data-aos="fade-left">
          High impact, low ego
        </h2>
        <!-- replace these divs with TwoColumnSection -->
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
              <nuxt-link to="/services/ember-consulting/">Ember.js</nuxt-link>,
              <nuxt-link to="/services/nuxt-consulting/">Nuxt.js</nuxt-link>,
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
    </section>

    <ServicesBlurbs />

    <SingleQuote :testimonial="testimonial" />

    <LatestInsights
      :latest-blog-post="latestBlogPost"
      :latest-podcast-episode="latestPodcastEpisode"
    />

    <HeroBlock hero-classes="waves blue-waves bg-blue-light">
      <template #content>
        <h2 itemprop="name" class="leading-tight text-4xl lg:text-5xl">
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
  </article>
</template>

<script>
import truncate from 'lodash.truncate';
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
    LatestInsights: () => import('@/components/LatestInsights'),
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
  }
};
</script>
