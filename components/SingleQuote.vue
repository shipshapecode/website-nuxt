<template>
  <div
    class="bg-white flex flex-wrap justify-center px-8 lg:py-16"
    data-aos="fade"
  >
    <div class="section-content bg-navy mb-10 p-4 rounded lg:mb-20 xl:py-20">
      <figure class="flex flex-col p-4 relative text-white xl:px-16 xl:py-0">
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

        <blockquote class="flex-grow p-4 relative z-10 xl:p-8">
          {{ testimonial.quote }}
        </blockquote>

        <figcaption class="flex items-center px-4 xl:px-6">
          <nuxt-img
            class="border-2 border-white h-16 mr-4 rounded-full w-16"
            format="webp"
            height="256"
            loading="lazy"
            width="256"
            :alt="'Headshot of ' + testimonial.name"
            :src="`/img/${testimonial.imgSrc}.jpg`"
          />
          <div class="text-white">
            <p class="mb-0 font-bold text-xl">{{ testimonial.name }}</p>
            <p class="m-0">{{ testimonial.title }}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
