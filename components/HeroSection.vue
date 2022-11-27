<template>
  <!-- hero section  component -->
  <div class="md:flex md:flex-row mt-20">
    <!-- text wrapper -->
    <div class="md:w-2/5 flex flex-col justify-center items-center md:items-start">
      <h2 class="font-serif text-3xl text-gray-600 mb-4 text-center md:text-left">
        Some Catchy Title Here.
      </h2>
      <p class="uppercase text-gray-600 tracking-wide text-center md:text-left">
        Our Brand tagline goes here.
      </p>
      <p class="uppercase text-gray-600 tracking-wide text-center md:text-left">
        Our Brand motto goes here.
      </p>
      <a
        href="#"
        class="bg-gradient-to-r from-red-600 to-pink-500 px-5 py-5 rounded-full text-gray-50 uppercase text-xl md:self-start mt-1"
        >Shop Now</a
      >
    </div>
    <!-- image wrapper -->
    <div class="md:w-3/5 mt-4">
      <img src="../public/hero-img.svg" alt="" class="w-full" />
    </div>
  </div>
</template>
