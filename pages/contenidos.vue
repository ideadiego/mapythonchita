<template>
  <main class="px-4">
    <article class="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-6">
      <nuxt-content class="prose max-w-none mx-auto bg-base-100 text-base-content prose-code:text-base-content prose-headings:text-base-content prose-strong:text-base-content prose-img:rounded-md" :document="page" />
    </article>
  </main>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const page = await $content('contenidos').fetch()
        return {
        page
        }
    }
  }
</script>

