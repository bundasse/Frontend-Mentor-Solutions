<template>
  <div id="wrap" class="w-full h-full min-h-screen bg-dark-blue px-4 flex justify-center items-center">
    <div class="relative w-full md:w-[540px] px-6 pt-[42px] pb-16 md:px-12 md:pt-[52px] md:pb-[72px] bg-dark-grayish-blue text-center rounded-xl">
      <p class="text-neon-green tracking-[0.5em] text-xs">
        ADVICE #{{ advice.id }}
      </p>
      <h1 class=" text-light-cyan text-3xl mt-8 mb-6 md:mt-9 md:mb-10">
        "{{ advice.advice }}"
      </h1>
      <div class="flex justify-center">
        <img :src=" this.width < 768 ? require('@/assets/pattern-divider-mobile.svg'): require('@/assets/pattern-divider-desktop.svg')">
      </div>
      <button class="bg-neon-green p-5 rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2 hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-neon-green cursor-pointer" @click="getData()">
        <img src="@/assets/icon-dice.svg">
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      width: 0,
      advice:[]
    }
  },
  created() {
    axios.get("https://api.adviceslip.com/advice").then((res)=>{
      this.advice = res.data.slip;
      console.log(this.advice)
    }).catch((error)=>{
      console.log(error)
    })
  },
  methods: {
    getData(){
      axios.get("https://api.adviceslip.com/advice").then((res)=>{
        this.advice = res.data.slip;
        console.log(this.advice)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted() {
  window.addEventListener('resize', () => {
    this.width = window.innerWidth
  })
  }
}
</script>

<style>
</style>