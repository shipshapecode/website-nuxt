<template functional>
  <div class="flex flex-wrap justify-center py-16 px-8" data-aos="fade">
    <div
      class="
        section-content
        bg-white
        divide-y-2
        grid grid-cols-1
        p-8
        md:divide-x-2 md:divide-y-0 md:grid-cols-2 md:p-20
      "
    >
      <div class="flex items-center justify-center p-8 md:px-16 md:py-0">
        <img
          class="h-auto m-auto w-full"
          :src="require('~/assets/img/hero-images/app-development.png?webp')"
        />
      </div>
      <div class="p-8 md:px-16 md:py-0">
        <h3 class="leading-tight text-4xl lg:text-5xl">
          Let’s build the future together
        </h3>

        <p>
          Ship Shape’s software consultants solve complex software and app
          development problems with top-tier coding expertise, superior service,
          and speed.
        </p>

        <p>
          In a sea of choices, our senior-level development crew rises above the
          rest by delivering the best solutions for fintech, cybersecurity, and
          other fast-growing industries.
        </p>
      </div>
    </div>
  </div>
</template>
