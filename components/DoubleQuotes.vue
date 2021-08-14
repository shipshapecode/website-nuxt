<template>
  <div class="flex flex-wrap justify-center py-16 px-8" data-aos="fade">
    <div
      class="
        section-content
        bg-navy
        divide-grey divide-y-2
        grid grid-cols-1
        p-4
        rounded
        xl:divide-x-2 xl:divide-y-0 xl:grid-cols-2 xl:p-20
      "
    >
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="flex flex-col p-4 relative text-white xl:px-16 xl:py-0"
      >
        <inline-svg
          class="h-8 max-w-full mb-3 self-start w-auto"
          :src="testimonial.svgSrc"
        />

        <inline-svg
          class="
            absolute
            h-auto
            mt-12
            w-16
            top-0
            transform
            translate-y-6
            z-0
            xl:translate-y-0
          "
          src="/svgs/quotes.svg"
        />

        <p class="flex-grow relative z-10 xl:p-8">
          {{ testimonial.quote }}
        </p>

        <div class="flex xl:px-6">
          <nuxt-img
            class="border-2 border-white h-16 mr-4 rounded-full w-16"
            format="webp"
            :src="`/img/${testimonial.imgSrc}.jpg`"
          />
          <div class="text-white">
            <h5 class="mb-1 text-white text-xl">{{ testimonial.name }}</h5>
            <p>{{ testimonial.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  }
};
</script>
