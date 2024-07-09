<script>
import bgImage from '../assets/bg-slate.png';
import tumbler from '../assets/black.png'
import { heroItems } from '../constants';
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      backgroundImage: bgImage,
      heroItems: heroItems,
      tumbler: tumbler
    }
  }
}
</script>

<template>
  <section class="h-fit relative isolate overflow-hidden md:pb-32">
    <img :src="backgroundImage" alt="bg" class="w-full h-full absolute top-0 left-0 right-0 bottom-0 -z-10">

    <div class="absolute top-96 left-[50%] md:left-[55%] md:-top-32 lg:left-[40%]">
      <p class="text-[12rem] text-darkGray font-bold">Blvck</p>
      <p class="text-[13rem] text-darkGray font-bold -mt-28">Tumbler</p>
    </div>

    <div class="container pt-24 md:pt-52 relative">
      <h1 class="text-white text-7xl font-semibold ms-7">Blvck<br/>Tumbler</h1>

      <div class="flex items-center mt-24 justify-between">
        <article v-for="(item, index) in heroItems" :class="item.className" :key="index">
          <div :class="item.board" />
          <h2 class="text-white text-2xl">{{ item.title }}</h2>
          <p class="text-slate-500 text-base mt-2">{{ item.description }}</p>
        </article>
      </div>
      <!-- the tumber image -->
      <div class="h-96 w-52 m-auto md:absolute md:bottom-0 md:right-3 md:w-[23rem] md:h-[35rem] lg:h-screen lg:right-[50%] lg:translate-x-[50%] lg:w-[20rem] lg:-bottom-20">
        <img
        :src="tumbler"
        alt="tumbler"
        class="w-full h-full"
        />
      </div>
    </div>

  </section>
</template>
