<template>
  <div class="flex flex-wrap justify-center py-16 px-8" data-aos="fade">
    <div
      class="
        section-content
        bg-navy
        divide-y-2
        grid grid-cols-1
        p-8
        md:divide-x-2 md:divide-y-0 md:grid-cols-2 md:p-20
      "
    >
      <div class="flex flex-col p-8 relative text-white md:px-16 md:py-0">
        <inline-svg
          class="h-8 mb-3 self-start w-auto"
          src="/svgs/clients/sephora-white.svg"
        />

        <inline-svg
          class="absolute h-auto mt-12 w-16 top-0 z-0"
          src="/svgs/quotes.svg"
        />

        <p class="flex-grow relative p-6 z-10">
          Ship Shape delivered beyond our expectations. They pointed out things
          we had never even thought of or knew about. Our team learned a huge
          amount of new information and new tricks, and we still have them on
          retainer for very specific questions. Plus, Ship Shape is the
          friendliest team of engineers I've worked with.
        </p>

        <div class="flex">
          <img
            class="border-white h-10 rounded-full w-10"
            :src="require('~/assets/img/hero-images/app-development.png?webp')"
          />
          <div class="text-grey">
            <h5 class="mb-1 text-grey text-xl">Donald Piret</h5>
            <p>Director of Engineering at Sephora</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col p-8 relative text-white md:px-16 md:py-0">
        <inline-svg
          class="fill-white h-8 mb-3 self-start w-auto"
          src="/svgs/clients/expel.svg"
        />

        <inline-svg
          class="absolute h-auto mt-12 w-16 top-0 z-0"
          src="/svgs/quotes.svg"
        />

        <p class="flex-grow relative p-6 z-10">
          Ship Shape was a great aid to us because they were the voice of Ember
          best practices to keep our code base current, and they were able to
          deliver on critical features on our roadmap that we did not have the
          bandwidth to complete on time. I would absolutely recommend Ship Shape
          to any other business that is looking for an incredibly skilled
          partner to work closely with their teams to produce and deliver the
          highest value.
        </p>

        <div class="flex">
          <img
            class="border-white h-10 rounded-full w-10"
            :src="require('~/assets/img/hero-images/app-development.png?webp')"
          />
          <div class="text-grey">
            <h5 class="mb-1 text-grey text-xl">Roger Studner</h5>
            <p>Chief Architect at Expel</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
