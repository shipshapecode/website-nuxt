<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="app-tours">
      <template #content>
        <h1 itemprop="name">Whiskey Web and Whatnot</h1>
        <p>
          Join Ship Shape's CEO Robbie, and COO Chuck as they discuss whiskey,
          web development, and a wide range of whatnot.
        </p>
        <div class="flex flex-wrap">
          <a href="https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf">
            <inline-svg
              class="h-12 mb-3 mr-3 w-auto"
              src="/svgs/spotify-podcasts.svg"
            />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/whiskey-web-and-whatnot/id1552776603?uo=4"
          >
            <inline-svg class="h-12 w-auto" src="/svgs/apple-podcasts.svg" />
          </a>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl my-4 rounded-lg w-full"
          :src="require('~/assets/img/hero-images/www.png?webp')"
        />
      </template>
    </HeroBlock>
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock
  },

  head() {
    const title = 'Whiskey Web and Whatnot - Podcast';
    const description =
      'Join Robbie and Chuck from Ship Shape as they discuss whiskey, web development, and a wide range of whatnot.';
    const url = 'https://shipshape.io/whiskey-web-and-whatnot-podcast';

    return generateMeta(title, description, url);
  }
};
</script>
