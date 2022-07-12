<template>
  <div class="p-6">
    <h1 class="text-3xl font-semibold" v-if="error.statusCode === 404">Página no encontrada!</h1>
    <h1 v-else>Ocurrió un error - {{ error.statusCode }} </h1>
    <div class="my-12 inline-flex flex-col gap-6">
      <nuxt-link class="btn btn-outline btn-sm" to="./">Volver atrás</nuxt-link>
      <nuxt-link class="btn btn-outline btn-sm" to="/">Volver al home</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>