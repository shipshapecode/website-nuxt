<template>
  <div
    class="section bg-blue-light flex flex-wrap justify-center"
    data-aos="fade-down"
  >
    <div class="section-content">
      <div
        class="
          section-content
          gap-20
          grid grid-cols-1
          py-8
          items-center
          lg:gap-32 lg:grid-cols-2 lg:py-16
        "
      >
        <div class="lg:order-last" data-aos="fade-up">
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="1034"
            src="/img/hero-images/ember-consulting.png"
            width="1312"
          />
        </div>
        <div>
          <h3 data-aos="fade-left">Our fleet of specialties</h3>
          <p data-aos="fade">
            Our senior-level software consultants ensure your applications are
            optimized for today and ready for the future.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <inline-svg
              class="h-auto w-20 nested-svg pb-6 lg:w-32 lg:pb-12"
              src="/svgs/technologies/ember.svg"
              aria-labelledby="ember"
            />
            <p class="flex-grow">
              One of the best frameworks for fast, reliable builds, especially
              complex apps and dashboards. Ember’s opinionated structure lends
              well to efficiency and organization.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link class="learn-more" to="/services/ember-consulting/">
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link class="learn-more" to="/services/ember-consulting/">
                See it in action
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
            </div>
          </div>
        </div>

        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <h2 class="mb-6 mt-4 text-3xl" itemprop="name">
              Next.js Consulting
            </h2>

            <p class="flex-grow">
              Performance and optimization are at the core of Next.js. The
              Next.js team has made the hard decisions for you by providing
              server side rendering, routing, and other automagical features out
              of the box. Let our Next.js team help you get started with this
              powerful framework.
            </p>

            <nuxt-link class="learn-more" to="/services/next-consulting/">
              Learn more
              <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <h2 class="mb-6 mt-4 text-3xl" itemprop="name">App Development</h2>

            <p class="flex-grow">
              Building custom full stack web apps is our speciality. Ship Shape
              designs, engineers and programs web apps from start-to-finish so
              that user experience is flawless and reliable for years to come.
            </p>

            <nuxt-link class="learn-more" to="/services/app-development/">
              Learn more
              <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <h2 class="mb-6 mt-4 text-3xl" itemprop="name">
              Nuxt.js Consulting
            </h2>

            <p class="flex-grow">
              Nuxt.js makes progressive web app development simple, powerful and
              user friendly. Stay ahead of tech giants and build a solid
              foundation for your digital future with Ship Shape’s Nuxt
              consulting team.
            </p>

            <nuxt-link class="learn-more" to="/services/nuxt-consulting/">
              Learn more
              <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <h2 class="mb-6 mt-4 text-3xl" itemprop="name">App Tours</h2>

            <p class="flex-grow">
              We built our own open source library,
              <a href="https://shepherdjs.dev/">Shepherd.js</a> to guide users
              through the features and functions of your web app. It’s no
              surprise that we’ve been tapped to help companies of all sizes to
              implement user-friendly app tours.
            </p>

            <nuxt-link class="learn-more" to="/services/app-tours/">
              Learn more
              <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
            </nuxt-link>
          </div>
        </div>

        <div
          class="bg-white flex flex-grow p-8 justify-center xl:h-104 lg:p-12"
          data-aos="fade-up"
          itemscope
          itemtype="http://schema.org/Service"
        >
          <div class="flex flex-col max-w-2xl w-full">
            <h2 class="mb-6 mt-4 text-3xl" itemprop="name">
              Mentoring and Team Training
            </h2>

            <p class="flex-grow">
              Whether you're a Senior Developer or Junior Developer, Ship Shape
              fosters one-on-one connections that help make a difference in our
              community. We offer several Ember mentorship programs that
              identify your goals and prepare you and your team for the future
              of Ember.
            </p>

            <nuxt-link class="learn-more" to="/services/mentoring/">
              Learn more
              <inline-svg class="h-4 inline w-4" src="/svgs/angle-right.svg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nested-svg g {
  fill: #1b3b5d;
}
</style>
