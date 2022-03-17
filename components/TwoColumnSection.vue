<template>
  <section
    class="section flex flex-wrap justify-center"
    :class="classString"
    data-aos="fade-up"
  >
    <div
      class="
        section-content
        gap-8
        grid grid-cols-1
        items-center
        lg:gap-32 lg:grid-cols-2
      "
    >
      <div
        class="order-last"
        :class="{
          'lg:order-none': !isFlipped
        }"
      >
        <h2
          v-if="header"
          class="text-4xl"
          :data-aos="isFlipped ? 'fade-left' : 'fade-right'"
        >
          {{ header }}
        </h2>
        <div :data-aos="isFlipped ? 'fade-left' : 'fade-right'">
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
          :width="image.width"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    classString: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => {}
    },
    header: {
      type: String,
      default: ''
    },
    isFlipped: {
      type: Boolean,
      default: false
    }
  }
};
</script>
