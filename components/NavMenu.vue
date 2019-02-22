<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex flex-no-shrink items-center pl-2 pr-2 pt-2">
      <nuxt-link to="/" class="logo inline-flex">
        <div
          class="inline-block"
          itemprop="logo"
          itemscope
          itemtype="https://schema.org/ImageObject"
          itemid="shipshapelogo"
        >
          <img
            alt="Ship Shape Logo"
            class="mr-2"
            itemprop="url"
            height="38px"
            src="~assets/svgs/logo.svg"
            width="38px"
          >
          <meta itemprop="height" content="128">
          <meta itemprop="width" content="128">
        </div>
        <div
          class="-mt-1 text-navy text-3xl"
          itemprop="name"
        >
          Ship Shape
        </div>
      </nuxt-link>
    </div>

    <div class="block lg:hidden">
      <button
        aria-label="Open navigation menu"
        class="flex items-center px-3 py-2 text-grey hover:text-navy text-xl"
        @click="toggleNavMenu(true)"
      >
        <Menu :class="'hamburger-menu'"/>
      </button>
    </div>

    <div class="nav-links hidden lg:flex">
      <div class="lg:flex lg:flex-grow lg:justify-end">
        <div class="flex lg:hidden justify-end m-4">
          <button
            aria-label="Close navigation menu"
            class="cursor-pointer"
            @click="toggleNavMenu(false)"
          >
            <Close :class="'h-10 m-2 p-2 w-10'"/>
          </button>
        </div>

        <nuxt-link
          class="nav-link"
          to="/work/"
          @click.native="toggleNavMenu(false)"
        >
          Case Studies
        </nuxt-link>

        <nuxt-link
          class="nav-link"
          to="/ember-consulting/"
          @click.native="toggleNavMenu(false)"
        >
          Ember Consulting
        </nuxt-link>

        <nuxt-link
          class="nav-link"
          to="/open-source/"
          @click.native="toggleNavMenu(false)"
        >
          Open Source
        </nuxt-link>

        <nuxt-link
          class="nav-link"
          to="/blog/"
          @click.native="toggleNavMenu(false)"
        >
          Blog
        </nuxt-link>

        <nuxt-link
          class="nav-link contact-link"
          to="/contact/"
          @click.native="toggleNavMenu(false)"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import Close from '~/assets/svgs/close.svg?inline';
  import Menu from '~/assets/svgs/menu.svg?inline';

  export default {
    components: {
      Close,
      Menu
    },
    methods: {
      toggleNavMenu(open) {
        const navLinks = this.$el.querySelector('.nav-links');

        if (open) {
          navLinks.classList.remove('hidden');
        } else {
          navLinks.classList.add('hidden');
        }
      }
    }
  };
</script>

<style lang="scss">
  .hamburger-menu {
    height: 36px;
    width: 36px;
  }
</style>
