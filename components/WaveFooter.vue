<template>
  <footer class="wave text-base">
    <div class="footer-bottom flex flex-wrap w-full justify-center">
      <div class="max-w-8xl p-8 w-full">
        <div class="flex justify-center lg:justify-start w-full">
          <inline-svg class="footer-logo h-20 w-20" src="/svgs/logo.svg" />
        </div>
        <nav
          class="grid grid-cols-2 max-w-5xl pt-12 pb-12 w-full lg:grid-cols-4"
        >
          <div class="p-8 lg:p-4">
            <h2 class="text-white text-xl md:text-2xl lg:text-3xl">Services</h2>

            <nuxt-link
              to="/services/app-development/"
              class="block leading-6 py-2 lg:py-1"
            >
              App Development
            </nuxt-link>

            <nuxt-link
              to="/services/mentoring/"
              class="block leading-6 py-2 lg:py-1"
            >
              Mentoring
            </nuxt-link>

            <nuxt-link
              to="/services/open-source/"
              class="block leading-6 py-2 lg:py-1"
            >
              Open Source
            </nuxt-link>
          </div>

          <div class="p-8 lg:p-4">
            <h2 class="text-white text-xl md:text-2xl lg:text-3xl">
              Specialties
            </h2>

            <nuxt-link
              to="/services/app-tours/"
              class="block leading-6 py-2 lg:py-1"
            >
              App Tours
            </nuxt-link>

            <nuxt-link
              to="/services/next-consulting/"
              class="block leading-6 py-2 lg:py-1"
            >
              Next.js Consulting
            </nuxt-link>

            <nuxt-link
              to="/services/ember-consulting/"
              class="block leading-6 py-2 lg:py-1"
            >
              Ember Consulting
            </nuxt-link>

            <nuxt-link
              to="/services/nuxt-consulting/"
              class="block leading-6 py-2 lg:py-1"
            >
              Nuxt.js Consulting
            </nuxt-link>
          </div>

          <div class="p-8 lg:p-4">
            <h2 class="text-white text-xl md:text-2xl lg:text-3xl">Company</h2>

            <nuxt-link to="/about/" class="block leading-6 py-2 lg:py-1">
              About
            </nuxt-link>

            <nuxt-link to="/work/" class="block leading-6 py-2 lg:py-1">
              Work
            </nuxt-link>

            <nuxt-link to="/blog/" class="block leading-6 py-2 lg:py-1">
              Blog
            </nuxt-link>

            <nuxt-link
              to="/whiskey-web-and-whatnot-podcast/"
              class="block leading-6 py-2 lg:py-1"
            >
              Podcast
            </nuxt-link>
          </div>

          <div class="p-8 w-full lg:p-4">
            <h2 class="text-white text-xl md:text-2xl lg:text-3xl">Connect</h2>

            <nuxt-link to="/contact/" class="block leading-6 py-2 lg:py-1">
              Contact
            </nuxt-link>

            <a
              href="https://github.com/shipshapecode"
              class="block leading-6 py-2 lg:py-1"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/shipshapecode"
              class="block leading-6 py-2 lg:py-1"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/company/ship-shape/"
              class="block leading-6 py-2 lg:py-1"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <div
          class="
            flex flex-wrap
            items-center
            justify-center
            w-full
            lg:justify-start
          "
        >
          <div class="flex justify-center w-full lg:justify-start">
            <div class="social-links flex items-center pl-2 pr-2 justify-start">
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

          <div class="flex flex-wrap p-4 text-white">
            Copyright © 2022 Ship Shape Consulting LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.wave {
  @apply bg-navy pt-24;

  .footer-logo {
    path {
      fill: var(--white);
      stroke: var(--white);
      stroke-width: 1.25rem;
    }
  }

  .footer-bottom {
    a {
      @apply font-bold text-white;

      &:hover {
        @apply text-red-light;
      }
    }

    .social-links {
      svg {
        path {
          fill: var(--white);
          transition-duration: 0.25s;
          transition-property: fill;
        }

        &:hover {
          path {
            fill: var(--red-light);
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
