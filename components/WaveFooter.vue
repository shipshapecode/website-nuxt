<template>
  <footer class="wave text-base">
    <div class="footer-top">
      <div class="text-center pt-32 lg:pb-32">
        <compass class="inline m-8"/>

        <h3 class="font-bold p-4 text-5xl text-white">
          Set a course for success
        </h3>

        <p class="p-4 text-gold">
          Ember.js consulting, development, and training for your project.
        </p>

        <a class="btn-gold inline-block m-12" href="/contact/">
          Let's talk
        </a>
      </div>
    </div>
    <div class="flex flex-wrap w-full justify-center">
      <div class="footer-bottom max-w-8xl p-8 w-full">
        <div class="flex justify-center lg:justify-start w-full">
          <logo class="footer-logo h-16 w-16"/>
        </div>

        <nav class="flex flex-wrap pt-12 pb-12 w-full">
          <!--
          <div class="w-full lg:w-1/4 max-w-xs p-4">
            <h4 class="text-white">
              Services
            </h4>

            <nuxt-link to="/ember-consulting/" class="block">
              Design
            </nuxt-link>

            <nuxt-link to="/ember-consulting/" class="block">
              Engineering
            </nuxt-link>

            <nuxt-link to="/ember-consulting/" class="block">
              Staff Augmentation
            </nuxt-link>
          </div>
          -->

          <div class="w-1/2 lg:w-1/3 p-4">
            <h4 class="text-white">
              Specialties
            </h4>

            <nuxt-link to="/ember-consulting/" class="block">
              Ember Consulting
            </nuxt-link>

            <!--
            <nuxt-link to="/ember-consulting/" class="block">
              Nuxt.js Consulting
            </nuxt-link>
            -->

            <nuxt-link to="/site-tours/" class="block">
              Site Tours
            </nuxt-link>
          </div>

          <div class="w-1/2 lg:w-1/3 p-4">
            <div class="w-full">
              <h4 class="text-white">
                Company
              </h4>
            </div>

            <div class="w-full">
              <nuxt-link to="/work/">
                Case Studies
              </nuxt-link>
            </div>

            <div class="w-full">
              <nuxt-link to="/open-source/">
                Open Source
              </nuxt-link>
            </div>

            <div class="w-full">
              <nuxt-link to="/blog/">
                Blog
              </nuxt-link>
            </div>

            <!--div class="w-full">
              <nuxt-link to="/team/">
                Team
              </nuxt-link>
            </div-->
          </div>

          <div class="w-1/2 lg:w-1/3 p-4">
            <h4 class="text-white">
              Connect
            </h4>

            <nuxt-link to="/contact/" class="block">
              Contact
            </nuxt-link>

            <a href="https://github.com/shipshapecode" class="block">
              GitHub
            </a>

            <a href="https://twitter.com/shipshapecode" class="block">
              Twitter
            </a>

            <a href="https://www.linkedin.com/company/ship-shape/" class="block">
              LinkedIn
            </a>
          </div>
        </nav>

        <div class="social-links flex items-center justify-center w-full lg:justify-start w-full">
          <a
            aria-label="GitHub"
            class="p-2"
            href="https://github.com/shipshapecode"
          >
            <div class="github-logo">
              <github/>
            </div>
          </a>
          <a
            aria-label="Twitter"
            class="p-2"
            href="https://twitter.com/shipshapecode"
          >
            <div class="twitter-logo">
              <twitter/>
            </div>
          </a>
          <a
            aria-label="LinkedIn"
            class="p-2"
            href="https://www.linkedin.com/company/ship-shape/"
          >
            <div class="linkedin-logo">
              <linkedin/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Compass from '~/assets/svgs/compass.svg?inline';
  import Github from '~/assets/svgs/github.svg?inline';
  import Linkedin from '~/assets/svgs/linkedin.svg?inline';
  import Logo from '~/assets/svgs/logo.svg?inline';
  import Twitter from '~/assets/svgs/twitter.svg?inline';

  export default {
    components: {
      Compass,
      Github,
      Linkedin,
      Logo,
      Twitter
    }
  };
</script>

<style lang="scss">
  .wave {
    background: url(/img/sea.png);
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
