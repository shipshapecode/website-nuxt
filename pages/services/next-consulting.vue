<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock class="next-consulting">
      <template #content>
        <h1 itemprop="name">
          Boost performance and easily make the leap from React to Next.js
        </h1>
        <div>
          <nuxt-link class="btn btn-red" to="/contact/">
            Let’s get started
          </nuxt-link>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          src="/img/hero-images/next-consulting.png"
        />
      </template>
    </HeroBlock>

    <div class="section flex flex-wrap justify-center">
      <div class="section-content">
        <div class="grid grid-cols-1 gap-x-32 lg:grid-cols-5">
          <div class="lg:col-span-3">
            <h2 class="text-2xl text-white">All about Next.js</h2>

            <p>
              Whether you’re dipping your toes into the app development waters
              and wondering, “What is Next.js?” or you already know the ropes
              and are exploring this open-source React framework, you’ve come to
              the right place.
            </p>

            <p>
              At Ship Shape, our veteran engineers recommend Next.js because
              it’s one of the most performant frameworks. With server-side
              rendering (SSR) and routing, TypeScript support, smart bundling,
              route pre-fetching, and more, it’s a great choice for
              production-ready web apps.
            </p>
          </div>

          <div
            class="
              bg-white
              flex
              items-center
              p-16
              text-navy-card-light
              lg:col-span-2
            "
          >
            <p>
              Teams who have worked in generic React apps can easily make the
              leap into Next.js. If you’re wondering “What is Next.js, and can
              my team transition?” Ship Shape’s experienced developers not only
              consult and develop in Next.js, but also train and mentor teams to
              maintain and improve their code over time.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section waves white-waves flex flex-wrap justify-center"></div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  speedkitComponents: {
    HeroBlock: () => import('@/components/HeroBlock')
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
