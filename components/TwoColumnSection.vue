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
          <slot name="header" />
        </h2>
        <div data-aos="fade-left">
          <slot name="content" />
        </div>
      </div>
      <div data-aos="fade-up">
        <nuxt-img
          alt=""
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          :height="image.height"
          :src="image.src"
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
    image: {
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
