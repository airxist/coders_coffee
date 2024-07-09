<script>
import menu from './grid-outline.svg';
export default {
  name: 'Menu',
  data () {
    return {
      svg: menu
    }
  }
}
</script>

<template>
  <img :src="svg" alt="svg" />
</template>
