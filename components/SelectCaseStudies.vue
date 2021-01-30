<template>
  <div class="bg-navy flex flex-wrap justify-center px-8 py-32" data-aos="fade">
    <div class="section-content">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-7">
        <div
          class="lg:col-span-3 lg:h-full lg:flex lg:flex-col lg:justify-center"
        >
          <div
            class="font-bold leading-12 leading-snug mb-24 text-5xl text-white lg:max-w-sm w-full"
          >
            Select case studies
          </div>

          <nuxt-link
            to="/work/"
            class="btn btn-white text-center w-full lg:w-56"
          >
            See all work
          </nuxt-link>
        </div>
        <div class="bg-navy-card-dark relative rounded lg:col-span-2">
          <div
            class="bg-navy-card-light flex p-16 justify-center rounded-t text-center"
          >
            <inline-svg
              class="fill-white h-16 w-auto"
              src="/svgs/clients/netflix.svg"
            />
          </div>
          <div class="p-8">
            <p class="text-red">01</p>

            <p class="leading-8 font-bold mb-24 text-white text-2xl">
              Building finance tools for the world's number one streaming
              platform.
            </p>

            <nuxt-link
              class="absolute bg-white bottom-0 flex h-16 items-center justify-center m-6 right-0 rounded-full duration-150 transition-colors w-16 hover:bg-red"
              to="/work/netflix/"
            >
              <inline-svg
                class="fill-current h-4 w-auto"
                src="/svgs/arrow.svg"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="bg-navy-card-dark relative rounded lg:col-span-2">
          <div class="bg-navy-card-light flex p-16 justify-center rounded-t">
            <inline-svg
              class="fill-white h-16 w-auto"
              src="/svgs/clients/expel.svg"
            />
          </div>
          <div class="p-8">
            <p class="text-red">02</p>

            <p class="leading-8 font-bold mb-24 text-white text-2xl">
              Building a NIST dashboard with custom visualizations.
            </p>

            <nuxt-link
              class="absolute bg-white bottom-0 flex h-16 items-center justify-center m-6 right-0 rounded-full duration-150 transition-colors w-16 hover:bg-red"
              to="/work/expel/"
            >
              <inline-svg
                class="fill-current h-4 w-auto"
                src="/svgs/arrow.svg"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
