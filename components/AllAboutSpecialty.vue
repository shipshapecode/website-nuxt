// change divs into semantic html where appropriate
<template>
  <div class="section bg-navy flex flex-wrap justify-center">
    <div class="section-content">
      <h2 class="text-white text-4xl" data-aos="fade-up">
        {{ text.h2 }}
      </h2>
      <div
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
          <slot name="unboxed-text">
            <p
              class="
                text-white
                whitespace-pre-line
                lg:content-center lg:place-self-center
              "
            >
              {{ text.unboxedText }}
            </p>
          </slot>
        </div>
        <div
          class="
            bg-blue-light
            whitespace-pre-line
            flex
            items-center
            p-12
            pt-4
            rounded-md
            text-navy
          "
          :class="flipParagraphs ? 'xl:col-span-3' : null"
        >
          <slot name="boxed-text">
            <p class="mb-0">
              {{ text.boxedText }}
            </p>
          </slot>
        </div>
      </div>

      <h3 class="text-white text-2xl" data-aos="fade">
        {{ text.h3 }}
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
