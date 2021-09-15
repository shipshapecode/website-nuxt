<template>
  <div
    class="
      waves
      blue-waves
      bg-blue-light
      flex flex-wrap
      justify-center
      px-8
      py-16
      lg:py-20 lg:pb-32
    "
  >
    <div class="section-content">
      <div
        class="grid grid-cols-1 gap-x-24 w-full lg:grid-cols-2"
        data-aos="fade-right"
      >
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl lg:text-5xl">We know the ropes</h2>
          <p>
            Ship Shape is a full-stack engineering and app development company
            that specializes in JavaScript frameworks and scalable,
            future-forward technology.
          </p>
        </div>
        <div class="gap-1 grid grid-cols-2 auto-rows-fr text-white">
          <div
            v-for="technology in technologies"
            :key="technology.label"
            class="bg-navy flex items-center justify-center rounded"
          >
            <a :href="technology.href" :aria-label="technology.label">
              <nuxt-img
                class="w-full h-full max-w-xxs px-6 py-3"
                loading="lazy"
                :alt="technology.label + ' logo in white on a navy background.'"
                :height="technology.height"
                :src="technology.imgSrc"
                :width="technology.width"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const technologies = [
  {
    height: '125',
    href: '/services/ember-consulting/',
    imgSrc: '/svgs/technologies/ember.svg',
    label: 'Ember.js',
    width: '300'
  },
  {
    height: '78',
    href: '/services/nuxt-consulting/',
    imgSrc: '/svgs/technologies/nuxt.svg',
    label: 'Nuxt.js',
    width: '414'
  },
  {
    height: '124',
    href: '/services/next-consulting/',
    imgSrc: '/svgs/technologies/next.svg',
    label: 'Next.js',
    width: '207'
  },
  {
    height: '38',
    href: 'https://tailwindcss.com/',
    imgSrc: '/svgs/technologies/tailwind.svg',
    label: 'Tailwind CSS',
    width: '300'
  },
  {
    height: '31',
    href: 'https://www.serverless.com/',
    imgSrc: '/svgs/technologies/serverless.svg',
    label: 'Serverless',
    width: '204'
  },
  {
    height: '46',
    href: 'https://www.electronjs.org/',
    imgSrc: '/svgs/technologies/electron.svg',
    label: 'Electron',
    width: '300'
  }
];

export default {
  data() {
    return { technologies };
  }
};
</script>
