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
      <h2>Fun facts about us</h2>
      <ul>
        <li>We consistently contribute to the open-source community.</li>
        <li>We run a climate-positive shop.</li>
        <li>
          We started a podcast for developers to share our love for whiskey, web
          development, and whatnot.
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

    <div class="bg-blue-light section flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h2 class="text-navy text-5xl">Get to know the crew</h2>
        </div>

        <div class="w-full">
          <div class="py-6">
            <div class="space-y-12">
              <div
                class="
                  space-y-5
                  sm:space-y-4
                  md:max-w-xl
                  lg:max-w-3xl
                  xl:max-w-none
                "
              >
                <p class="text-lg text-gray-500">
                  Our clients can confirm: Ship Shape’s software development
                  agency is made of the best developers in the business. We
                  blend of IQ + EQ, ensuring you get talented engineers who are
                  easy to work with and blend seamlessly with your team.
                </p>
              </div>
              <ul
                class="
                  space-y-12
                  sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
                  lg:grid-cols-3 lg:gap-x-8
                "
              >
                <li v-for="employee in team" :key="employee.name">
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
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
      </div>
    </div>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center lg:flex-nowrap">
        <div
          class="
            bg-navy-light
            flex flex-col
            justify-center
            min-h-80
            mt-12
            p-6
            w-full
            lg:h-96 lg:mr-12 lg:mt-0 lg:p-24 lg:w-1/2
          "
        >
          <div class="h-24 inline-block mb-8 mt-8 w-24">
            <inline-svg src="/svgs/icons/client.svg" />
          </div>

          <h3 class="text-2xl text-white lg:text-4xl">Our Clients</h3>

          <p class="max-w-lg text-white w-full">
            Ship Shape works with some of the best. We've exceeded client
            expectations and can't wait to help you with your next project.
          </p>
        </div>

        <div
          class="
            bg-navy-light
            flex flex-col
            justify-center
            m-auto
            min-h-80
            mt-12
            p-6
            w-full
            lg:h-96 lg:p-24 lg:w-1/2
          "
        >
          <div class="h-24 inline-block mb-8 mt-8 w-24">
            <inline-svg src="/svgs/icons/community.svg" />
          </div>

          <h3 class="text-2xl text-white lg:text-4xl">Our Community</h3>

          <p class="max-w-lg text-white w-full">
            Everything we create is a conscious decision to further Ember as a
            framework and as a community.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
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
