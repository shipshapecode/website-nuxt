<template>
  <div class="section flex flex-wrap justify-center">
    <div
      class="
        section-content
        gap-20
        grid grid-cols-1
        items-center
        lg:gap-32 lg:grid-cols-2
      "
    >
      <div class="lg:order-last" data-aos="fade-up">
        <nuxt-img
          alt=""
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="1034"
          src="/img/hero-images/ember-consulting.png"
          width="1312"
        />
      </div>
      <div>
        <h2 data-aos="fade-left">
          We ❤️ the
          {{ communityName ? communityName : 'Developer' }} Community
        </h2>
        <slot name="content">
          <p data-aos="fade">
            We’re a team of makers who are passionate about improving software
            products and the people who create them.
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    communityName: {
      type: String,
      default: ''
    }
  }
};
</script>
