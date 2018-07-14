<template>
  <div>
    <div class="header-bg">
      <div class="container">
        <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
        <TheSideNav
          :show="displaySidenav"
          @close="displaySidenav = false"/>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from '@/components/Navigation/TheHeader'
  import TheSideNav from '@/components/Navigation/TheSideNav'

  export default {
    components: {
      TheHeader,
      TheSideNav
    },
    data() {
      return {
        displaySidenav: false
      }
    }
  }
</script>

<style>
.header-bg {
  background: #178A8B;
}
</style>
