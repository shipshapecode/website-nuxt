<template>
  <div class="bg-navy section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="text-center">
        <h6 class="m-0 text-red text-xs uppercase">Get to know us</h6>

        <h2 class="text-white">How we integrate with your team</h2>
      </div>

      <div class="flex flex-wrap w-full lg:flex-nowrap">
        <div
          class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
          itemscope
          itemtype="http://schema.org/Service"
          data-aos="fade-up"
        >
          <div class="flex flex-col w-full">
            <inline-svg
              class="h-20 inline-block mb-12 w-20"
              src="/svgs/icons/retainer.svg"
            />

            <h3 class="text-white text-xl" itemprop="name">
              The Ship Shape Retainer Model
            </h3>

            <p class="flex flex-grow text-white">
              We want to remain available for you throughout your projects. Our
              retainer ensures your company has Ship Shape’s full attention for
              a couple of hours per week. Our on-demand retainer model includes
              pair programming and coaching for your team.
            </p>

            <nuxt-link class="btn btn-white text-center" to="/contact/">
              Learn more
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
          itemscope
          itemtype="http://schema.org/Service"
          data-aos="fade-up"
        >
          <div class="flex flex-col w-full">
            <inline-svg
              class="h-20 inline-block mb-12 w-20"
              src="/svgs/icons/staff.svg"
            />

            <h3 class="text-white text-xl" itemprop="name">
              Staff Augmentation
            </h3>

            <p class="flex flex-grow text-white">
              Consider us a part of your team, serving as added support and
              on-demand Ember.js experts. Ship Shape joins you in the race to
              complete your project milestones, boost your current workflow or
              lend our expertise in Ember.
            </p>

            <nuxt-link class="btn btn-white text-center" to="/contact/">
              Let's Build Together
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-navy-light flex mb-6 p-6 w-full lg:mr-6 lg:p-12 lg:w-1/3"
          itemscope
          itemtype="http://schema.org/Service"
          data-aos="fade-up"
        >
          <div class="flex flex-col w-full">
            <inline-svg
              class="h-20 inline-block mb-12 w-20"
              src="/svgs/icons/mentor.svg"
            />

            <h3 class="text-white text-xl" itemprop="name">Learn the ropes</h3>

            <p class="flex flex-grow text-white">
              Ship Shape created one-on-one programs for in-depth team training
              and mentoring. We help your company refine your skills in the
              latest in Javascript, code writing and Ember.js. development.
            </p>

            <nuxt-link class="btn btn-white text-center" to="/contact/">
              Sign Up for Team Training
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
