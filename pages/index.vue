<template>
  <div class="index-page">
    <section class="hero-section">
      <div class="container">
        <Hero/>
      </div>
    </section>
    <div class="container">
      <Work/>
      <Work/>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Work from '~/components/sections/Work.vue'

export default {
  components: {
    Hero,
    Work
  }
}
</script>

<style>
.hero-section {
  background: #178A8B;
}
</style>
