<template>
  <div class="flex flex-col min-h-screen" data-theme="">
    <nav class="flex flex-wrap justify-between items-center z-50 py-2 sticky top-0 bg-primary text-primary-content">
      <a class="mx-3 px-2 py-1 btn-primary" href="/">Home</a>
    </nav>
    <Nuxt  class="flex-1" />
    <footer class="mt-12 grid grid-cols-1 md:grid-cols-3 px-4 py-3 bg-neutral text-neutral-content gap-1">
        <p></p>
        <nuxt-link class="col-start-1 md:col-start-2 justify-self-center" to="/">Mapythonchita - {{year}}</nuxt-link>
    </footer>
  </div>
</template>

<script>
import { themeChange } from 'theme-change'
export default {
  data() {
    return {
        year: new Date().getFullYear(),
        key: ''
    }
  },
  async mounted() {
    themeChange(false)
    await this.getTheme()
  },

  methods: {
    getTheme() {
      this.key = localStorage.getItem('theme') || 'night'
      return this.key
    },
  },

}
</script>
