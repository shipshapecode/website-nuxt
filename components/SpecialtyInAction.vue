<template>
  <section class="section flex flex-wrap justify-center" data-aos="fade-down">
    <div class="section-content">
      <h2 class="pb-8 text-4xl">{{ specialty }} in action</h2>
      <div :class="`gap-5 grid grid-cols-1 lg:grid-cols-${caseStudies.length}`">
        <article
          v-for="(study, index) in caseStudies"
          :key="index + 1"
          data-aos="flip-down"
          :data-aos-delay="200 * index"
        >
          <div
            class="
              bg-blue-light
              rounded-b-lg
              flex
              h-full
              relative
              w-full
              transition-all
              hover:-translate-y-5
            "
            :class="{
              'flex-col': caseStudies.length > 1,
              'flex-col lg:flex-row-reverse': caseStudies.length === 1
            }"
          >
            <div
              class="flex flex-col flex-grow p-8 relative order-last lg:p-12"
            >
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
              <p class="flex-grow mb-16">
                {{ study.text }}
              </p>
              <nuxt-link class="learn-more" :to="`/work/${study.linkName}/`">
                Dive deeper
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
            </div>
            <div
              class="
                bg-red
                flex
                items-end
                justify-center
                px-8
                relative
                rounded-t-lg
                lg:pt-12 lg:px-12
              "
              :class="{
                'pt-8': caseStudies.length > 1,
                'pt-12 xl:pt-24 xl:px-12': caseStudies.length === 1
              }"
            >
              <div
                class="bg-white rounded-t-lg w-full"
                :class="{
                  'h-48': caseStudies.length > 1,
                  'h-56': caseStudies.length === 1
                }"
              >
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
          </div>
        </article>
      </div>
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
