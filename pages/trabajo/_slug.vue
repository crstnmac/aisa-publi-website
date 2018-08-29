<template lang="html">
  <div class="container">
    <h2 class="title">{{ works.title }}</h2>
    {{ works.description }}
    <div v-for="work in works.sections" class="card">
      <section id="work.id" class="section-work">
        <no-ssr>
          <vueper-slides autoplay v-if="work.slides">
            <vueper-slide v-for="(slide, i) in work.slides"
              :key="slide.id"
              :title="slide.title"
              :style="'background-color: ' + slide.color">
              <div slot="slideContent">
                <nuxt-link :to="slide.link">
                  <img v-if="slide.type == 'logo'" :src="require('~/assets/img/' + slide.content)" alt="">
                  <video v-if="slide.type == 'video'" :src="require('~/assets/img/' + slide.content)" autoplay v-bind:poster="require('~/assets/img/' + slide.content)"></video>
                </nuxt-link>
              </div>
            </vueper-slide>
          </vueper-slides>
        </no-ssr>
        <div class="section-work__description">
          {{ work.title }}
          {{ work.year }}
          {{ work.text }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import logos from '@/content/logos.json'
import campanas from '@/content/campanas.json'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.min.css'

export default {
  components: { VueperSlides, VueperSlide },
  data () {
    return {
      workList: [
        {
          id: "logos",
          content: logos
        },
        {
          id: "campanas",
          content: campanas
        }
      ]
    }
  },
  methods: {
    searchArray: function (nameKey, myArray) {
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i].content;
        }
      }
    }
  },
  computed: {
    works: function () {
      return this.searchArray(this.$route.params.slug, this.workList);
    }
  }
}
</script>

<style lang="scss">
.card {
  margin-bottom: 30rem;
}
</style>
