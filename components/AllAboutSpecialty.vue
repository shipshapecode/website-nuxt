// change divs into semantic html where appropriate
<template>
  <div class="section bg-navy flex flex-wrap justify-center">
    <div class="section-content">
      <div class="grid grid-cols-1 gap-20 mb-32 lg:gap-32 lg:grid-cols-2">
        <div class="text-white" data-aos="fade-up">
          <h2 class="mb-10 text-4xl text-white">{{ text.h2 }}</h2>
          <slot name="unboxed-text">
            <p class="whitespace-pre-line">
              {{ text.unboxedText }}
            </p>
          </slot>
        </div>

        <div
          class="
            bg-blue-light
            flex
            items-center
            p-12
            rounded-md
            text-navy
            lg:mt-16
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <slot name="boxed-text">
            <p class="mb-0">
              {{ text.boxedText }}
            </p>
          </slot>
        </div>
      </div>

      <h3 class="text-white text-2xl" data-aos="fade">
        Some of our favorite Next.js features include:
      </h3>

      <BenefitsList :benefits="benefits" />
    </div>
  </div>
</template>

<script>
export default {
  speedkitComponents: {
    BenefitsList: () => import('@/components/BenefitsList')
  },
  props: {
    text: {
      type: Object,
      required: true
    },
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

<!-- 
    props to pass from specialty page
      - text
        - h2
        - paragraph1 (box)
        - paragraph2 (white on navy)
        - h3
      - benefitCardDetails
        - imgSrc
        - description
      - flipParagraphs: T or F
   -->
