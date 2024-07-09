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

<template>
  <header class="absolute top-0 left-0 w-full py-8 z-10">
    <div class="flex items-center justify-between container">
      <h1 class="uppercase text-primary text-2xl font-bold">Coders <span class="text-white">Coffee.</span></h1>

      <div>
        <img :src="open" alt="open" />
      </div>
    </div>
  </header>
</template>
