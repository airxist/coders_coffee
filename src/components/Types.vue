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

<script setup>
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { ref, onMounted } from 'vue';

const title = ref(null);
const description = ref(null);
const types = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted (() => {
  // const typeTimeline = gsap.timeline({});

  gsap.from(title.value, {
    scale: 0,
    ease: 'bounce',
    scrollTrigger: {
      trigger: title.value,
      start: 'top center'
      // scrub: true
    }
  })

  gsap.from(description.value, {
    y: 100,
    duration: 2,
    ease: 'bounce',
    autoAlpha: 0,
    scrollTrigger: {
      trigger: description.value,
      start: 'top center'
      // scrub: true
    }
  })

  gsap.from(types.value.children, {
    y: 200,
      opacity: 0.5,
      duration: 1,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: types.value,
        start: 'bottom 90%'
      },
    stagger: {
      amount: 0.5,
      ease: 'elastic.in',
      from: 'edges'
    }
  })
})


</script>

<template>
  <section class="min-h-fit py-16 bg-white">
    <div class="container">
      <h2 ref="title" class="text-3xl font-bold text-center mb-2">Fresh and <span class="text-primary">Tasty Coffee</span></h2>
      <p ref="description" class="md:w-3/6  text-center mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elt, Eos reprehenderit eum ducimus, distictio cum eaque totam voluptatem ex dolorem fuga.</p>

      <div ref="types" class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-20">
        <CoffeeCard
          v-for="(coffee, index) in coffeeLists"
          :coffee="coffee"
        />
      </div>
    </div>
  </section>
</template>
