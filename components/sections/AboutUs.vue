<template lang="html">
  <section class="about-us" id="about-us">
    <div class="container">
      <h2 class="title">sobre nosotros</h2>
      <div class="row about-us__row">
        <div class="about-us__profile">
          <img src="@/assets/img/pilar_aisa.jpg" alt="Pilar Aísa">
        </div>
        <div class="about-us__texts">
          <h3>Pilar Aísa Gamero</h3>
          <p>Aunque me licencie en Bellas Artes por la universidad de Barcelona en la especialidad de diseño gráfico en el siglo pasado, sigo con atención todas las novedades</p>
          <p>En mi CV consta que soy licenciada en Bellas Artes por la Universidad de Barcelona. La especialidad en diseño gráfico se quedó corta y completé mis estudios de publicidad en diferentes ciudades</p>
        </div>
      </div>
    </div>
    <h2 class="title">la fábrica de ideas</h2>
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
