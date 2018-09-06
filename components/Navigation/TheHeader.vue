<template>
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/" class="ani"><span>empecémos</span></nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/#work" class="ani"><span>lo que hacemos</span></nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/#about-us" class="ani"><span>así somos</span></nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/#clients" class="ani"><span>nuestros clientes</span></nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/#contact" class="ani"><span>¿hablamos?</span></nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style lang="scss">
.header-container {
  background: black;
}

.the-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-sizing: border-box;
}

.logo {
  font-size: 1.3rem;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  a {
    color: white;
  }
}

.nav-item ~ .nav-item{
  margin-left: 2rem;
}

</style>
