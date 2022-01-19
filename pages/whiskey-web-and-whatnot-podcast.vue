<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="podcast">
      <template #content>
        <h1 itemprop="name">Whiskey Web and Whatnot</h1>
        <p>
          Join Ship Shape's CEO Robbie, and COO Chuck as they discuss whiskey,
          web development, and a wide range of whatnot.
        </p>
        <div class="flex flex-wrap">
          <a href="https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf">
            <nuxt-img
              class="h-12 mb-3 mr-3 w-auto"
              src="/svgs/spotify-podcasts.svg"
            />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/whiskey-web-and-whatnot/id1552776603?uo=4"
          >
            <nuxt-img class="h-12 w-auto" src="/svgs/apple-podcasts.svg" />
          </a>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl my-4 rounded-lg w-full"
          format="webp"
          height="1344"
          src="/img/hero-images/www.png"
          width="1344"
        />
      </template>
    </HeroBlock>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
  },

  head() {
    const title = 'Whiskey, Web, & Whatnot: A Software Engineering Podcast';
    const description =
      'Join Ship Shape CEO Robbie Wagner and COO Chuck Carpenter for this software engineering podcast for developers who love whiskey, web development, and whatnot.';
    const url = 'https://shipshape.io/whiskey-web-and-whatnot-podcast';

    return generateMeta(title, description, url);
  }
};
</script>
