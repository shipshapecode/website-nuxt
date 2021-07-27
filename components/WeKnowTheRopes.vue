<template>
  <div class="bg-navy flex flex-wrap justify-center px-8 py-32" data-aos="fade">
    <div class="section-content">
      <div class="grid grid-cols-1 gap-x-24 w-full lg:grid-cols-2">
        <div>
          <inline-svg class="h-auto mb-4 w-10" src="/svgs/fish.svg" />
          <h2 class="text-white">We know the ropes</h2>
          <p class="text-white">
            Ship Shape is a full-stack engineering and app development company
            that specializes in JavaScript frameworks and scalable,
            future-forward technology.
          </p>
        </div>
        <div class="gap-1 grid grid-cols-2 auto-rows-fr text-white">
          <div
            v-for="technology in technologies"
            :key="technology.label"
            class="bg-[#1B3B5D] flex items-center justify-center p-8 md:p-0"
          >
            <a :href="technology.href" :aria-label="technology.label">
              <inline-svg
                class="w-full h-full p-4 max-w-xxs lg:p-8"
                :src="technology.imgSrc"
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
    href: '/services/ember-consulting/',
    imgSrc: '/svgs/technologies/ember.svg',
    label: 'Ember.js'
  },
  {
    href: '/services/nuxt-consulting/',
    imgSrc: '/svgs/technologies/nuxt.svg',
    label: 'Nuxt.js'
  },
  {
    href: '/services/next-consulting/',
    imgSrc: '/svgs/technologies/next.svg',
    label: 'Next.js'
  },
  {
    href: 'https://tailwindcss.com/',
    imgSrc: '/svgs/technologies/tailwind.svg',
    label: 'Tailwind CSS'
  },
  {
    href: 'https://www.serverless.com/',
    imgSrc: '/svgs/technologies/serverless.svg',
    label: 'Serverless'
  },
  {
    href: 'https://www.electronjs.org/',
    imgSrc: '/svgs/technologies/electron.svg',
    label: 'Electron'
  }
];

export default {
  data() {
    return { technologies };
  }
};
</script>
