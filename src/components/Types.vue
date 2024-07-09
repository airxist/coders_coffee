<script>
import { coffeeTypes } from '../constants';
import CoffeeCard from './CoffeeCard.vue';
export default {
  name: 'Types',
  data () {
    return {
      coffeeLists: coffeeTypes
    }
  },
  components: {
    CoffeeCard
  }
}
</script>

<template>
  <section class="min-h-fit py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-2">Fresh and <span class="text-primary">Tasty Coffee</span></h2>
      <p class="md:w-3/6  text-center mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elt, Eos reprehenderit eum ducimus, distictio cum eaque totam voluptatem ex dolorem fuga.</p>

      <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-20">
        <CoffeeCard
          v-for="(coffee, index) in coffeeLists"
          :coffee="coffee"
        />
      </div>
    </div>
  </section>
</template>
