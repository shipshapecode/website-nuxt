<template>
  <article
    class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
    data-aos="fade-up"
    itemscope
    itemtype="http://schema.org/Service"
  >
    <div class="flex flex-col max-w-2xl w-full">
      <h3 class="mb-0" itemprop="name">
        <slot name="header" />
      </h3>
      <p class="flex-grow">
        <slot name="description" />
      </p>
      <div
        class="
          flex flex-col
          pt-4
          gap-y-2
          lg:flex-row lg:justify-between lg:px-6
        "
      >
        <nuxt-link class="learn-more" :to="learnMoreLink">
          Learn more
          <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
        </nuxt-link>
        <nuxt-link class="learn-more" :to="caseStudyLink">
          See it in action
          <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
        </nuxt-link>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    learnMoreLink: {
      type: String,
      required: true
    },
    caseStudyLink: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
