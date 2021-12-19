<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="nuxt-consulting">
      <template #content>
        <h1 itemprop="name">Nuxt Consulting</h1>
        <p>
          Nuxt.js is a higher-level framework that simplifies the development of
          universal or single page Vue apps. With Nuxt.js, Ship Shape's team can
          write and build universal apps simply.
        </p>
        <div>
          <nuxt-link class="btn btn-red" to="/contact/">
            Get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          src="/img/hero-images/nuxt-consulting.png"
        />
      </template>
    </HeroBlock>

    <div class="bg-blue-light section flex flex-wrap justify-center">
      <div class="section-content">
        <h2 class="text-center text-navy w-full">Why use Nuxt?</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div class="bg-navy p-6 lg:p-12">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/modular.svg"
            />

            <h5 class="text-white">Modular</h5>

            <p class="text-white">
              Nuxt is based on a powerful modular architecture. You can choose
              from more than 50 modules to make your development faster and
              easier. You don't have to reinvent the wheel to get PWA benefits,
              add Google Analytics to your page or generate a sitemap.
            </p>
          </div>
          <div class="bg-navy p-6 lg:p-12">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/chart.svg"
            />

            <h5 class="text-white">Performant</h5>

            <p class="text-white">
              With Nuxt.js, your application will be optimized out of the box.
              We do our best to build performant applications by utilizing
              Vue.js and Node.js best practices. To squeeze every unnecessary
              bit out of your app Nuxt includes a bundle analyzer and lots of
              opportunities to fine-tune your app.
            </p>
          </div>

          <div class="bg-navy p-6 lg:p-12">
            <nuxt-img
              class="h-20 inline-block mb-8 w-auto"
              src="/svgs/icons/fun.svg"
            />

            <h5 class="text-white">Enjoyable</h5>

            <p class="text-white">
              Nuxt takes developer experience seriously, and is always improving
              to make using it more enjoyable. Expect appealing solutions,
              descriptive error messages, powerful defaults and detailed
              documentation.
            </p>
          </div>

          <div class="bg-navy p-6 lg:p-12">
            <nuxt-img
              class="h-24 inline-block mb-4 w-24"
              src="/svgs/icons/static.svg"
            />

            <h5 class="text-white">Static / PWA</h5>

            <p class="text-white">
              Nuxt.js supports several rendering modes, including server side
              rendering or "universal", static or "JAMStack", and classic single
              page application (SPA) mode to allow for maximum flexibility out
              of the box.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
  },

  head() {
    const title = 'Nuxt.js Software Consultants & Developers';
    const description =
      'As a proven leader in Nuxt development, Ship Shape turns ideas into industry-leading products. ' +
      'Contact us to get started.';
    const url = 'https://shipshape.io/services/nuxt-consulting/';

    return generateMeta(title, description, url);
  }
};
</script>
