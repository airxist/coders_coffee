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

<template>
  <section class="py-20 border border-red-500">
    <div class="container">
      <div class="md:flex border items-center space-x-7">
        <div class="md:w-2/5">
          <h3 class="font-bold text-5xl">Buy our products from anywhere</h3>

          <form class="mt-10">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-7">
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
      <div class="mt-32 relative isolate h-[30rem]">
        <!-- the coffee image and keyboard -->
        <div class="absolute top-0 left-0 h-full w-full rounded-2xl overflow-hidden -z-10">
          <img 
          :src="coffeCover" :alt="coffeCover"
          class="w-full h-full object-cover object-center"
          />
        </div>
        <!-- dowload article -->
        <article class="border h-full md:w-[40rem] p-24 flex flex-col items-center justify-center space-y-5">
          <h3 class="text-black text-4xl font-semibold">{{ download.title }}</h3>
          <p class="text-lg md:w-5/6 text-center">{{ download.description }}</p>
          <div class="flex items-center">
            <div>
              <img :src="download.apple" alt="apple" />
            </div>
            <div>
              <img :src="download.google" alt="google" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
