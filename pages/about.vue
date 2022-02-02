<template>
  <div>
    <HeroBlock hero-classes="about bg-blue-light">
      <template #content>
        <nuxt-img
          class="mt-8"
          alt="Ship Shape employee group photo"
          format="webp"
          src="/img/about/group-oct-2021.jpeg"
        />
      </template>

      <template #icon>
        <div class="m-auto max-w-2xl">
          <h1 class="text-navy">
            Meet the crew on board our full-stack software development agency
          </h1>
        </div>
      </template>
    </HeroBlock>

    <div class="section bg-white">
      <h2>Ship Shape /ˈSHipˌSHāp / adj. “To be in first-class order”</h2>
      <p>
        Our name describes exactly what our full-stack software development
        agency does: creates first-class products with first-class talent.
        <br />
        <br />
        Whether we’re crafting a greenfield solution with new technologies or
        elevating an existing experience with the latest best practices, we love
        collaborating with teams to solve old problems in new ways and help each
        other grow in the process.
      </p>
      <nuxt-img
        class="mt-8"
        alt="Ship Shape office desk"
        format="webp"
        src="/img/about/desk.jpg"
      />
    </div>

    <div class="section bg-white">
      <div class="section-content">
        <h2>Fun facts about us</h2>
        <ul class="navy-bullets">
          <li>We consistently contribute to the open-source community.</li>
          <li>We run a climate-positive shop.</li>
          <li>
            We started a podcast for developers to share our love for whiskey,
            web development, and whatnot.
          </li>
          <li>We have team members in 8+ locations across North America.</li>
        </ul>
        <nuxt-img
          class="mt-8"
          alt="Ship Shape office desk"
          format="webp"
          src="/img/about/desk.jpg"
        />
      </div>
    </div>

    <div class="bg-blue-light section flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
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
          <h2>Get to know the crew</h2>
          <p>
            Our clients can confirm: Ship Shape’s software development agency is
            made of the best developers in the business. We blend of IQ + EQ,
            ensuring you get talented engineers who are easy to work with and
            blend seamlessly with your team.
          </p>
        </div>

        <div class="w-full">
          <div class="py-6">
            <div class="space-y-12">
              <ul
                class="
                  space-y-12
                  sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
                  lg:grid-cols-3 lg:gap-x-8
                "
              >
                <li v-for="employee in team" :key="employee.name">
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-3">
                      <nuxt-img
                        class="
                          filter
                          grayscale
                          object-cover
                          shadow-lg
                          rounded-lg
                        "
                        format="webp"
                        :src="employee.imgSrc"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>{{ employee.name }}</h3>
                        <p class="text-indigo-600">{{ employee.title }}</p>
                        <p>{{ employee.blurb ? employee.blurb : null }}</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li v-if="employee.twitter">
                          <a :href="employee.twitter" class="twitter-logo">
                            <span class="sr-only">Twitter</span>
                            <inline-svg
                              aria-hidden="true"
                              src="/svgs/twitter.svg"
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
                        <li>
                          <a :href="employee.github" class="github-logo">
                            <span class="sr-only">GitHub</span>
                            <inline-svg
                              aria-hidden="true"
                              src="/svgs/github.svg"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- create a LatestInsights component since this is being used in 2 pages now  -->
      </div>
    </div>
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
          <div>
            <h3>Tap into our knowledge base</h3>
            <p>
              Check out the latest insights from across our app development
              company.
            </p>
          </div>
          <nuxt-link class="btn btn-red w-full lg:w-1/5" to="/blog/">
            Get more insights
          </nuxt-link>
        </div>
        <div>
          <div>
            <h3 class="py-12">Latest Podcast</h3>
            <div
              :key="post.slug"
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
          <div>
            <h3 class="py-12">Latest Blog Post</h3>
            <div
              :key="post.slug"
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

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center lg:flex-nowrap">
        <div
          class="
            pb-24
            lg:flex lg:flex-row lg:place-content-between lg:items-center
          "
        >
          <div class="text-white">
            <h2 class="text-white">Giving back</h2>
            <p>
              The people within our app development company do this work for
              passion, not just a paycheck. Here’s how we’re contributing to the
              community and pushing the software space forward.
            </p>
          </div>
          <nuxt-link class="btn btn-red w-full lg:w-1/5" to="/blog/">
            Get more contributions
          </nuxt-link>
        </div>
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
              src="/svgs/icons/client.svg"
            />

            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Strategic Nuxt.js partners
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/staff.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Active GitHub contributors
            </p>
          </div>

          <div
            class="flex flex-col items-center px-16"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <nuxt-img
              class="h-20 inline-block mb-8 mt-12 w-auto lg:mt-0"
              src="/svgs/icons/fun.svg"
            />
            <p class="mb-12 text-center lg:m-0 lg:w-40">
              Local tech meetup hosts
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
              Whiskey, Web & Whatnot podcasters
            </p>
          </div>
        </div>
      </div>
    </div>

    <HeroBlock hero-classes="waves blue-waves bg-blue-light">
      <template #content>
        <h2 itemprop="name" class="leading-tight text-5xl">
          Want to chart your course to software success?
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
import { formatDateWithDots } from '~/utils/date';
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
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
    return {
      team: [
        {
          name: 'Robbie Wagner',
          title: 'CEO',
          imgSrc: '/img/blog/authors/robbie.jpg',
          twitter: 'https://twitter.com/rwwagner90',
          linkedin: 'https://www.linkedin.com/in/robertwilliamwagner/',
          github: 'https://github.com/rwwagner90',
          blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
          name: 'Chuck Carpenter',
          title: 'COO',
          imgSrc: '/img/blog/authors/chuck.jpg',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/chuckcarpenter/',
          github: 'https://github.com/chuckcarpenter',
          blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
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
          name: 'Jessica Justice',
          title: 'Software Engineer',
          imgSrc: '/img/blog/authors/jessica.jpg',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/jessica-justice2/',
          github: 'https://github.com/m1073496'
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

.navy-bullets {
  list-style: outside;
  margin-left: 1.5rem;
  li::marker {
    color: #1b3b5d;
    vertical-align: middle;
    font-size: 1.5rem;
  }

  // li {
  //   display: flex;
  //   align-self: end;
  // }

  // li::before {
  //   content: '\2022';
  //   color: navy;
  //   display: inline-block;
  //   width: 1em;
  //   margin-left: -1rem;
  // }
}
</style>
