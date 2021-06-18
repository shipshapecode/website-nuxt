<template>
  <div>
    <HeroBlock class="services">
      <template #content>
        <h1>Ember & Open Source Mentoring</h1>
        <p>
          With Ship Shape's deep experience in Ember.js, product strategy, user
          experience, design, engineering, and project management, our
          consultants are an impactful addition to your team - both short and
          long term.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/mentoring.png?webp')"
        />
      </template>
    </HeroBlock>

    <MentoringBlurbs />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
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
