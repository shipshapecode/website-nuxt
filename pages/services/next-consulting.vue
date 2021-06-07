<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="nuxt-consulting">
      <template #content>
        <h1 itemprop="name">Next.js Consulting</h1>
        <p>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed. With Next.js, Ship Shape's team can help you solve your
          mission critical problems in a fraction of the time.
        </p>
        <div>
          <nuxt-link class="btn btn-navy" to="/contact/">
            Get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <img
          class="h-auto m-auto max-w-2xl w-full"
          :src="require('~/assets/img/hero-images/next-consulting.png?webp')"
        />
      </template>
    </HeroBlock>

    <WorkedWith />

    <div class="bg-navy section flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-center text-white w-full">Why use Next.js?</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div class="bg-navy-light p-6 lg:p-12">
            <inline-svg
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/pages/nuxt-consulting/modular.svg"
            />

            <h5 class="text-white">Zero Config</h5>

            <p>
              Stop spending hours configuring Webpack and be able to be
              productive immediately. Next.js handles all the complicated build
              setup for you, so developing features is a simple `yarn dev` away.
            </p>
          </div>
          <div class="bg-navy-light p-6 lg:p-12">
            <inline-svg
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/pages/nuxt-consulting/performance.svg"
            />

            <h5 class="text-white">Batteries Included</h5>

            <p>
              Next.js includes image optimization, internationalization (i18n),
              analytics, code splitting, and everything you need to have the
              most performant app possible.
            </p>
          </div>

          <div class="bg-navy-light p-6 lg:p-12">
            <inline-svg
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/pages/nuxt-consulting/fun.svg"
            />

            <h5 class="text-white">Developer Experience</h5>

            <p>
              TypeScript is a first class citizen in Next.js, and developer
              experience is a top priority. Next.js provides automatic route
              creation from `pages`, fast refresh, and API endpoint creation.
            </p>
          </div>

          <div class="bg-navy-light p-6 lg:p-12">
            <inline-svg
              class="h-24 inline-block mb-4 w-24"
              src="/svgs/pages/nuxt-consulting/static.svg"
            />

            <h5 class="text-white">Hybrid: SSG and SSR</h5>

            <p>
              Next supports both static site generation (SSG) and server side
              rendering (SSR) in the same project, so some routes can be static,
              while others load dynamic data at runtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/HeroBlock.vue';
import WorkedWith from '~/components/WorkedWith.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    HeroBlock,
    WorkedWith
  },

  head() {
    const title = 'Next.js Software Consultants & Developers';
    const description =
      'As a proven leader in Next.js development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/next-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
