<template>
  <div class="flex flex-wrap" data-aos="fade">
    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="m-auto max-w-2xl w-full lg:m-0">
        <Netflix class="'h-10 mb-3 w-auto'" />

        <p class="lg:h-12">
          Building finance tools for the world's number one streaming platform.
        </p>

        <nuxt-link class="btn btn-navy mb-12" to="/work/netflix/">
          View Case
        </nuxt-link>
      </div>
    </div>

    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="m-auto max-w-2xl w-full lg:m-0">
        <AcquiaLogo class="h-20 mb-3 w-auto" />

        <p class="lg:h-12">
          Rebuilding the personalization platform for better UX and performance.
        </p>

        <nuxt-link class="btn btn-navy mb-12" to="/work/acquia/">
          View Case
        </nuxt-link>
      </div>
    </div>

    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="m-auto max-w-2xl w-full lg:m-0">
        <JebbitLogo class="h-10 mb-3 w-auto" />

        <p class="lg:h-12">
          Simplifying the way Jebbit customers create their marketing campaigns.
        </p>

        <nuxt-link class="btn btn-navy mb-12" to="/work/jebbit/">
          View Case
        </nuxt-link>
      </div>
    </div>

    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="m-auto max-w-2xl w-full lg:m-0">
        <h2 class="h-10 mb-3 w-auto">
          Brokermate
        </h2>

        <p class="lg:h-12">
          Creating in depth site tours with Shepherd
        </p>

        <nuxt-link class="btn btn-navy mb-12" to="/work/brokermate/">
          View Case
        </nuxt-link>
      </div>
    </div>

    <div class="flex flex-wrap pt-12 pb-12 w-full lg:pr-4 lg:w-1/2">
      <div class="m-auto max-w-2xl w-full lg:m-0">
        <SocialCodeLogo class="h-10 mb-3 pb-2 pt-2 w-auto" />

        <p class="lg:h-12">
          Refactoring a suite of apps and addons for clients to manage social
          media
        </p>

        <nuxt-link class="btn btn-navy mb-12" to="/work/socialcode/">
          View Case
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AcquiaLogo from '~/assets/svgs/clients/acquia-droplet.svg?inline';
import Netflix from '~/assets/svgs/clients/netflix.svg?inline';
import JebbitLogo from '~/assets/svgs/clients/jebbit.svg?inline';
import SocialCodeLogo from '~/assets/svgs/clients/socialcode.svg?inline';

export default {
  components: {
    AcquiaLogo,
    JebbitLogo,
    Netflix,
    SocialCodeLogo
  }
};
</script>
