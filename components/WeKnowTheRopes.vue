<template>
  <div class="bg-navy flex flex-wrap justify-center px-8 py-32" data-aos="fade">
    <div class="section-content">
      <div class="grid grid-cols-1 w-full md:grid-cols-2">
        <div>
          <h3 class="text-4xl text-white lg:text-5xl">We know the ropes</h3>
          <p class="text-white">
            Ship Shape is a full-stack engineering and app development company
            that specializes in JavaScript frameworks and scalable,
            future-forward technology.
          </p>
        </div>
        <div class="gap-1 grid grid-cols-2 text-white">
          <div
            v-for="technology in technologies"
            :key="technology.label"
            class="bg-[#1B3B5D] flex items-center justify-center"
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
    href: 'https://emberjs.com/',
    imgSrc: '/svgs/technologies/ember.svg',
    label: 'Ember.js'
  },
  {
    href: 'https://www.electronjs.org/',
    imgSrc: '/svgs/technologies/electron.svg',
    label: 'Electron'
  },
  {
    href: 'https://tailwindcss.com/',
    imgSrc: '/svgs/technologies/tailwind.svg',
    label: 'Tailwind CSS'
  },
  {
    href: 'https://nuxtjs.org/',
    imgSrc: '/svgs/technologies/nuxt.svg',
    label: 'Nuxt.js'
  },
  {
    href: 'https://www.serverless.com/',
    imgSrc: '/svgs/technologies/serverless.svg',
    label: 'Serverless'
  },
  {
    href: 'https://nextjs.org/',
    imgSrc: '/svgs/technologies/next.svg',
    label: 'Next.js'
  }
];

export default {
  data() {
    return { technologies };
  }
};
</script>
