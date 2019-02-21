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
          <a
            role="tab"
            @click="selectTab(tab)"
          >
            <span>
              {{ tab.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="content-wrap">
      <slot/>
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
          tab.isActive = (tab.name === selectedTab.name);
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
      background: $transparent;
      text-align: left;

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
            align-items: center;
            box-shadow: inset 0 -2px $grey-transparent;
            color: $grey-light;
            display: flex;
            flex: 1 0 auto;
            font-size: 22px;
            font-weight: bold;
            letter-spacing: 1px;
            padding: 10px 20px 10px 10px;
            white-space: nowrap;
            width: 100%;

            &:hover {
              box-shadow: inset 0 -2px $navy;
              color: $navy;
            }
          }

          &.tab-current {
            background: $transparent;

            a {
              box-shadow: inset 0 -2px $navy;
              color: $navy;
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
        color: $grey-light;
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
