<template>
  <div>
    <HeroBlock class="about text-white">
      <template v-slot:content>
        <img
          class="mt-8"
          src="/img/about/desk.jpg"
          alt="Ship Shape office desk"
        />
      </template>

      <template v-slot:icon>
        <div class="m-auto max-w-2xl">
          <h1 class="text-white">
            About Ship Shape
          </h1>

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
      <div
        class="section-content flex flex-wrap justify-center lg:flex-no-wrap"
      >
        <div
          class="bg-navy-light flex flex-col justify-center min-h-80 mt-12 p-6 w-full lg:h-96 lg:mr-12 lg:mt-0 lg:p-24 lg:w-1/2"
        >
          <div class="h-24 inline-block mb-8 mt-8 w-24">
            <inline-svg src="/svgs/pages/about/client.svg" />
          </div>

          <h3 class="text-2xl text-white lg:text-4xl">
            Our Clients
          </h3>

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

          <h3 class="text-2xl text-white lg:text-4xl">
            Our Community
          </h3>

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
          <h6 class="m-0 text-red text-xs uppercase">
            Our team
          </h6>

          <h2 class="text-navy text-5xl">
            Get to know us
          </h2>
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
            <h3 class="text-navy text-3xl">
              Robbie Wagner, CEO
            </h3>

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
            <h3 class="text-navy text-3xl">
              Chuck Carpenter, COO
            </h3>

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
                <div class="font-black text-navy text-xl">
                  Awards or Honors
                </div>

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
