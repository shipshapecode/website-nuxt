<template>
  <div>
    <HeroBlock class="services">
      <template v-slot:content>
        <h1 class="heading">
          Ember & Open Source Mentoring
        </h1>
        <p>
          With Ship Shape’s deep experience in Ember.js, product strategy, user
          experience, design, engineering, and project management, our
          consultants are an impactful addition to your team - both short and
          long term.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="m-auto max-w-2xl" />
      </template>
    </HeroBlock>

    <MentoringBlurbs />
  </div>
</template>

<script>
import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
import HeroBlock from '~/components/HeroBlock.vue';
import MentoringBlurbs from '~/components/MentoringBlurbs.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    EmberConsultingIcon,
    HeroBlock,
    MentoringBlurbs
  },

  head() {
    const title = 'Ember & Open Source Mentoring';
    const description =
      'Ship Shape provides open source and Ember training ' +
      'to take your team to the next level. Sign up for a team session today.';
    const url = 'https://shipshape.io/services/mentoring/';

    return generateMeta(title, description, url);
  }
};
</script>
