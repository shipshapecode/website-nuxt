<template>
  <nav
    v-font="[
      $getFont('Pier Sans', 'normal'),
      $getFont('Pier Sans', 700),
      $getFont('Pier Sans', 300)
    ]"
    class="bg-transparent flex justify-center w-full"
  >
    <div
      class="
        flex
        items-center
        justify-between
        flex-wrap
        p-6
        max-w-8xl
        w-full
        lg:px-0
      "
    >
      <div class="flex flex-no-shrink items-center pr-2 pt-2">
        <nuxt-link to="/" class="logo inline-flex" itemprop="url">
          <div
            class="inline-block"
            itemprop="logo"
            itemscope
            itemtype="https://schema.org/ImageObject"
            itemid="shipshapelogo"
          >
            <nuxt-img
              alt="Ship Shape Logo"
              class="h-[50px] w-auto"
              itemprop="url"
              height="100px"
              format="webp"
              src="/img/logo.png"
              width="100px"
            />
            <meta itemprop="height" content="128" />
            <meta itemprop="width" content="128" />
          </div>
          <div
            class="font-medium text-3xl"
            :class="{
              'text-navy': $route.name !== 'about',
              'text-white': $route.name === 'about'
            }"
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
          <inline-svg class="hamburger-menu" src="/svgs/menu.svg" />
        </button>
      </div>

      <div class="nav-links hidden z-50 lg:flex">
        <div class="lg:flex lg:flex-grow lg:justify-end">
          <div class="flex lg:hidden justify-end m-4">
            <button
              aria-label="Close navigation menu"
              class="cursor-pointer"
              @click="toggleNavMenu(false)"
            >
              <inline-svg class="h-10 m-2 p-2 w-10" src="/svgs/close.svg" />
            </button>
          </div>

          <nuxt-link
            class="nav-link"
            :class="{
              'nav-link-alt': $route.name === 'about'
            }"
            to="/services/"
            @click.native="toggleNavMenu(false)"
          >
            Services
          </nuxt-link>

          <nuxt-link
            class="nav-link"
            :class="{
              'nav-link-alt': $route.name === 'about'
            }"
            to="/work/"
            @click.native="toggleNavMenu(false)"
          >
            Work
          </nuxt-link>

          <nuxt-link
            class="nav-link"
            :class="{
              'nav-link-alt': $route.name === 'about'
            }"
            to="/about/"
            @click.native="toggleNavMenu(false)"
          >
            About
          </nuxt-link>

          <nuxt-link
            class="nav-link"
            :class="{
              'nav-link-alt': $route.name === 'about'
            }"
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
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNavMenu(open) {
      const mobileNavShown = window.innerWidth < 1024;
      if (mobileNavShown) {
        const navLinks = this.$el.querySelector('.nav-links');

        if (open) {
          navLinks.classList.remove('hidden');
          document.body.style.position = 'fixed';
        } else {
          navLinks.classList.add('hidden');
          document.body.style.position = '';
        }
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

.logo {
  word-spacing: -5px;
}
</style>
