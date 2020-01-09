<template>
  <div>
    <HeroBlock class="services">
      <template v-slot:content>
        <h1 class="heading">
          Mentoring
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          volutpat leo. Donec quis faucibus leo. Donec eleifend aliquam lacus,
          vitae viverra tellus.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Work with us
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="max-w-2xl" />
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
    const title = 'Mentoring';
    const description = 'TODO';
    const url = 'https://shipshape.io/services/';

    return generateMeta(title, description, url);
  }
};
</script>
