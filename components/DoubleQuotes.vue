<template>
  <div
    class="bg-white flex flex-wrap justify-center px-8 lg:py-16"
    data-aos="fade"
  >
    <div
      class="
        section-content
        bg-navy
        grid grid-cols-1
        gap-y-10
        mb-16
        p-4
        rounded
        lg:mb-20
        xl:grid-cols-2 xl:py-20
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
            mt-[2.75rem]
            top-0
            transform
            translate-y-6
            w-10
            z-0
            xl:mt-12 xl:w-16 xl:translate-y-0
          "
          src="/svgs/quotes.svg"
        />

        <p class="flex-grow p-4 relative z-10 xl:p-8">
          {{ testimonial.quote }}
        </p>

        <div class="flex items-center px-4 xl:px-6">
          <nuxt-img
            class="border-2 border-white h-16 mr-4 rounded-full w-16"
            format="webp"
            height="128px"
            loading="lazy"
            width="128px"
            :alt="'Headshot of ' + testimonial.name"
            :src="`/img/${testimonial.imgSrc}.jpg`"
          />
          <div class="text-white">
            <h5 class="mb-1 text-white text-xl">{{ testimonial.name }}</h5>
            <p class="m-0">{{ testimonial.title }}</p>
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
