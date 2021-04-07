<template>
  <div>
    <HeroBlock class="about text-white">
      <template #content>
        <img
          class="mt-8"
          alt="Ship Shape office desk"
          :src="require('~/assets/img/about/desk.jpg?webp')"
        />
      </template>

      <template #icon>
        <div class="m-auto max-w-2xl">
          <h1 class="text-white">About Ship Shape</h1>

          <p>
            Ship Shape leads the future of full-stack web app development. Our
            clients work with us because we are a one-stop boutique firm with
            over 25+ years combined experience - from full-stack engineering, to
            front-end to back-end design and more. When you bring your idea to
            us, it's smooth sailing.
          </p>

          <div>
            <nuxt-link class="btn btn-white" to="/contact/">
              Let's build together
            </nuxt-link>
          </div>
        </div>
      </template>
    </HeroBlock>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center lg:flex-nowrap">
        <div
          class="bg-navy-light flex flex-col justify-center min-h-80 mt-12 p-6 w-full lg:h-96 lg:mr-12 lg:mt-0 lg:p-24 lg:w-1/2"
        >
          <div class="h-24 inline-block mb-8 mt-8 w-24">
            <inline-svg src="/svgs/pages/about/client.svg" />
          </div>

          <h3 class="text-2xl text-white lg:text-4xl">Our Clients</h3>

          <p class="max-w-lg w-full">
            Ship Shape works with some of the best. We've exceeded client
            expectations and can't wait to help you with your next project.
          </p>
        </div>

        <div
          class="bg-navy-light flex flex-col justify-center m-auto min-h-80 mt-12 p-6 w-full lg:h-96 lg:p-24 lg:w-1/2"
        >
          <div class="h-24 inline-block mb-8 mt-8 w-24">
            <inline-svg src="/svgs/pages/about/community.svg" />
          </div>

          <h3 class="text-2xl text-white lg:text-4xl">Our Community</h3>

          <p class="max-w-lg w-full">
            Everything we create is a conscious decision to further Ember as a
            framework and as a community.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white section flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h6 class="m-0 text-red text-xs uppercase">Our team</h6>

          <h2 class="text-navy text-5xl">Get to know us</h2>
        </div>

        <div class="w-full">
          <div class="py-6">
            <div class="space-y-12">
              <div
                class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
              >
                <p class="text-xl text-gray-500">
                  Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                  dolor ultricies donec risus sodales. Tempus quis et.
                </p>
              </div>
              <ul
                class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              >
                <li v-for="employee in team" :key="employee.name">
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="filter grayscale object-cover shadow-lg rounded-lg"
                        :src="employee.imgSrc"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>{{ employee.name }}</h3>
                        <p class="text-indigo-600">{{ employee.title }}</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
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
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock
  },

  data() {
    return {
      team: [
        {
          name: 'Robbie Wagner',
          title: 'CEO',
          imgSrc: '/img/blog/authors/robbie.jpg',
          twitter: 'https://twitter.com/rwwagner90',
          linkedin: '',
          github: 'https://github.com/rwwagner90'
        },
        {
          name: 'Chuck Carpenter',
          title: 'COO',
          imgSrc: '/img/blog/authors/chuck.jpg',
          twitter: '',
          linkedin: '',
          github: 'https://github.com/chuckcarpenter'
        },
        {
          name: 'Rob Cary',
          title: 'Senior Software Engineer',
          imgSrc: '/img/blog/authors/rob.jpg',
          twitter: 'https://twitter.com/r0bc4ry',
          linkedin: '',
          github: 'https://github.com/r0bc4ry'
        },
        {
          name: 'Jared Galanis',
          title: 'Senior Software Engineer',
          imgSrc: '/img/blog/authors/jared.jpg',
          twitter: 'https://twitter.com/jaredgalanis',
          linkedin: '',
          github: 'https://github.com/jaredgalanis'
        },
        {
          name: 'Hanna Kim',
          title: 'Software Engineer',
          imgSrc:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=ELhezQOata&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          twitter: '',
          linkedin: '',
          github: 'https://github.com/hannakim91'
        }
      ]
    };
  },

  head() {
    const title = 'About Us';
    const description =
      'We can help streamline your Ember.js or Nuxt project. Learn how ' +
      'Ship Shape designs and develops next-level software and app solutions.';
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
      fill: $navy-light;
    }
  }

  &:hover {
    svg {
      path {
        fill: $red;
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
