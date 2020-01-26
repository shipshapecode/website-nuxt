<template>
  <div class="hero flex flex-wrap justify-center">
    <div class="section-content mb-8">
      <div
        class="flex flex-wrap items-center flex-col-reverse justify-between lg:flex-row"
      >
        <div class="w-full lg:pr-12 lg:w-1/2" data-aos="fade-up">
          <div class="m-auto max-w-2xl">
            <slot name="content" />
          </div>
        </div>

        <div
          class="w-full text-center lg:pr-12 lg:w-1/2 lg:p-12"
          data-aos="fade-up"
        >
          <slot name="icon" />
        </div>
      </div>
    </div>
  </div>
</template>
