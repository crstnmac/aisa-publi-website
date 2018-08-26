<template lang="html">
  <section class="clients" id="clients">
    <h2 class="title">Nuestros clientes</h2>
    <div class="logos">
      <div class="logo" v-for="(client, i) in clients">
        <a target="_blank" :href="client.url">
          <img :src="require('~/assets/img/clients/' + client.img)" :alt="client.id">
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data: () => ({
    clients: [
      {
        id: 'client1',
        url: "#",
        img: 'google_logo.png'
      },
      {
        id: 'client2',
        url: "#",
        img: 'google_logo.png'
      }
    ]
  })
}
</script>

<style lang="scss">
.logos {
  display: flex;
}
.logo {
  width: 25%;
  opacity: .5;
  transition: opacity .2s ease-out;

  &:hover {
    opacity: 1;
  }
}

</style>
