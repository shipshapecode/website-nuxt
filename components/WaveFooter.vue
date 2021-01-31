<template>
  <footer class="wave text-base" lazy-background="/img/sea.png">
    <div class="footer-top" data-aos="zoom-in-up">
      <div class="text-center pt-32 lg:pb-32">
        <inline-svg class="inline m-8" src="/svgs/compass.svg" />

        <h3 class="font-bold leading-none p-4 text-5xl text-white">
          Already convinced?
        </h3>

        <p class="p-4 text-gold">
          Let us help you exceed your company and team goals.
        </p>

        <nuxt-link class="btn btn-gold inline-block m-12" to="/contact/">
          Let's talk
        </nuxt-link>
      </div>
    </div>
    <div class="footer-bottom flex flex-wrap w-full justify-center">
      <div class="max-w-8xl p-8 w-full">
        <div class="flex justify-center lg:justify-start w-full">
          <inline-svg class="footer-logo h-16 w-16" src="/svgs/logo.svg" />
        </div>

        <div class="flex flex-wrap justify-center w-full">
          <nav
            class="flex flex-wrap justify-center pt-12 pb-12 w-full lg:flex-nowrap lg:justify-start"
          >
            <div class="flex flex-shrink justify-start w-full max-w-lg">
              <div class="w-1/2 lg:w-72 p-8 lg:p-4">
                <h4 class="text-white text-xl md:text-2xl lg:text-3xl">
                  Services
                </h4>

                <nuxt-link to="/services/app-development/" class="block">
                  App Development
                </nuxt-link>

                <nuxt-link to="/services/mentoring/" class="block">
                  Mentoring
                </nuxt-link>

                <nuxt-link to="/services/open-source/" class="block">
                  Open Source
                </nuxt-link>
              </div>

              <div class="w-1/2 lg:w-72 p-8 lg:p-4">
                <h4 class="text-white text-xl md:text-2xl lg:text-3xl">
                  Specialties
                </h4>

                <nuxt-link to="/services/app-tours/" class="block">
                  App Tours
                </nuxt-link>

                <nuxt-link to="/services/ember-consulting/" class="block">
                  Ember Consulting
                </nuxt-link>

                <nuxt-link to="/services/nuxt-consulting/" class="block">
                  Nuxt.js Consulting
                </nuxt-link>
              </div>
            </div>

            <div class="flex flex-shrink justify-start w-full max-w-lg">
              <div class="w-1/2 lg:w-72 p-8 lg:p-4">
                <h4 class="text-white text-xl md:text-2xl lg:text-3xl">
                  Company
                </h4>

                <nuxt-link to="/about/" class="block"> About </nuxt-link>

                <nuxt-link to="/work/" class="block"> Work </nuxt-link>

                <nuxt-link to="/blog/" class="block"> Blog </nuxt-link>
              </div>

              <div class="w-1/2 lg:w-72 p-8 lg:p-4">
                <h4 class="text-white text-xl md:text-2xl lg:text-3xl">
                  Connect
                </h4>

                <nuxt-link to="/contact/" class="block"> Contact </nuxt-link>

                <a href="https://github.com/shipshapecode" class="block">
                  GitHub
                </a>

                <a href="https://twitter.com/shipshapecode" class="block">
                  Twitter
                </a>

                <a
                  href="https://www.linkedin.com/company/ship-shape/"
                  class="block"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </nav>

          <div
            class="flex flex-wrap items-center justify-center w-full lg:justify-start"
          >
            <div class="flex justify-center w-full lg:justify-start">
              <div
                class="social-links flex items-center pl-2 pr-2 justify-start"
              >
                <a
                  aria-label="GitHub"
                  class="p-2"
                  href="https://github.com/shipshapecode"
                >
                  <div class="github-logo">
                    <inline-svg src="/svgs/github.svg" />
                  </div>
                </a>
                <a
                  aria-label="Twitter"
                  class="p-2"
                  href="https://twitter.com/shipshapecode"
                >
                  <div class="twitter-logo">
                    <inline-svg src="/svgs/twitter.svg" />
                  </div>
                </a>
                <a
                  aria-label="LinkedIn"
                  class="p-2"
                  href="https://www.linkedin.com/company/ship-shape/"
                >
                  <div class="linkedin-logo">
                    <inline-svg src="/svgs/linkedin.svg" />
                  </div>
                </a>
              </div>
            </div>

            <div class="flex flex-wrap p-4">
              Copyright © 2020 Ship Shape Consulting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.wave {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .footer-logo {
    path {
      fill: $gold;
      stroke: $gold;
      stroke-width: 1.25rem;
    }
  }

  .footer-bottom {
    background: #142636;

    a {
      color: $grey;
      font-weight: bold;

      &:hover {
        color: $grey-transparent;
      }
    }

    .social-links {
      svg {
        path {
          fill: $gold;
          transition-duration: 0.25s;
          transition-property: fill;
        }

        &:hover {
          path {
            fill: $grey-transparent;
          }
        }
      }
    }
  }

  .github-logo {
    svg {
      height: 22px;
      width: 23px;
    }
  }

  .linkedin-logo {
    svg {
      height: 20px;
      width: 19px;
    }
  }

  .twitter-logo {
    svg {
      height: 19px;
      width: 23px;
    }
  }
}
</style>
