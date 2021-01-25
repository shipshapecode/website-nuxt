<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-5xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">Case Study</div>

        <h1 class="text-4xl lg:text-6xl">Swach</h1>

        <p>
          Swach is a robust color management tool for the modern age. It allows
          you to pick colors, arrange them into palettes, and get color
          suggestions. Swach supports MacOS, Windows, and Linux to allow a
          seamless experience across different work environments.
        </p>
      </div>

      <div
        class="bg-swach-purple flex flex-wrap h-64 md:h-140 justify-center items-center"
      >
        <div class="w-1/2 lg:w-1/3">
          <inline-svg
            class="h-auto w-full"
            src="/svgs/clients/swach-white.svg"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          There are many desktop color tools out there that do just one thing,
          but do it well like
          <a href="https://usecontrast.com/">Contrast</a> and others that do a
          lot of different things, but only run on MacOS like
          <a href="http://sipapp.io/">Sip</a>. The goal with Swach was to create
          a robust, cross platform desktop app that encompassed the
          functionality of many popular tools, while working across not just
          MacOS, but also Windows and Linux.
        </p>
      </div>

      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Swach in dark mode showing the palettes screen"
            class="flex"
            src="/img/work/swach/palette-dark.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Solution</h4>

        <p>
          Building apps that work across MacOS, Windows, and Linux used to mean
          learning completely different tech stacks for each app, but now we can
          use <a href="https://www.electronjs.org/">Electron</a> to build
          cross-platform apps using JavaScript, HTML and CSS. Drawing on our
          Ember.js experience, we decided to leverage
          <a href="https://ember-electron.js.org/">Ember Electron</a>, an Ember
          addon for building Electron apps to create a seamless experience
          across all platforms.
        </p>
      </div>
      <div class="bg-swach-purple flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Swach in light mode showing the palettes screen"
            class="flex"
            src="/img/work/swach/palette-light.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          Like Contrast and Sip before us, we decided Swach would be best as a
          menubar app. This is a fairly common practice for MacOS, but less
          common for Windows and Linux. Bringing this type of app to all
          platforms allows everyone to enjoy Swach unobtrusively, yet always
          have it accessible for quick color operations.
        </p>
      </div>
      <div class="bg-grey-light flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="The color harmonies tab of Swach, showing a color wheel and color palette."
            class="flex"
            src="/img/work/swach/kuler.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <p>
          We wanted to ensure that Swach was a one stop shop for everything a
          designer might need when managing colors for a project. This includes
          storing individual colors, checking their WCAG contrast scores,
          organizing them into palettes, and even discovering new color
          combinations from a base color. Our color harmonies tab was inspired
          by <a href="https://color.adobe.com/">Adobe Color</a> and allows you
          to create new palettes by using a base color and calculating
          analogous, monochromatic, and other color harmonies for it.
        </p>
      </div>

      <div class="bg-swach-purple flex justify-center lg:flex-1">
        <div class="pl-4 pr-4 pt-4 lg:pl-24 lg:pr-24 lg:pt-12">
          <img
            alt="Swach showing the contrast checker tab comparing colors and calculating the WCAG score."
            class="flex"
            src="/img/work/swach/contrast-checker.png"
          />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        <p>
          Users are now able to have a consistent color management experience
          across all platforms. Windows and Linux users can now enjoy the same
          functionality of many existing color tools that were only available
          for MacOS.
        </p>

        <p>
          By leveraging Electron and Ember.js we were able to create a single
          codebase to support all platforms, saving a lot of development time
          building and maintaining multiple codebases.
        </p>

        <p>
          Swach is <a href="https://swach.io/">free to download</a>, so please
          try it out and let us know what you think!
        </p>
      </div>

      <BottomLinks
        next-link="/work/jebbit/"
        next-link-text="Jebbit"
        previous-link="/work/expel/"
        previous-link-text="Expel"
      />
    </div>
  </div>
</template>

<script>
import BottomLinks from '~/components/BottomLinks.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    BottomLinks
  },

  head() {
    const title = 'Case Study - Swach';
    const description = `Learn how we made Swach into a robust cross platform desktop app for MacOS, Windows, and Linux.`;
    const url = 'https://shipshape.io/work/swach/';

    return generateMeta(title, description, url);
  }
};
</script>
