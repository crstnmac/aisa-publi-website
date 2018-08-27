<template lang="html">
  <div class="">
    {{ work.title }}
  </div>
</template>

<script>

export default {
  data () {
    return {
      workList: [
        {
          id: 'logos',
          title: '“Logotipos, marcas, imagen corporativa”',
          img: 'cassette_logos.jpg',
          autoplay: true,
          slides: [
            {
              id: 'logo-1',
              title: 'Primer logo',
              content: 'aisa-publicidad-logo.png',
              color: '#FFA3E4',
              link: 'aisa-publicidad-logo',
              type: 'logo'
            },
            {
              id: 'logo-2',
              title: 'Segundo logo',
              content: 'aisa-publicidad-logo.png',
              color: '#7AFFC1',
              link: 'aisa-publicidad-logo',
              type: 'video'
            },
            {
              id: 'logo-3',
              title: 'Tercero logo',
              content: 'aisa-publicidad-logo.png',
              link: 'aisa-publicidad-logo',
              color: '#24D3D3'
            }
          ]
        },
        {
          id: 'campanas',
          title: '"Campañas de publicidad"',
          img: 'cassette_campanas.jpg',
          autoplay: false,
          reverse: true,
          slides: [
            {
              id: 'logo-1',
              title: 'Primer logo de campañas',
              content: 'aisa-publicidad-logo.png',
              color: '#FFA3E4',
              link: 'aisa-publicidad-logo',
              type: 'logo'
            },
            {
              id: 'logo-2',
              title: 'Segundo logo',
              content: 'aisa-publicidad-logo.png',
              color: '#7AFFC1',
              link: 'aisa-publicidad-logo',
              type: 'video'
            },
            {
              id: 'logo-3',
              title: 'Tercero logo',
              content: 'aisa-publicidad-logo.png',
              link: 'aisa-publicidad-logo',
              color: '#24D3D3'
            }
          ]
        }
      ]
    }
  },
  methods: {
    searchArray: function (nameKey, myArray) {
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
      }
    }
  },
  computed: {
    work: function () {
      return this.searchArray(this.$route.params.slug, this.workList);
    }
  }
}
</script>

<style lang="css">
</style>
