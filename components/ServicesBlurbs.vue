<template>
  <div class="section bg-blue-light flex flex-wrap justify-center">
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
            height="814"
            src="/img/services/specialties.png"
            width="1312"
            alt=""
          />
        </div>
        <div>
          <h3 data-aos="fade-right">Our fleet of specialties</h3>
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
              aria-label="Ember logo"
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
              <nuxt-link class="learn-more" to="/work/netflix/">
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
            <inline-svg
              class="h-auto w-24 nested-svg pb-6 lg:w-40 lg:pt-5 lg:pb-12"
              src="/svgs/technologies/nuxt.svg"
              aria-label="Nuxt logo"
            />
            <p class="flex-grow">
              A performant framework used to create flexible, universal Vue.js
              web apps, thanks to its simple routing and out-of-the-box
              optimizations.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link class="learn-more" to="/services/nuxt-consulting/">
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link class="learn-more" to="/services/nuxt-consulting/">
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
            <inline-svg
              class="h-auto w-20 nested-svg pb-6 lg:w-32 lg:pb-12"
              src="/svgs/technologies/next.svg"
              aria-label="Next logo"
            />
            <p class="flex-grow">
              A nimble React framework for production with lots of magic built
              in, from server-side rendering for enhanced SEO to
              internationalization features.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link class="learn-more" to="/services/next-consulting/">
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link class="learn-more" to="/work/enigma/">
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
            <inline-svg
              class="h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20"
              src="/svgs/technologies/tailwind.svg"
              aria-label="Tailwind logo"
            />
            <p class="flex-grow">
              Match mocks from designers with ease, and automagically remove all
              unused CSS with this convenient framework.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link class="learn-more" to="/services/tailwind-consulting/">
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link class="learn-more" to="/services/tailwind-consulting/">
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
            <inline-svg
              class="h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20"
              src="/svgs/technologies/serverless.svg"
              aria-label="Serverless logo"
            />
            <p class="flex-grow">
              Only pay for the computing you need, scale quickly, and reduce
              maintenance with serverless applications. We’ll show you how.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link
                class="learn-more"
                to="/services/serverless-consulting/"
              >
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link
                class="learn-more"
                to="/services/serverless-consulting/"
              >
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
            <inline-svg
              class="h-auto w-36 nested-svg pb-8 lg:w-52 lg:pt-5 lg:pb-20"
              src="/svgs/technologies/cncf.svg"
              aria-label="Cloud Native logo"
            />
            <p class="flex-grow">
              Say goodbye to being locked into vendors, and deliver well-tested,
              secure products faster with this platform-agnostic methodology.
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-around">
              <nuxt-link
                class="learn-more"
                to="/services/cloud-native-consulting/"
              >
                Learn more
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
              <nuxt-link
                class="learn-more"
                to="/services/cloud-native-consulting/"
              >
                See it in action
                <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nested-svg g,
.nested-svg path {
  fill: #1b3b5d;
}
</style>
