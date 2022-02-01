<template>
  <div
    itemscope
    itemtype="https://schema.org/Organization"
    itemid="shipshapeorg"
    :class="{
      'bg-blue-light':
        $route.name === 'index' ||
        $route.name === 'services' ||
        $route.name === 'about'
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
