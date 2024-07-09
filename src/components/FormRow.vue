<script>
export default {
  name: 'FormRow',
  props: ['type', 'name', 'placeholder', 'className']
}
</script>

<template>
  <div :class="className">
    <input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="border border-slate-400 rounded-md placeholder:font-semibold w-full py-1 px-3 h-16 focus:outline-primary"
    />
  </div>
</template>
