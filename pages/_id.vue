<template>
  <main class="px-4 flex flex-col flex-wrap justify-center items-center mb-12 mt-6">
      <article v-if="page" class="mx-auto ">
        <label class="swap swap-flip w-90v sm:w-70v md:w-50v lg:w-40v">
        <input type="checkbox" class="hidden" v-model="tarjeta" />
        <div class="swap-on bg-neutral text-neutral-content p-5 rounded-lg w-90v sm:w-70v md:w-50v lg:w-40v">
          <h2 class="text-xl font-bold mb-1">Pregunta {{page.slug}}</h2>
            <div class="flex flex-wrap gap-2">
              <div v-for="content in page.contents" :key="content">
                <div class="badge badge-secondary badge-sm my-3">{{content}}</div>
              </div>
            </div>
            <p class="py-3 font-lato">{{page.question}}</p>
        </div>
        <div class="swap-off bg-neutral text-neutral-content p-5 rounded-lg w-90v sm:w-70v md:w-50v lg:w-40v">
            <h2 class="text-xl font-bold mb-2">Respuesta</h2>
            <nuxt-content class="py-3 font-lato prose max-w-none mx-auto bg-neutral text-neutral-content prose-headings:text-neutral-content prose-code:text-neutral-content prose-strong:text-neutral-content prose-img:rounded-md" :document="page" />
        </div>
        </label>
    </article>
  </main>
</template>

<script>
  export default {
    data(){
      return{
        tarjeta: true
      }
    },
    async asyncData({ params, $content }) {
      const id = params.id
      const page = await $content('preguntas', id).fetch()
        return {
        page, id
        }
    }
    }
</script>
