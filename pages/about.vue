<template>
  <article>
    <HeroBlock hero-classes="about bg-blue-light">
      <template #icon>
        <nuxt-img
          class="mt-8"
          alt="Ship Shape employee group photo"
          format="webp"
          loading="lazy"
          src="/img/about/group.png"
        />
      </template>
      <template #content>
        <div class="m-auto max-w-lg">
          <h1 class="leading-tight text-5xl text-navy">
            Meet the crew on board our full-stack software development agency
          </h1>
        </div>
      </template>
    </HeroBlock>

    <section class="section bg-white flex flex-wrap justify-center">
      <div class="section-content">
        <h2
          class="py-6 text-4xl lg:flex lg:justify-center lg:py-12"
          data-aos="fade-up"
        >
          Ship Shape /ˈSHipˌSHāp / adj. “To be in first-class order”
        </h2>
        <div
          class="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-32"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="lg:order-last">
            <p>
              Our name describes exactly what our full-stack software
              development agency does: creates first-class products with
              first-class talent.
            </p>

            <p>
              Whether we’re crafting a greenfield solution with new technologies
              or elevating an existing experience with the latest best
              practices, we love collaborating with teams to solve old problems
              in new ways and help each other grow in the process.
            </p>
          </div>

          <nuxt-img
            alt=""
            format="webp"
            height="1278px"
            src="/img/about/ship-shape-sign.png"
            width="1278px"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <FunFacts />

    <section class="waves blue-waves bg-blue-light section flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <!-- replace with TwoColumnSection -->
        <div class="lg:flex lg:py-20" data-aos="fade-down">
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full pb-12 lg:order-last"
            format="webp"
            height="772"
            src="/img/hero-images/mentoring.png"
            width="1312"
            alt=""
          />
          <div class="pb-20 lg:self-center">
            <h2>Get to know the crew</h2>
            <p>
              Our clients can confirm: Ship Shape’s software development agency
              is made of the best developers in the business. We blend of IQ +
              EQ, ensuring you get talented engineers who are easy to work with
              and blend seamlessly with your team.
            </p>
          </div>
        </div>

        <section class="w-full">
          <div class="space-y-12">
            <!-- two lists - employee and mgmt -->
            <ul>
              <li v-for="(employee, index) in mgmt" :key="employee.name">
                <div
                  class="
                    flex flex-col
                    gap-y-8
                    lg:flex-row lg:items-center lg:gap-x-24 lg:pb-28
                  "
                  data-aos="flip-up"
                >
                  <div class="space-y-8">
                    <h3 class="mb-3">{{ employee.name }}</h3>
                    <p class="font-bold text-2xl text-navy">
                      {{ employee.title }}
                    </p>

                    <p>{{ employee.blurb ? employee.blurb : null }}</p>
                    <ul class="flex space-x-8">
                      <li>
                        <a :href="employee.github" class="github-logo">
                          <span class="sr-only">GitHub</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/github.svg"
                          />
                        </a>
                      </li>
                      <li>
                        <a :href="employee.linkedin" class="linkedin-logo">
                          <span class="sr-only">LinkedIn</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/linkedin.svg"
                          />
                        </a>
                      </li>
                      <li v-if="employee.twitter">
                        <a :href="employee.twitter" class="twitter-logo">
                          <span class="sr-only">Twitter</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/twitter.svg"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <nuxt-img
                    class="
                      filter
                      h-auto
                      grayscale
                      object-cover
                      order-first
                      shadow-lg
                      rounded-lg
                      w-full
                      lg:w-88
                    "
                    :class="{ 'lg:order-last': index % 2 !== 0 }"
                    format="webp"
                    height="734"
                    :src="employee.imgSrc"
                    alt=""
                    width="734"
                  />
                </div>
              </li>
            </ul>

            <ul
              class="
                space-y-24
                lg:space-y-0
                lg:grid
                lg:grid-cols-2
                lg:gap-x-8
                lg:gap-y-28
                lg:pb-24
              "
            >
              <li v-for="employee in team" :key="employee.name">
                <div
                  class="gap-y-8 grid lg:grid-cols-2 lg:gap-x-8"
                  data-aos="flip-up"
                >
                  <div class="self-center">
                    <div class="text-lg font-medium">
                      <h3 class="mb-3">{{ employee.name }}</h3>
                      <p class="text-grey font-medium text-2xl">
                        {{ employee.title }}
                      </p>
                    </div>

                    <ul class="flex mb-0 space-x-8">
                      <li class="mb-0">
                        <a :href="employee.github" class="github-logo">
                          <span class="sr-only">GitHub</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/github.svg"
                          />
                        </a>
                      </li>
                      <li class="mb-0">
                        <a :href="employee.linkedin" class="linkedin-logo">
                          <span class="sr-only">LinkedIn</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/linkedin.svg"
                          />
                        </a>
                      </li>
                      <li v-if="employee.twitter" class="mb-0">
                        <a :href="employee.twitter" class="twitter-logo">
                          <span class="sr-only">Twitter</span>
                          <inline-svg
                            aria-hidden="true"
                            src="/svgs/twitter.svg"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="aspect-h-10 aspect-w-10 order-first">
                    <nuxt-img
                      class="filter grayscale object-cover shadow-lg rounded-lg"
                      format="webp"
                      :src="employee.imgSrc"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <!-- create a LatestInsights component since this is being used in 2 pages now  -->
      </div>
    </section>

    <!-- replace with insights component -->
    <div class="section flex flex-wrap justify-center bg-white">
      <div class="section-content flex flex-col divide-y-2 divide-[#D8E3E8]">
        <div
          class="
            py-24
            lg:flex lg:flex-row lg:place-content-between lg:items-center
          "
          data-aos="fade-down"
        >
          <div>
            <h2>Tap into our knowledge base</h2>
            <p>
              Check out the latest insights from across our app development
              company.
            </p>
          </div>
          <nuxt-link
            class="flex place-content-center btn btn-red w-full lg:w-1/5"
            to="/blog/"
          >
            Get more insights
          </nuxt-link>
        </div>
        <div>
          <div data-aos="fade-left">
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
          <div data-aos="fade-right">
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

    <section class="section bg-navy flex justify-center lg:py-40">
      <div class="section-content flex flex-col justify-center">
        <div
          class="pb-24 lg:flex lg:flex-row lg:items-center lg:gap-x-32"
          data-aos="fade-down"
        >
          <div class="text-white">
            <h2 class="text-white">Giving back</h2>
            <p>
              The people within our app development company do this work for
              passion, not just a paycheck. Here’s how we’re contributing to the
              community and pushing the software space forward.
            </p>
          </div>
          <nuxt-link
            class="flex place-content-center btn btn-red w-full lg:w-1/5"
            to="/blog/"
          >
            Get more contributions
          </nuxt-link>
        </div>
        <BenefitsList :benefits="benefits" />
      </div>
    </section>

    <HeroBlock hero-classes="waves blue-waves bg-blue-light" data-aos="fade">
      <template #content>
        <h2 itemprop="name" class="leading-tight text-5xl">
          Want to chart your course to software success?
        </h2>
        <div>
          <p>
            Reach out to tell us more about your goals and chat about how we can
            help you get there.
          </p>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Contact us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full pt-20"
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
import { formatDateWithDots } from '~/utils/date';
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    BenefitsList: () => import('@/components/BenefitsList'),
    FunFacts: () => import('@/components/FunFacts'),
    HeroBlock: () => import('@/components/HeroBlock')
  },

  async asyncData({ $content }) {
    let latestPodcastEpisode = {};
    try {
      const response = await fetch(
        'https://player.megaphone.fm/playlist/PODRYL5396410253/'
      );
      const podcastData = await response.json();
      latestPodcastEpisode = podcastData?.episodes[0];

      const description = truncate(
        latestPodcastEpisode?.summary?.replace(/(<([^>]+)>)/gi, ''),
        {
          length: 260,
          separator: /,?\.* +/
        }
      );

      latestPodcastEpisode.description = description;
    } catch {}

    const content = await $content('blog/posts')
      .sortBy('date', 'desc')
      .limit(1)
      .fetch();

    const latestBlogPost = content[0];

    return { latestPodcastEpisode, latestBlogPost };
  },

  data() {
    return {
      benefits: [
        {
          imgSrc: '/svgs/icons/client.svg',
          description: 'Strategic Nuxt.js partners'
        },
        {
          imgSrc: '/svgs/icons/staff.svg',
          description: 'Active GitHub contributors'
        },
        {
          imgSrc: '/svgs/icons/fun.svg',
          description: 'Local tech meetup hosts'
        },
        {
          imgSrc: '/svgs/icons/pwa.svg',
          description: 'Whiskey, Web & Whatnot podcasters'
        }
      ],
      mgmt: [
        {
          name: 'Robbie Wagner',
          title: 'CEO',
          imgSrc: '/img/blog/authors/robbie.jpg',
          twitter: 'https://twitter.com/rwwagner90',
          linkedin: 'https://www.linkedin.com/in/robertwilliamwagner/',
          github: 'https://github.com/rwwagner90',
          blurb:
            'Since 2012, Robbie has been using Ember to craft bespoke web applications for companies large and small. He founded Ship Shape in 2017 to provide Ember Consulting for clients and has since ventured into Nuxt and Astro as well. He is a huge Tailwind fanboy and believes it solves CSS once and for all.'
        },
        {
          name: 'Chuck Carpenter',
          title: 'COO',
          imgSrc: '/img/blog/authors/chuck.jpg',
          twitter: 'https://twitter.com/charleswthe3rd',
          linkedin: 'https://www.linkedin.com/in/chuckcarpenter/',
          github: 'https://github.com/chuckcarpenter',
          blurb:
            'Chuck leads teams to deliver high quality, nimble, reliable, and valuable products in order to create demand and increase their user base. He sometimes makes stuff in Javascript, Serverless, and GraphQL.'
        }
      ],
      team: [
        {
          name: 'Rob Cary',
          title: 'Senior Software Engineer',
          imgSrc: '/img/blog/authors/rob.jpg',
          twitter: 'https://twitter.com/r0bc4ry',
          linkedin: 'https://www.linkedin.com/in/r0bc4ry/',
          github: 'https://github.com/r0bc4ry'
        },
        {
          name: 'Jared Galanis',
          title: 'Senior Software Engineer',
          imgSrc: '/img/blog/authors/jared.jpg',
          twitter: 'https://twitter.com/jaredgalanis',
          linkedin: 'https://www.linkedin.com/in/jaredgalanis/',
          github: 'https://github.com/jaredgalanis'
        },
        {
          name: 'Hanna Kim',
          title: 'Software Engineer',
          imgSrc: '/img/blog/authors/hanna.jpg',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/kimhanna/',
          github: 'https://github.com/hannakim91'
        },
        {
          name: 'Marika Shanahan',
          title: 'Software Engineer',
          imgSrc: '/img/blog/authors/marika.jpg',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/marika-shanahan/',
          github: 'https://github.com/monshan'
        }
      ]
    };
  },

  head() {
    const title = 'About Our Software Development Agency';
    const description =
      'Meet Ship Shape, a full-stack software development agency with senior-level engineers who specialize in JavaScript frameworks, serverless architecture, & more.';
    const url = 'https://shipshape.io/about/';

    return generateMeta(title, description, url);
  },

  methods: {
    formatDateWithDots
  }
};
</script>

<style lang="scss">
.github-logo,
.linkedin-logo,
.twitter-logo {
  svg {
    path {
      @apply transition-colors;
      fill: var(--navy-light);
    }
  }

  &:hover {
    svg {
      path {
        fill: var(--red-light);
      }
    }
  }
}

.github-logo {
  svg {
    height: 22px;
    width: 23px;
  }
}

.linkedin-logo {
  svg {
    height: 20px;
    width: 19px;
  }
}

.twitter-logo {
  svg {
    height: 19px;
    width: 23px;
  }
}
</style>
