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

    <div class="tabs-details">
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
