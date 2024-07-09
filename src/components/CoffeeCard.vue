<script>
export default {
  name: 'CoffeeCard',
  props: ['coffee']
}
</script>

<template>
  <article>
    <div class="w-48 mx-auto">
      <img
      :src="coffee.image"
      class="w-full h-full hover:scale-125 transition duration-500"
      />
    </div>
    <div class=" mt-4 flex flex-col items-center space-y-2">
      <h3 class="text-primary font-bold text-2xl">{{ coffee.title }}</h3>
      <p class="w-4/5 text-center">{{ coffee.description }}</p>
    </div>
  </article>
</template>
