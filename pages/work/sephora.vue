<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Sephora</h1>

        <p>Sephora description here</p>
      </div>

      <div
        class="
          bg-black
          flex flex-wrap
          h-64
          md:h-140
          justify-center
          items-center
        "
      >
        <div class="w-1/2">
          <inline-svg
            class="fill-white h-auto w-full"
            src="/svgs/clients/sephora.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>TODO</p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="TODO"
            class="flex"
            format="webp"
            src="/img/work/expel/nist-overview.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>TODO</p>

        <p>TODO</p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="TODO"
            class="flex"
            format="webp"
            src="/img/work/expel/nist-overview.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>TODO</p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="TODO"
            class="flex"
            format="webp"
            src="/img/work/expel/nist-overview.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>TODO</p>
      </div>

      <div class="bg-expel-green flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <nuxt-img
            alt="TODO"
            class="flex"
            format="webp"
            src="/img/work/expel/nist-overview.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>TODO</p>
      </div>

      <BottomLinks
        next-link="/work/expel/"
        next-link-text="Expel"
        previous-link="/work/netflix/"
        previous-link-text="Netflix"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks
  },

  head() {
    const title = 'Case Study - Sephora';
    const description =
      'See how Ship Shape helped Sephora improve Nuxt.js performance and modularize their build.';
    const url = 'https://shipshape.io/work/sephora/';

    return generateMeta(title, description, url);
  }
};
</script>
