<template lang="html">
  <div class="work-type" :class="{ 'reverse': reverse }" ref="testref">
    <div class="work-type__description">
      <img :src="require('~/assets/img/' + img)" :alt="id" class="work-type__img">
      <h3 class="work-type__title">{{ title }}</h3>
      <div class="work-type__btns">
        <button type="button" name="button" @click="onArrowClickBefore()" class="work-type__btn">
          <img src="@/assets/img/back.svg" alt="Back Button">
        </button>
        <button type="button" name="button" @click="triggerAutoplay()" v-if="autoplayData" class="work-type__btn">
          <img src="@/assets/img/pause.svg" alt="Pause Button">
        </button>
        <button type="button" name="button" @click="triggerAutoplay()" v-if="!autoplayData" class="work-type__btn">
          <img src="@/assets/img/play.svg" alt="Play Button">
        </button>
        <button type="button" name="button" @click="onArrowClickNext()" class="work-type__btn">
          <img src="@/assets/img/forward.svg" alt="Forward Button">
        </button>
      </div>
    </div>
    <div class="work-type__content">
      <no-ssr>
        <vueper-slides class="no-shadow" :autoplay="autoplayData" ref="slides" :arrows="false">
          <vueper-slide v-for="(slide, i) in slides"
            :key="slide.id"
            :title="slide.title"
            :style="'background-color: ' + slide.color">
            <div slot="slideContent">
              <nuxt-link :to="slide.link">
                <img v-if="slide.type == 'img'" :src="require('~/assets/img/' + slide.content)" alt="">
                <video ref="myVideo" v-if="slide.type == 'video'" loop class="work-type__video">
                  <source :src="require('~/assets/video/' + slide.content)" type="video/mp4">
                </video>
              </nuxt-link>
            </div>
          </vueper-slide>
        </vueper-slides>
      </no-ssr>
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
    img: String,
    slides: Array,
    reverse: {
      type: Boolean,
      default: false
    },
    autoplay: Boolean
  },
  data () {
    return {
      autoplayData: this.autoplay
    }
  },
  methods: {
    onArrowClickNext() {
      this.$refs.slides.next()
    },
    onArrowClickBefore() {
      this.$refs.slides.previous()
    },
    triggerAutoplay() {
      this.autoplayData = !this.autoplayData
    },
    autoplayVideo() {
      setTimeout(() => {
        if (this.$refs.myVideo) {
          this.$refs.myVideo[0].muted = true
          this.$refs.myVideo[0].play()
        }
      }, 1)
    }
  },
  mounted () {
    this.autoplayVideo()
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
  border-color: $primary;
}
.work-type {
  .vueperslides__bullets {
    justify-content: flex-start;
    left: 13px;
  }
}

.vueperslides__parallax-wrapper, .vueperslides__inner, .vueperslides {
  height: 100%;
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
// .vueperslides__parallax-wrapper {
//   box-shadow: none;
// }
.work-type {
  display: flex;
  margin-bottom: 7.2rem;
  justify-content: space-between;

  &__title {
    text-align: center;
    font-weight: 500;
  }

  &__description {
    @include make-sm-column(4, 0);
  }
  &__content {
    width: 617px;
    height: 348px;
  }
  &__img {
    width: 100%;
  }
  &__btns {
    text-align: center;
  }
  &__btn {
    @extend %btn;
    @include button-color($primary,$primary-light, transparent,
      $primary, $primary, transparent);
    padding: 1rem;
    border-radius: 1rem;
    padding: 1rem 2rem;
  }
  &__btn ~ &__btn{
    margin-left: 1rem;
  }
  &__video {
    height: 100%;
    position: absolute;
    left: -1px;
  }
}
.vueperslide__content {
  height: 100%;
  position: relative;
}
.reverse {
  flex-direction: row-reverse;
}
.vueperslide__content-wrapper {
  position: relative!important;
  height: 100%;
}

</style>
