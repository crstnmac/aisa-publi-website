<template lang="html">
  <section class="work">
    <h2>esto es lo que hacemos</h2>
    <WorkType v-for="(worktype, i) in worktypes"
      :key="worktype.id"
      :id="worktype.id"
      :title="worktype.title"
      :slides="worktype.slides"
      :autoplay="worktype.autoplay"
    >
    </WorkType>
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
        title: 'Título del logo',
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
            color: '#7AGFC3'
          }
        ]
      },
      {
        id: 'campañas',
        title: 'Campañas',
        autoplay: false,
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
            color: '#7AGFC3'
          }
        ]
      }
    ]
  })
}
</script>

<style lang="scss">

</style>
