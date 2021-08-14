<template>
  <div class="section flex flex-wrap justify-center bg-white">
    <div class="section-content relative pb-96 lg:pb-0">
      <div class="grid gap-x-40 grid-cols-1 lg:grid-cols-3">
        <div class="flex flex-col justify-between h-full">
          <div>
            <h2 class="text-4xl lg:text-5xl">
              We’ll get your product in ship shape
            </h2>

            <p class="mt-2">
              Our engineers provide first-class expertise and service. We are:
            </p>
          </div>

          <div
            class="
              absolute
              bottom-0
              text-center
              w-full
              lg:bottom-auto lg:mb-24 lg:relative
            "
          >
            <nuxt-img
              class="m-auto w-full max-w-xxs h-auto"
              format="webp"
              src="/img/innertube.png"
            />

            <nuxt-link class="btn btn-red inline-block mt-10" to="/about/">
              Meet Our Crew
            </nuxt-link>
          </div>
        </div>

        <div
          class="
            grid grid-cols-1
            p-10
            bg-blue-light
            rounded
            lg:col-span-2 lg:grid-cols-2
          "
        >
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>Full-stack</h4>
            <p>
              Once you hire us, it’s smooth sailing. We’re ready to tackle
              everything tech, including frontend and backend system design.
            </p>
          </div>
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>Specialized</h4>

            <p>
              We’re trusted experts in Ember.js, Nuxt.js, Next.js, and other
              emerging technologies.
            </p>
          </div>
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>Future-forward</h4>

            <p>
              We build innovative, secure, scalable solutions, while keeping
              your team on track with the latest trends and best practices.
            </p>
          </div>
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>Collaborative</h4>

            <p>
              A rising tide lifts all boats. We improve your products by
              providing expert engineering and upskilling your team.
            </p>
          </div>
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>IQ + EQ</h4>

            <p>
              With people skills as strong as our technical chops, your
              experience with our software consultants is just as good as the
              work delivered.
            </p>
          </div>
          <div class="relative p-4 lg:p-10">
            <inline-svg
              class="absolute -ml-8 mt-2 w-5 h-5"
              src="/svgs/check.svg"
            />

            <h4>Seamless</h4>

            <p>
              The engineer who plans your product’s success is the same person
              who writes the code. No handoffs or middlemen around here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
