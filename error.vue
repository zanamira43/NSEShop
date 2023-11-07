<script setup>
const error = useError()

const handleError = () => {
  clearError({
    redirect: "/"
  })
}
</script>
<template>
  <div class="mx-auto h-screen flex flex-col justify-center items-center text-center">
    <h1 class="text-9xl text-red-600 font-semibold mb-5">{{ error.statusCode }}</h1>
    <h3 class="font-normal text-3xl text-gray-500">{{ error.message }}</h3>
    <button class="bg-pink-700 text-white text-2xl px-10 py-4 rounded mt-7"
      @click="handleError">Go Back</button>
  </div>
</template>