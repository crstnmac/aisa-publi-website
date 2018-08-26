<template>
  <div class="index-page">
    <section class="hero-section">
      <div class="container">
        <Hero/>
      </div>
    </section>
    <div class="container">
      <Work/>
    </div>
    <AboutUs/>
    <div class="container">
      <Clients/>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Work from '~/components/sections/Work.vue'
import AboutUs from '~/components/sections/AboutUs.vue'
import Clients from '~/components/sections/Clients.vue'

export default {
  components: {
    Hero,
    Work,
    AboutUs,
    Clients
  }
}
</script>

<style>
.hero-section {
  background: #178A8B;
}
</style>
