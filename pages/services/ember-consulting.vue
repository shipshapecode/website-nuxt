<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="ember-consulting">
      <template v-slot:content>
        <h1
          class="heading"
          itemprop="name"
        >
          Ember.js Consulting and Training
        </h1>
        <p>
          We've been using Ember since 2012, and have helped countless clients, from startups
          to large corporations, build scalable and maintainable apps that stand the test of time.
        </p>
        <div>
          <nuxt-link class="btn-navy" to="/contact/">
            Let's build together
          </nuxt-link>
        </div>
      </template>

      <template v-slot:icon>
        <EmberConsultingIcon class="max-w-2xl"/>
      </template>
    </HeroBlock>

    <div class="section quote bg-grey-transparent flex flex-wrap justify-center">
      <div class="section-content">
        <div class="font-bold text-5xl">
          “
        </div>

        <div itemprop="review" itemscope itemtype="http://schema.org/Review">
          <h2 class="font-light text-navy text-2xl lg:text-4xl" itemprop="reviewBody">
            Ship Shape knows what they’re doing. A thoughtful approach, pristine code and a 200% effort in everything they do, makes
            recommending them a no-brainer.
          </h2>

          <p
            class="font-bold"
            itemprop="author"
            itemscope
            itemtype="http://schema.org/Person"
          >
            <span itemprop="name">
              James Dixon
            </span>,
            <span itemprop="jobTitle">
              Founder
            </span>
            of
            <a href="https://www.scoutforpets.com/">
              Scout
            </a>
          </p>
        </div>
      </div>
    </div>

    <WhyEmber/>
    <CommunityInvolvement/>
  </div>
</template>

<script>
  import CommunityInvolvement from '~/components/CommunityInvolvement.vue';
  import EmberConsultingIcon from '~/assets/svgs/hero-images/ember-consulting.svg?inline';
  import HeroBlock from '~/components/HeroBlock.vue';
  import WhyEmber from '~/components/WhyEmber';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      CommunityInvolvement,
      EmberConsultingIcon,
      HeroBlock,
      WhyEmber
    },

    head() {
      const title = 'Ember.js Consulting';
      const description = 'From startups to Fortune 100 companies, our Ember.js ' +
       'consultants transform ideas into industry-leading software. ' +
       'Learn more about our app development services.';
      const url = 'https://shipshape.io/ember-consulting/';

      return generateMeta(title, description, url);
    }
  };
</script>