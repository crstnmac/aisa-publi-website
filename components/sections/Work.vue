<template lang="html">
  <section class="work" id="work">
    <h2 class="title">esto es lo que hacemos</h2>
    <div class="work-types">
      <WorkType v-for="(worktype, i) in worktypes"
        :key="worktype.id"
        :id="worktype.id"
        :title="worktype.title"
        :img="worktype.img"
        :slides="worktype.slides"
        :reverse="worktype.reverse"
        :autoplay="worktype.autoplay"/>
    </div>
  </section>
</template>

<script>
import WorkType from '@/components/WorkType'

export default {
  components: { WorkType },
  data: () => ({
    worktypes: [
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
        id: 'campañas',
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
      },
      {
        id: 'web',
        title: '"Desarrollo y diseño web. Tiendas online."',
        img: 'cassette_web.jpg',
        autoplay: true,
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
      },
      {
        id: 'publicaciones',
        title: '"Catálogos, folletos... en soporte papel y/o digital"',
        img: 'cassette_publicaciones.jpg',
        autoplay: true,
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
      },
      {
        id: 'senalistica',
        title: '"Señalización de senderos, rutas turísticas, infografía..."',
        img: 'cassette_senalistica.jpg',
        autoplay: true,
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
      },
      {
        id: 'merchandising',
        title: '"Merchandising diferente y personalizado"',
        img: 'cassette_merchandising.jpg',
        autoplay: true,
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
      },
      {
        id: 'animacion',
        title: '"3D, infografía, animación, spots animados"',
        img: 'cassette_merchandising.jpg',
        autoplay: true,
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
  })
}
</script>

<style lang="scss">

</style>
