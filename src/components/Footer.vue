<script>
import { codersCafe, quickLinks } from '../constants';
import payment from '../assets/website/credit-cards.webp'

export default {
  name: 'Footer',
  data () {
    return {
      codersCafe: codersCafe,
      quickLinks: quickLinks,
      payment: payment
    }
  }
  //props[]
  //components: {}
  // methods: {funcs}
  // computed: {methods}
}
</script>

<template>
  <footer class="p-10 bg-primaryDark">
    <div class="container">
      <div class="grid lg:grid-cols-3 gap-y-10 gap-x-20 mb-4">
        <article class="flex flex-col space-y-3">
          <h3 class="text-white font-bold uppercase text-3xl">{{ codersCafe.title }}</h3>
          <p class="text-white">
            {{ codersCafe.description }}
          </p>
          <p class="text-white">{{ codersCafe.phone }}</p>
          <p class="text-white">{{ codersCafe.address }}</p>
        </article>

        <div class="flex flex-col space-y-3">
          <h3 class="text-white font-bold text-3xl">Quick Links</h3>
          <div class="flex items-center justify-between">
            <ul class="flex flex-col space-y-2">
              <li v-for="link in quickLinks" class="text-white" :key="link">
                {{ link }}
              </li>
            </ul>
            <ul class="flex flex-col space-y-2">
              <li v-for="link in quickLinks" class="text-white" :key="link">
                {{ link }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <h3 class="text-white font-bold text-3xl">Follow Us</h3>
          <div>
            <ul class="flex items-center space-x-2">
              <li v-for="social in ['facebook', 'instagram', 'telegram', 'google']" :key="social" class="text-white">{{ social }}</li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold text-2xl">Payment Methods</h4>
            <div>
              <img :src="payment" alt="methods of payment" />
            </div>
          </div>
        </div>
      </div>
      <hr>
      <p class="text-white mt-5 text-center">Copyright © 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>
