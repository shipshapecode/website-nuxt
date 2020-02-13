<template>
  <div>
    <HeroBlock class="ember-consulting">
      <template v-slot:content>
        <h1 class="heading">
          Building Our Community
        </h1>
        <p>
          Ember.js is a project built by an open source community. From creating
          Ember addons and working on the Ember docs sites to organizing the
          Ember.js DC meetup and sponsoring workshops at EmberConf, we help
          further Ember as a framework and as a community.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/services/">
            Learn more
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>

    <CommunityInvolvement />

    <RecentBlogPosts :posts="posts" />
  </div>
</template>

<script>
import CommunityInvolvement from '~/components/CommunityInvolvement.vue';
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import RecentBlogPosts from '~/components/RecentBlogPosts.vue';
import { generateMeta } from '~/utils/meta';
import { getBlogData } from '~/utils/blog';

export default {
  components: {
    CommunityInvolvement,
    EmberConsultingIcon,
    HeroBlock,
    RecentBlogPosts
  },

  async asyncData() {
    const { posts } = await getBlogData();
    return { posts: posts.slice(0, 3) };
  },

  head() {
    const title = 'Social Community';
    const description =
      "Let's become shipmates. Follow Ship Shape on Github, Twitter, " +
      'and LinkedIn for the latest updates on our award-winning projects.';
    const url = 'https://shipshape.io/community/';

    return generateMeta(title, description, url);
  }
};
</script>
