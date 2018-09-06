<template lang="html">
  <div class="hero">
    <img src="@/assets/img/tape.png" alt="Aisa Publicidad presentation" class="hero__image">
    <img src="@/assets/img/aisa-publicidad-logo.png" alt="Aisa Publicidad" class="hero__logo">
    <h1 class="hero__h1">Aísa Publicidad</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .hero {
    height: 50rem;
    display: flex;
    align-items: center;
    position: relative;

    &__image {
      width: 548px;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotate(10deg);
      -webkit-filter: drop-shadow(5px 5px 15px #222);
      filter:         drop-shadow(5px 5px 15px #222);
    }

    &__logo {
      width: 6rem;
      margin-right: 3rem;
    }

    &__h1 {
      color: white;
      width: 20px;
      line-height: 1;
      font-size: 5rem;
    }
  }
</style>
