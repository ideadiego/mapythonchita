<template>
  <main class="px-4 flex justify-center items-center">
      <div v-if="loading" class="flex flex-col justify-center items-center p-8 gap-5">
        <p>Cargando...</p>
        <p>Puede que se demore un poco</p>
        <p>Por mientras puedes ver este gif de un gato</p>
        <img class="rounded-lg" src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif" alt="Loading cat">
      </div>
      <article v-if="!loading && pages[idx]" class="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-center">
        <label class="swap swap-flip">
        <input type="checkbox" class="hidden" v-model="tarjeta" />
        <div class="swap-on bg-neutral text-neutral-content p-5 rounded-lg block">
          <h2 class="text-xl font-bold">Pregunta {{pages[idx].slug}}</h2>
            <div class="flex flex-wrap gap-2">
              <div v-for="content in pages[idx].contents" :key="content">
                <div class="badge badge-secondary badge-sm mt-3">{{content}}</div>
              </div>
            </div>
            <p class="mt-3 font-lato">{{pages[idx].title}}</p>
        </div>
        <div class="swap-off bg-neutral text-neutral-content p-5 rounded-lg block">
            <h2 class="text-xl font-bold mb-2">Respuesta</h2>
            <nuxt-content class="font-lato prose max-w-none mx-auto bg-neutral text-neutral-content prose-headings:text-base-content prose-strong:text-base-content prose-img:rounded-md" :document="pages[idx]" />
            <div class="flex justify-evenly pt-4">
              <button v-on:click="wrongAnswer" class="btn btn-circle btn-outline btn-info">😥</button>
              <button v-on:click="correctAnswer" class="btn btn-circle btn-outline btn-error">🥰</button>
            </div>
        </div>
        </label>
    </article>
  </main>
</template>

<script>
  import JSConfetti from 'js-confetti'
  export default {
      scrollToTop: true,
      async mounted() {
          await this.searchPages()
          this.jsConfetti = new JSConfetti()
          if (localStorage.marcas){
            let marcas = JSON.parse(localStorage.marcas)
            for(let page of this.pages){
              if (!(page.slug in marcas)){
                marcas[page.slug] = 100
              }
            }
            localStorage.marcas = JSON.stringify(marcas)
          }
          else{
            let marcas = {}
            for(let page of this.pages){
              console.log(page)
              marcas[page.slug] = 100
            }
            localStorage.marcas = JSON.stringify(marcas)
          }
          this.marcas = JSON.parse(localStorage.marcas)
          this.sortMarcas()

        },
      data() {
        return {
          marcas: {},
          jsConfetti: '',
          tarjeta: true,
          pages: [],
          loading: false,
          keysSorted: []
        }
      },
      computed:{
        idx(){
          return parseInt(this.keysSorted[0])
        },
      },
      methods: {
        async searchPages (){  
          this.loading = true;
          await this.$nextTick()
          this.pages = await this.$content('preguntas')
            .fetch()
          this.loading = false
        },
        sortMarcas(){
          this.keysSorted = Object.entries(this.marcas).sort((a, b) => a[1] - b[1]);
        },
      correctAnswer(){
        this.jsConfetti.addConfetti({
          emojis: ['🥰'],
          emojiSize: 80,
          confettiNumber: 40,
        })
        this.tarjeta = true
        this.$set(this.marcas, this.idx, this.marcas[this.idx]+5)
        localStorage.marcas = JSON.stringify(this.marcas)
        this.sortMarcas()
        window.scrollTo({ top: 0 });
      },
      wrongAnswer(){
        this.jsConfetti.addConfetti({
          emojis: ['😥'],
          emojiSize: 80,
          confettiNumber: 40,
        })
        this.tarjeta = true
        this.$set(this.marcas, this.idx, this.marcas[this.idx]+1)
        localStorage.marcas = JSON.stringify(this.marcas)
        this.sortMarcas()
        window.scrollTo({ top: 0 });
      },
    },
    }
</script>
