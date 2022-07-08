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

    <NavMenu />

    <main>
      <slot />
    </main>

    <WaveFooter />
  </div>
</template>
