<template functional>
  <div class="flex flex-wrap justify-center py-16 px-8" data-aos="fade">
    <div
      class="
        section-content
        bg-white
        divide-grey-transparent divide-y-2
        grid grid-cols-1
        p-4
        lg:divide-x-2 lg:divide-y-0 lg:grid-cols-2 lg:p-10
      "
    >
      <div class="flex items-center justify-center p-4 py-8 w-full lg:pr-20">
        <img
          class="h-auto m-auto max-w-md w-full lg:max-w-full"
          :src="require('~/assets/img/hero-images/app-development.png?webp')"
        />
      </div>
      <div class="flex flex-col justify-center p-4 py-8 w-full lg:pl-20">
        <h2 class="text-4xl lg:text-5xl">Let’s build the future together</h2>

        <p>
          Ship Shape’s software consultants solve complex software and app
          development problems with top-tier coding expertise, superior service,
          and speed.
        </p>

        <p class="mb-0">
          In a sea of choices, our senior-level development crew rises above the
          rest by delivering the best solutions for fintech, cybersecurity, and
          other fast-growing industries.
        </p>
      </div>
    </div>
  </div>
</template>
