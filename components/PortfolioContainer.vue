<template>
  <div>
    <div
      class="
        portfolio-container
        section
        flex flex-wrap
        justify-center
        bg-blue-light
      "
    >
      <div class="section-content">
        <div class="flex flex-wrap justify-center">
          <div class="project flex-1" data-aos="flip-up">
            <inline-svg
              class="shepherd-logo h-48 -ml-6 p-6 w-48"
              src="/svgs/shepherd.svg"
            />

            <h2 class="text-navy">Shepherd.js, Designed for Product Tours</h2>

            <p class="max-w-5xl">
              As a part of our mission to create open source JavaScript
              Libraries, that can be used for common web app uses, Ship Shape
              created Shepherd.js. Shepherd.js guides users through a tour of
              your app and is currently implemented and trusted by brands like
              Google, Ally and more.
            </p>

            <p>
              <NuxtLink class="learn-more" to="/services/app-tours/">
                Learn more
                <inline-svg
                  class="h-4 inline w-4"
                  src="/svgs/angle-right.svg"
                />
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-container section flex flex-wrap justify-center">
      <div class="section-content">
        <h2>Ember Addons</h2>

        <p class="max-w-5xl">
          There’s an addon for that. Our addons have been downloaded millions of
          times, and are used in production apps of Fortune 100 companies. With
          Ember’s strong addon ecosystem behind us, we will continue
          contributing and supporting the Ember.js developer community.
        </p>

        <div class="flex flex-wrap justify-center">
          <div
            itemscope
            itemtype="http://schema.org/SoftwareSourceCode"
            class="project pb-2 pt-2 w-full lg:w-1/3 lg:pr-8"
          >
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">ember-shepherd</h3>

                <h5 class="text-grey font-light">
                  An Ember addon for the site tour library Shepherd
                </h5>

                <p>
                  ember-shepherd was originally written in 2015, and it still
                  consistently ranks in the top 100 Ember addons on
                  <a href="https://emberobserver.com/addons/ember-shepherd"
                    >Ember Observer</a
                  >
                  today. It is the best way to write site tours for your Ember
                  app.
                </p>

                <p>
                  <a
                    class="learn-more"
                    href="https://github.com/shipshapecode/ember-shepherd"
                    itemprop="codeRepository"
                  >
                    View on GitHub
                    <inline-svg
                      class="h-4 inline w-4"
                      src="/svgs/angle-right.svg"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            itemscope
            itemtype="http://schema.org/SoftwareSourceCode"
            class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-4 lg:pr-4"
          >
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">ember-math-helpers</h3>

                <h5 class="text-grey font-light">
                  Ember HTMLBars helpers for basic arithmetic
                </h5>

                <p>
                  ember-math-helpers was inspired by the elegant simplicity of
                  <a href="https://github.com/jmurphyau/ember-truth-helpers"
                    >ember-truth-helpers</a
                  >. It aims to be a complete set of helpers for quick
                  mathematical computations in your templates.
                </p>

                <p>
                  <a
                    class="learn-more"
                    href="https://github.com/shipshapecode/ember-math-helpers"
                    itemprop="codeRepository"
                  >
                    View on GitHub
                    <inline-svg
                      class="h-4 inline w-4"
                      src="/svgs/angle-right.svg"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            itemscope
            itemtype="http://schema.org/SoftwareSourceCode"
            class="project pb-2 pt-2 w-full lg:w-1/3 lg:pl-8"
          >
            <div class="flex flex-wrap items-center justify-center">
              <div>
                <h3 class="text-navy">ember-flatpickr</h3>

                <h5 class="text-grey font-light">
                  An Ember addon that wraps the Flatpickr date picker
                </h5>

                <p>
                  ember-flatpickr was created as an alternative to
                  ember-pikaday, which had become very outdated and had lots of
                  open issues. It wraps the minimal datepicker library
                  <a href="https://github.com/flatpickr/flatpickr">Flatpickr</a
                  >.
                </p>

                <p>
                  <a
                    class="learn-more"
                    href="https://github.com/shipshapecode/ember-flatpickr"
                    itemprop="codeRepository"
                  >
                    View on GitHub
                    <inline-svg
                      class="h-4 inline w-4"
                      src="/svgs/angle-right.svg"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.shepherd-logo .lines,
.shepherd-logo .open-eye,
.shepherd-logo .wink {
  transition: visibility 0s, opacity 0.25s ease-in-out;
}

.shepherd-logo .open-eye {
  opacity: 1;
  visibility: visible !important;
}

.shepherd-logo .lines,
.shepherd-logo .wink {
  opacity: 0;
  visibility: hidden !important;
}

.shepherd-logo:hover .lines,
.shepherd-logo:hover .wink {
  opacity: 1;
  visibility: visible !important;
}

.shepherd-logo:hover .open-eye {
  opacity: 0;
  visibility: hidden !important;
}
</style>
