<template>
  <div class="tabs">
    <nav>
      <ul class="block lg:inline-flex">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'tab-current': tab.isActive }"
          class="w-full"
        >
          <a role="tab" @click="selectTab(tab)">
            <span>
              {{ tab.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="content-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
};
</script>

<style lang="scss">
.tabs {
  transition-duration: 0.25s;
  transition-property: background-color, box-shadow, color, fill;

  nav {
    @apply bg-transparent text-left;

    ul {
      justify-content: start;
      margin-bottom: 0;
      max-width: none;
      padding: 0;

      li {
        cursor: pointer;
        display: flex;
        margin-bottom: 0;

        a {
          @apply flex items-center text-grey-light whitespace-nowrap w-full;
          box-shadow: inset 0 -2px var(--blue-light);
          display: flex;
          flex: 1 0 auto;
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1px;
          padding: 10px 20px 10px 10px;

          &:hover {
            @apply text-navy;
            box-shadow: inset 0 -2px var(--navy);
          }
        }

        &.tab-current {
          @apply bg-transparent;

          a {
            @apply text-navy;
            box-shadow: inset 0 -2px var(--navy);
          }
        }
      }
    }
  }

  .content-wrap {
    max-width: none;
    padding: 0;
    text-align: left;

    p {
      color: var(--grey-light);
      font-size: 18px;
      font-weight: lighter;
      line-height: 2;
      margin: 0;
      min-height: 250px;
      padding: 0.75em 0;
    }
  }
}
</style>
