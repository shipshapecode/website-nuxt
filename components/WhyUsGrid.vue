<template>
  <div class="section flex flex-wrap justify-center bg-white">
    <div
      class="section-content relative mb-10 pb-96 pt-8 lg:mb-0 lg:pb-0 lg:pt-0"
    >
      <div class="grid gap-x-40 grid-cols-1 lg:grid-cols-3">
        <div
          class="flex flex-col justify-between h-full lg:py-20"
          data-aos="fade"
        >
          <div>
            <h2 class="text-4xl lg:text-5xl">
              We’ll get your product in ship shape
            </h2>

            <p class="my-8">
              Our engineers provide first-class expertise and service. We are:
            </p>
          </div>

          <div
            class="
              absolute
              bottom-0
              text-center
              w-full
              lg:bottom-auto lg:relative
            "
          >
            <nuxt-img
              alt="Ship Shape octopus mascot in an innertube"
              class="m-auto w-full max-w-xxs h-auto"
              format="webp"
              loading="lazy"
              src="/img/innertube.png"
            />

            <nuxt-link
              class="btn btn-red inline-block mt-6 w-full lg:w-auto"
              to="/about/"
            >
              Meet Our Crew
            </nuxt-link>
          </div>
        </div>

        <div
          class="
            grid grid-cols-1
            gap-x-12
            p-10
            bg-blue-light
            rounded
            lg:col-span-2 lg:grid-cols-2
            xl:px-16
          "
        >
          <div
            v-for="(trait, index) in traits"
            :key="trait.title"
            class="relative p-4 lg:p-10"
            data-aos="flip-down"
            :data-aos-delay="index * 200"
          >
            <inline-svg
              class="absolute -ml-8 mt-2 w-4 h-4"
              src="/svgs/check.svg"
            />

            <h5>{{ trait.title }}</h5>
            <p>
              {{ trait.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traits: [
        {
          title: 'Full-stack',
          description:
            'Once you hire us, it’s smooth sailing. We’re ready to tackle everything tech, including frontend and backend system design.'
        },
        {
          title: 'Specialized',
          description:
            'We’re trusted experts in Ember.js, Nuxt.js, Next.js, and other emerging technologies.'
        },
        {
          title: 'Future-forward',
          description:
            'We build innovative, secure, scalable solutions, while keeping your team on track with the latest trends and best practices.'
        },
        {
          title: 'Collaborative',
          description:
            'A rising tide lifts all boats. We improve your products by providing expert engineering and upskilling your team.'
        },
        {
          title: 'IQ + EQ',
          description:
            'With people skills as strong as our technical chops, your experience with our software consultants is just as good as the work delivered.'
        },
        {
          title: 'Seamless',
          description:
            'The engineer who plans your product’s success is the same person who writes the code. No handoffs or middlemen around here.'
        }
      ]
    };
  }
};
</script>
