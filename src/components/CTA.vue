<script>
import map from '../assets/world-map.png';
import coffeCover from '../assets/coffee-cover.jpg';
import FormRow from './FormRow.vue';
import { download } from '../constants';
export default {
  name: 'CTA',
  components: {
    FormRow
  },
  data () {
    return {
      map: map,
      coffeCover: coffeCover,
      download: download
    }
  }
}
</script>

<script setup>
import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import { animationFrom } from '../animate/animate';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const title = ref(null);
const formRows = ref(null);

onMounted (() => {
  animationFrom(title, {
    x: 200,
    autoAlpha: 0,
    z: 1000,
    scrollTrigger: {
      trigger: title.value,
      start: 'top center'
    }
  })

  animationFrom(formRows, {
    x: 200,
    autoAlpha: 0,
    z: 1000,
    scrollTrigger: {
      trigger: formRows.value,
      start: 'top center'
    },
    stagger: {
      amount: 0.5
    }
  }, true)
})
</script>

<template>
  <section class="py-20">
    <div class="container">
      <div class="md:flex items-center space-x-7">
        <div class="md:w-2/5">
          <h3 ref="title" class="font-bold text-5xl">Buy our products from anywhere</h3>

          <form class="mt-10">
            <div ref="formRows" class="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-7">
              <FormRow 
                type="text"
                name="fullname"
                placeholder="Name"
                className="md:col-span-3"
              />
              <FormRow 
                type="email"
                name="email"
                className="md:col-span-2"
                placeholder="Email"
              />
              <FormRow 
                type="text"
                name="country"
                className="md:col-span-2"
                placeholder="Country"
              />
              <FormRow 
                type="number"
                name="zip"
                className="md:col-span-3"
                placeholder="Zipcode"
              />
            </div>
            <button class="bg-primary hover:bg-primaryDark text-white w-full h-12 rounded-md mt-10">
              Order now
            </button>
          </form>
        </div>
        <!-- map -->
        <div class="md:w-3/5 md:h-96 mt-5 md:mt-0">
          <img
          :src="map"
          alt="map"
          class="w-full h-full"
          />
        </div>
      </div>
      <!-- call to coffeCover -->
      <div class="mt-32 relative isolate md:h-[30rem]">
        <!-- the coffee image and keyboard -->
        <div class="absolute top-0 left-0 h-full w-full rounded-2xl overflow-hidden -z-10">
          <img 
          :src="coffeCover" :alt="coffeCover"
          class="w-full h-full object-cover object-center"
          />
        </div>
        <!-- dowload article -->
        <article class="h-full md:w-[40rem] md:ml-auto p-5 md:p-24 flex flex-col items-center justify-center space-y-5">
          <h3 class="text-black text-4xl font-semibold">{{ download.title }}</h3>
          <p class="text-lg md:w-5/6 text-center">{{ download.description }}</p>
          <div class="flex items-center">
            <a class="cursor-pointer">
              <img :src="download.apple" alt="apple" />
            </a>
            <a class="cursor-pointer">
              <img :src="download.google" alt="google" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
