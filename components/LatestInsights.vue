<template>
  <section
    class="section flex flex-wrap justify-center bg-white"
    data-aos="fade-down"
  >
    <div class="section-content flex flex-col divide-y-2 divide-[#D8E3E8]">
      <header
        class="
          pb-12
          lg:flex lg:flex-row lg:place-content-between lg:items-center
        "
      >
        <h2 class="text-4xl lg:text-5xl">Check out the latest insights</h2>
        <nuxt-link class="btn btn-red w-full lg:w-1/5" to="/blog/">
          Read on
        </nuxt-link>
      </header>
      <div>
        <MediaCard
          media-type="podcast"
          :img-src="podcastImg.src"
          :details="latestPodcastEpisode"
          data-aos="fade-up"
        />
        <MediaCard :details="latestBlogPost" data-aos="fade-up" />
      </div>
    </div>
  </section>
</template>

<script>
const podcastImg = {
  src: '/img/hero-images/www.png'
};

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
  },
  data() {
    return { podcastImg };
  }
};
</script>
