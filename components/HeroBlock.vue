<template>
  <div class="hero flex flex-wrap justify-center relative">
    <div class="section-content mb-8 relative z-10">
      <div class="grid grid-cols-1 grid-flow-row lg:grid-cols-5">
        <div class="pb-8 pt-2 lg:col-span-3 lg:order-2 lg:pl-24 lg:py-12">
          <slot name="icon" />
        </div>

        <div class="flex flex-col justify-center lg:col-span-2 lg:order-1">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
