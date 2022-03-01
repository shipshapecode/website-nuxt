<template>
  <section class="section flex flex-wrap justify-center" :class="heroClasses">
    <div
      class="
        section-content
        gap-20
        grid grid-cols-1
        items-center
        lg:gap-32 lg:grid-cols-2
      "
    >
      <div :class="isFlipped ? 'lg:order-last' : 'null'">
        <h2 class="text-4xl" data-aos="fade-left">
          {{ content.h2 }}
        </h2>

        <slot name="content">
          <p data-aos="fade-left">
            {{ content.paragraph }}
          </p>
        </slot>
      </div>
      <div data-aos="fade-up">
        <nuxt-img
          alt=""
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          :height="content.imgHeight"
          :src="content.imgSrc"
          width="1312"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heroClasses: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default: () => {}
    },
    isFlipped: {
      type: Boolean,
      default: false
    }
  }
};
</script>
