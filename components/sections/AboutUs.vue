<template lang="html">
  <section class="about-us" id="about-us">
    <div class="container">
      <h2 class="title">sobre nosotros</h2>
      <div class="row about-us__row">
        <div class="about-us__profile">
          <img src="@/assets/img/pilar_aisa.jpg" alt="Pilar Aísa">
        </div>
        <div class="about-us__texts">
          <h3>Pilar Aísa</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    <h2 class="title">nuestras oficinas</h2>
    <div class="about-us__images">
      <div class="about-us__images-col">
        <div class="about-us__image about-us__image--1"></div>
      </div>
      <div class="about-us__images-col">
        <img src="@/assets/img/offices_2.jpg" class="about-us__image about-us__image--2" alt="Aisa Publicidad oficinas">
        <img src="@/assets/img/offices_3.jpg" class="about-us__image about-us__image--3" alt="Aisa Publicidad oficinas">
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-us {
  color: white;
  background: $secondary;

  &__row {
    @include make-row;
    display: flex;
    align-items: center;
  }
  &__profile {
    @include make-sm-column(3);
    img {
      border-radius: 5px;
    }
  }
  &__texts {
    @include make-sm-column(9);
    padding-left: 2.4rem;
  }
  &__images {
    display: flex;
  }
  &__images-col {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  &__image {
    &--1 {
      background-image: url("/assets/img/offices_1.jpg");
      height: 500px;
      background-size: cover;
      height: 100%;
    }
  }
}
</style>
