<script>
import openmenu from '../assets/icon-hamburger.svg';
export default {
  name: 'Header',
  data () {
    return {
      open: openmenu
    }
  },
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { animationFrom } from '../animate/animate';
const logo = ref(null);

onMounted(() => {
  animationFrom(logo, {
    y: -100,
    autoAlpha: 0,
    delay: 1.5,
    ease: 'power1'
  })
});

</script>

<template>
  <header class="absolute top-0 left-0 w-full py-8 z-10">
    <div class="flex items-center justify-between container">
      <h6 ref="logo" class="uppercase text-primary text-2xl font-bold">Coders <span class="text-white">Coffee.</span></h6>

      <div>
        <img :src="open" alt="open" />
      </div>
    </div>
  </header>
</template>
