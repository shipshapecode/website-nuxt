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
        <div class="mb-20 w-full">
          <h6 class="m-0 text-red text-xs uppercase">Our team</h6>

          <h2 class="text-navy text-5xl">Get to know us</h2>
        </div>

        <div class="flex flex-grow flex-wrap">
          <div class="w-full lg:w-1/2">
            <img
              class="mb-4"
              src="/img/blog/authors/robbie.jpg"
              alt="A picture of Robbie Wagner"
            />
          </div>

          <div class="w-full lg:w-1/2">
            <h3 class="text-navy text-3xl">Robbie Wagner, CEO</h3>

            <ul>
              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  Robbie's experience
                </div>
                <p>
                  Started developing in Ember back in 2012 while working for a
                  startup, Mail Pilot. Specialties: Ember.js, Nuxt.js,
                  JavaScript
                </p>
              </li>

              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  How did you arrive at Ship Shape?
                </div>

                <p>
                  I worked at several Ember companies like RSA, and started
                  working on the side doing Ember consulting. Eventually, I
                  decided to transition full-time and created Ship Shape.
                </p>
              </li>

              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  What's your involvement in the community?
                </div>

                <p>
                  I am active on the Ember Learning Team. I am speaking at
                  EmberConf in 2020. I’ve also led a sold out workshop at
                  EmberConf on performance.
                </p>
              </li>

              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  Which projects are you most proud of?
                </div>

                <p>
                  I'm proud of the work our guys did on Jebbit and I’m also
                  proud of the dashboards I have been building for my current
                  client, Expel!
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-grow flex-wrap mt-24 lg:flex-row-reverse">
          <div class="w-full lg:w-1/2">
            <img
              class="mb-4"
              src="/img/blog/authors/chuck.jpg"
              alt="A picture of Chuck Carpenter"
            />
          </div>

          <div class="w-full lg:w-1/2">
            <h3 class="text-navy text-3xl">Chuck Carpenter, COO</h3>

            <ul>
              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  Chuck's experience
                </div>

                <p>
                  Leading teams to deliver high quality, nimble, reliable, and
                  valuable products in order to create demand and increase their
                  user base. Sometimes I make stuff in Javascript, Python, and
                  GraphQL.
                </p>
              </li>

              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  How did you arrive at Ship Shape?
                </div>

                <p>
                  At a time when the lines between web development and design
                  were heavily blurred, I learned to create sites buried in HTML
                  tables for layout and images cut up in Adobe Photoshop. As
                  those standards evolved, I’ve built experiences and
                  applications solving issues from media delivery, marketing
                  analytics, and entire business process management.
                </p>
              </li>
              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">Awards or Honors</div>

                <p>
                  Webby Award Winner for the National Geographic Magazine’s
                  website and also the Direct Selling Association Innovation in
                  Technology Award on office system.
                </p>
              </li>

              <li class="max-w-xl">
                <div class="font-black text-navy text-xl">
                  What projects are you most proud of?
                </div>

                <p>
                  Building the completely redesigned Jebbit MVP for their
                  campaign flow. Jebbit had an extremely complex system for
                  creating campaigns and after a lot of research with their
                  customers, an entirely simplified experience has been created
                  to allow for detailed configuration and true ease to get from
                  start to live campaign quickly.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="py-12 lg:py-24">
            <div class="space-y-12">
              <div
                class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
              >
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Our Team
                </h2>
                <p class="text-xl text-gray-500">
                  Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                  dolor ultricies donec risus sodales. Tempus quis et.
                </p>
              </div>
              <ul
                class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              >
                <li>
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        src="/img/blog/authors/robbie.jpg"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Robbie Wagner</h3>
                        <p class="text-indigo-600">CEO</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=ELhezQOata&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Chuck Carpenter</h3>
                        <p class="text-indigo-600">COO</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=ELhezQOata&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Rob Cary</h3>
                        <p class="text-indigo-600">Senior Software Engineer</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="object-cover shadow-lg rounded-lg"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=ELhezQOata&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Hanna Kim</h3>
                        <p class="text-indigo-600">Front-end Developer</p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clip-rule="evenodd"
                              />
                            </svg>
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
