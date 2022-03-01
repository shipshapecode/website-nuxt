<template>
  <div
    class="section flex flex-wrap justify-center bg-white"
    data-aos="fade-down"
  >
    <div class="section-content flex flex-col divide-y-2 divide-[#D8E3E8]">
      <div
        class="
          pb-24
          lg:flex lg:flex-row lg:place-content-between lg:items-center
        "
      >
        <h3>Check out the latest insights</h3>
        <nuxt-link class="btn btn-red w-full lg:w-1/5" to="/blog/">
          Read on
        </nuxt-link>
      </div>
      <div>
        <MediaCard
          media-type="podcast"
          img-src="/img/hero-images/www.png"
          :details="latestPodcastEpisode"
        />
        <MediaCard :details="latestBlogPost" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  speedkitComponents: { MediaCard: () => import('@/components/MediaCard') },
  props: {
    latestPodcastEpisode: {
      type: Object,
      default: () => {}
    },
    latestBlogPost: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
