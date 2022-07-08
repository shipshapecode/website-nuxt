<template>
  <article
    class="
      bg-white
      flex flex-grow
      p-8
      justify-center
      rounded-md
      lg:p-12
      xl:h-104
    "
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
      <div class="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
        <div
          class="
            flex
            justify-start
            lg:border-grey lg:border-r lg:justify-center
          "
        >
          <NuxtLink class="learn-more" :to="learnMoreLink">
            Learn more
            <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
          </NuxtLink>
        </div>
        <div class="flex justify-start lg:justify-center">
          <NuxtLink class="learn-more" :to="caseStudyLink">
            See it in action
            <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
          </NuxtLink>
        </div>
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
