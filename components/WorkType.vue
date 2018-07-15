<template lang="html">
  <div class="work-types">
    <div class="work-type">
      <div class="work-type__description">
        <img src="" alt="">
        <h3>{{ title }}</h3>
        <button type="button" name="button" @click="onArrowClick(false)">mover izquierda</button>
        <button type="button" name="button" @click="triggerAutoplay()" v-if="autoplay">stop</button>
        <button type="button" name="button" @click="triggerAutoplay()" v-if="!autoplay">play</button>
        <button type="button" name="button" @click="onArrowClick()">mover derecha</button>
      </div>
      <div class="work-type__content">
        <vueper-slides :autoplay="autoplay" ref="slides" :arrows="false">
          <vueper-slide v-for="(slide, i) in slides"
            :key="slide.id"
            :title="slide.title"
            :style="'background-color: ' + slide.color">
            <div slot="slideContent">
              <nuxt-link v-bind:to="slide.link">
                <img v-if="slide.type == 'logo'" v-bind:src="require('~/assets/img/' + slide.content)" alt="">
                <video v-if="slide.type == 'video'" v-bind:src="require('~/assets/img/' + slide.content)" autoplay v-bind:poster="require('~/assets/img/' + slide.content)"></video>
              </nuxt-link>
            </div>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    id: String,
    title: String,
    slides: Array,
    autoplay: Boolean
  },
  methods: {
    onArrowClick(e) {
      this.$refs.slides.onArrowClick(e)
    },
    triggerAutoplay() {
      this.autoplay = !this.autoplay
    }
  }
}
</script>

<style lang="scss">


.vueperslides__slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 50px;
  justify-content: flex-start;
}
.vueperslides__bullet {
  box-shadow: none;
}
.vueperslides__parallax-wrapper::before, .vueperslides__parallax-wrapper::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: -1em;
    right: -1em;
    height: 2em;
    box-shadow: none;
    z-index: 2;
}
.work-type {
  &__description {
    @include make-sm-column(4);
  }
  &__content {
    @include make-sm-column(8);
  }
}

</style>
