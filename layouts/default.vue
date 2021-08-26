<template>
  <div
    itemscope
    itemtype="https://schema.org/Organization"
    itemid="shipshapeorg"
    :class="{
      'bg-navy': $route.name === 'about',
      'bg-blue-light': $route.name === 'index'
    }"
  >
    <meta itemprop="legalName" content="Ship Shape Consulting LLC" />

    <NavMenu :critical="true" />

    <main>
      <Nuxt />
    </main>

    <WaveFooter />
  </div>
</template>

<script>
export default {
  speedkitComponents: {
    NavMenu: () => import('@/components/NavMenu'),
    WaveFooter: () => import('@/components/WaveFooter')
  }
};
</script>
