<template functional>
  <div class="bg-blue-light flex flex-wrap justify-center py-16 px-8">
    <div class="section-content gap-x-48 grid grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center justify-center w-full" data-aos="fade">
        <img
          class="h-auto m-auto max-w-md w-full lg:max-w-full"
          :src="
            require('~/assets/img/hero-images/app-development-alt.png?webp')
          "
        />
      </div>
      <div class="flex flex-col justify-center w-full">
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
