<template>
  <div>
    <HeroBlock class="about bg-navy flex h-140 items-center text-white">
      <template v-slot:content>
        <h1 class="heading text-white">
          About Ship Shape
        </h1>
        <p>
          Ship Shape leads the future of full-stack web app development. Our
          clients work with us because we are a one-stop boutique firm with over
          25+ years combined experience - from full-stack engineering, to
          front-end to back-end design and more. When you bring your idea to us,
          it's smooth sailing.
        </p>
        <div>
          <nuxt-link class="btn-white" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>
    </HeroBlock>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="max-w-2xl w-full lg:w-1/2">
          <h3 class="text-white">
            Our Clients
          </h3>

          <p class="max-w-lg w-full">
            Ship Shape works with some of the best. We've exceeded client
            expectations and can't wait to help you with your next project.
          </p>
        </div>

        <div class="m-auto max-w-2xl w-full lg:w-1/2">
          <h3 class="text-white">
            Our Community
          </h3>

          <p class="max-w-lg w-full">
            Everything we create is a conscious decision to further Ember as a
            framework and as a community.
          </p>
        </div>
      </div>
    </div>

    <div class="section bg-navy flex justify-center">
      <div class="section-content flex flex-wrap justify-center">
        <div class="w-full">
          <h3 class="text-white">
            Our Team
          </h3>
        </div>
        <div class="flex flex-grow flex-wrap lg:flex-1">
          <div class="max-w-md">
            <img
              class="mb-4"
              src="/img/blog/authors/robbie.jpg"
              alt="A picture of Robbie Wagner"
            />
            <h3 class="heading text-red text-2xl">
              Robbie Wagner, CEO
            </h3>

            <ul class="text-white">
              <li class="list-disc">
                <span class="font-black">Years of experience:</span> Started
                developing in Ember back in 2012 while working for a startup,
                Mail Pilot.
              </li>
              <li class="list-disc">
                <span class="font-black">
                  How did you arrive at Ship Shape?:
                </span>
                I worked at several Ember companies like RSA, and started
                working on the side doing Ember consulting. Eventually, I
                decided to transition full-time and created Ship Shape.
              </li>
              <li class="list-disc">
                <span class="font-black">
                  Involvement in the Community:
                </span>
                I am active on the Ember Learning Team. I am speaking at
                EmberConf in 2020. I’ve also led a sold out workshop at
                EmberConf on performance.
              </li>
              <li class="list-disc">
                <span class="font-black">
                  Where you're from?:
                </span>
                Born and raised in Roanoke, Virginia, I went to school at
                Virginia Tech, and now live in Alexandria, VA.
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-grow flex-wrap lg:flex-1">
          <div class="max-w-md">
            <img
              class="mb-4"
              src="/img/blog/authors/chuck.jpg"
              alt="A picture of Chuck Carpenter"
            />
            <h3 class="heading text-red text-2xl">
              Chuck Carpenter, COO
            </h3>

            <ul class="text-white">
              <li class="list-disc">
                <span class="font-black">Years of experience:</span> 18+ years
                making things on the internet
              </li>
              <li class="list-disc">
                <span class="font-black">
                  How did you arrive at Ship Shape?:
                </span>
                At a time when the lines between web development and design were
                heavily blurred, I learned to create sites buried in HTML tables
                for layout and images cut up in Adobe Photoshop. As those
                standards evolved, I’ve built experiences and applications
                solving issues from media delivery, marketing analytics, and
                entire business process management.
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
