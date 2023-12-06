<script setup>
const {data: categories} = await useFetchCategories()


</script>
<template>
  <div>
    <NuxtLayout> 
      <!-- categories section list -->
      <CategoryList ComponentTitle="Product Class" :categories="categories" />

      <!-- product list  -->
      <div class="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 p-4 z-20">
        <div class="product bg-white drop-shadow-2xl border">
          <NuxtImg 
            src="/products/men/product1.jpg" 
            alt="" 
            class="w-full h-auto object-cover"
          />
          <div class="m-2 p-2 space-y-1 bg-gray-100 rounded">
            <h1 class="md:text-xl font-semibold">Men T.Shirt</h1>
            <p class="text-sm md:font-normal font-light">Nice Men T.shirt for every season</p>
            <div class="flex justify-between items-center">
              <p class="text-sm md:text-xl font-bold">$50.00</p>
              <Icon name="clarity:shopping-cart-line" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
  
</template>

