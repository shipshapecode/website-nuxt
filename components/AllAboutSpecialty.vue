<template>
  <section class="section bg-navy flex flex-wrap justify-center">
    <div class="section-content">
      <h2 class="text-white text-4xl" data-aos="fade-up">
        <slot name="h2" />
      </h2>
      <section
        class="
          grid
          space-y-12
          pb-28
          lg:pt-4 lg:grid-cols-2 lg:gap-32 lg:space-y-0
        "
        :class="flipParagraphs ? 'xl:grid-cols-8' : null"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          :class="
            flipParagraphs
              ? 'xl:grid xl:col-span-5 order-last pt-12 xl:pt-0'
              : 'grid'
          "
        >
          <p class="text-white mb-0 lg:content-center lg:place-self-center">
            <slot name="unboxed-text" />
          </p>
        </div>
        <div
          class="bg-blue-light flex items-center p-12 rounded-md text-navy"
          :class="flipParagraphs ? 'xl:col-span-3' : null"
        >
          <p class="mb-0">
            <slot name="boxed-text" />
          </p>
        </div>
      </section>

      <section>
        <h3 class="text-white text-2xl" data-aos="fade">
          <slot name="h3" />
        </h3>
        <BenefitsList :benefits="benefits" />
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    benefits: {
      type: Array,
      required: true
    },
    flipParagraphs: {
      type: Boolean,
      default: false
    }
  }
};
</script>
