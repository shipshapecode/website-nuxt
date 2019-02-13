<template>
  <div class="wave text-base">
    <div class="footer-top">
      <div class="text-center pt-32 lg:pb-32">
        <compass class="m-8"/>

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

    <div class="footer-bottom flex flex-wrap pl-24 pr-24 pt-12 pb-12">
      <div class="w-full flex justify-center lg:justify-start lg:w-auto">
        <logo class="footer-logo h-16 w-16"/>
      </div>

      <div class="flex flex-wrap items-center justify-center flex-1">
        <div class="w-full lg:w-auto flex justify-center p-4">
          <a href="/work/">
            Case Studies
          </a>
        </div>

        <div class="w-full lg:w-auto flex justify-center p-4">
          <a href="/ember-consulting/">
            Ember Consulting
          </a>
        </div>

        <div class="w-full lg:w-auto flex justify-center p-4">
          <a href="/open-source/">
            Open Source
          </a>
        </div>

        <div class="w-full lg:w-auto flex justify-center p-4">
          <a href="/blog/">
            Blog
          </a>
        </div>

        <div class="w-full lg:w-auto flex justify-center p-4">
          <a href="/contact/">
            Contact
          </a>
        </div>
      </div>

      <div class="flex items-center justify-center w-full lg:justify-start lg:w-auto">
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
  @import "assets/css/variables";

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
