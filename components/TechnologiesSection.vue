<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content bg-grey-transparent p-8" data-aos="flip-down">
      <div class="flex flex-wrap relative xl:px-16 xl:py-8">
        <div class="mt-32 w-full text-center xl:text-left xl-mb-16 xl:mt-8">
          <h3 class="text-4xl xl:text-5xl">Technologies we use</h3>
        </div>

        <div class="flex justify-center mt-8 w-full xl:w-auto">
          <div class="grid grid-cols-2 text-grey lg:grid-cols-3 xl:-ml-8">
            <div>
              <a href="https://emberjs.com/" aria-label="Ember.js">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/ember.svg"
                />
              </a>
            </div>
            <div>
              <a href="https://www.electronjs.org/" aria-label="Electron">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/electron.svg"
                />
              </a>
            </div>
            <div>
              <a href="https://tailwindcss.com/" aria-label="Tailwind CSS">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/tailwind.svg"
                />
              </a>
            </div>
            <div>
              <a href="https://nuxtjs.org/" aria-label="Nuxt.js">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/nuxt.svg"
                />
              </a>
            </div>
            <div>
              <a href="https://www.serverless.com/" aria-label="Serverless">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/serverless.svg"
                />
              </a>
            </div>
            <div>
              <a href="https://nextjs.org/" aria-label="Next.js">
                <inline-svg
                  class="w-full h-full p-8 max-w-xxs"
                  src="/svgs/technologies/next.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <img
          class="absolute h-auto left-1/2 -mt-40 transform -translate-x-1/2 w-56 xl:bottom-0 xl:left-auto xl:mb-16 xl:mr-16 xl:mt-0 xl:right-0 xl:transform-none xl:w-120"
          :src="require('~/assets/img/innertube.png?webp')"
        />
      </div>
    </div>
  </div>
</template>
