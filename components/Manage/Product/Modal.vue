<script setup>
const emit = defineEmits(['closeModal'])

const close = () => {
  emit('closeModal')
}
</script>
<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> 
    <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="container mx-auto mt-20 p-3 bg-white rounded-md w-[95%] md:w-full">
      <div class="flex justify-end px-5 mb-5">
          <button @click="close">X</button>
      </div>
      <slot />
    </div>
  </div>
</template>
