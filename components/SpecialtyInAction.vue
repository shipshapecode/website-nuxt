<template>
  <section class="section flex flex-wrap justify-center" data-aos="fade-down">
    <div class="section-content">
      <h2 class="pb-8 text-4xl">{{ specialty }} in action</h2>
      <div
        v-if="caseStudies.length > 1"
        class="space-y-24 lg:grid lg:grid-flow-col lg:space-y-0 lg:space-x-6"
      >
        <article
          v-for="(study, index) in caseStudies"
          :key="index + 1"
          class="bg-blue-light rounded-b-lg flex flex-col"
          data-aos="flip-down"
          :data-aos-delay="200 * index"
        >
          <div class="p-8 relative order-last lg:p-12">
            <h3>
              <inline-svg
                class="
                  logo-navy
                  h-8
                  max-w-full
                  mb-8
                  self-start
                  w-auto
                  pointer-events-none
                "
                :src="study.logoSrc"
              />
            </h3>
            <p class="mb-16">
              {{ study.text }}
            </p>
            <nuxt-link class="learn-more" to="/work/expel/">
              Dive deeper
              <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
            </nuxt-link>
          </div>
          <div
            class="
              bg-red
              justify-center
              pt-8
              px-8
              relative
              rounded-t-lg
              lg:pt-12 lg:px-12
            "
          >
            <div class="bg-white h-48 rounded-t-lg w-full">
              <nuxt-img
                class="
                  object-cover object-top
                  h-full
                  max-w-full
                  rounded-t-lg
                  w-full
                "
                :src="study.imgSrc"
                :alt="study.imgAlt"
              />
            </div>
          </div>
        </article>
      </div>

      <article
        v-else
        class="
          bg-blue-light
          rounded-b-lg
          lg:grid lg:grid-cols-2 lg:rounded-l-lg lg:gap-x-12
        "
        data-aos="flip-down"
      >
        <div
          class="
            bg-red
            flex
            justify-center
            items-end
            pt-12
            px-8
            relative
            rounded-t-lg
            lg:order-last lg:rounded-t-lg
            xl:pt-24 xl:px-12
          "
        >
          <div class="bg-white h-56 rounded-t-lg w-full">
            <nuxt-img
              class="
                object-cover object-top
                h-full
                max-w-full
                w-full
                rounded-t-lg
                mb-0
              "
              :src="caseStudies[0].imgSrc"
              :alt="caseStudies[0].imgAlt"
            />
          </div>
        </div>
        <div class="p-8 lg:p-12">
          <h3>
            <inline-svg
              class="
                h-8
                max-w-full
                mb-8
                self-start
                w-auto
                logo-navy
                pointer-events-none
              "
              :src="caseStudies[0].logoSrc"
            />
          </h3>
          <p class="mb-16">
            {{ caseStudies[0].text }}
          </p>
          <nuxt-link class="learn-more" to="/work/enigma/">
            Dive deeper
            <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    specialty: {
      type: String,
      default: ''
    },
    caseStudies: {
      type: Array,
      required: true
    }
  }
};
</script>
