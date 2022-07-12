<template>
  <main class="px-4 mb-12 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      <article v-for="page in pages" :key="page.id" class="mx-auto w-full">
        <nuxt-link :to="`/${page.slug}`" class="bg-neutral text-neutral-content p-5 rounded-lg flex flex-col flex-wrap ">
          <h2 class="text-xl font-bold mr-2">Pregunta {{page.slug}}</h2>
          <div>
            <div class="flex flex-wrap gap-2">
                <div class="badge badge-secondary badge-sm my-3" v-for="content in page.contents" :key="content">
                    {{content}}
                </div>
            </div>
            <p class="font-lato">{{page.question}}</p>
          </div>
        </nuxt-link>
    </article>
  </main>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    async asyncData({ $content }) {
      const pages = await $content('preguntas').without("body").sortBy('createdAt').fetch()
        return {
        pages
        }
    }
    }
</script>
