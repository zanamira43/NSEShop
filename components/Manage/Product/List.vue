<script setup>
const props = defineProps({
  products: Array
})
const modal = ref(0)
const pdetail = ref({})

const showDetail = (product) => {
  modal.value = product.id
  pdetail.value = product
}

const emit = defineEmits(["deleteProduct"])

</script>
<template>
  <div>
    
  </div>
  <div
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 relative">

    <div class="shadow-lg rounded-lg border border-red-200" v-for="product in products"   :key="product.id">

      <div class="cursor-pointer" @click="showDetail(product)">
        <img
          :src="`${product.image}`"
          alt=""
          class="rounded-tl-lg rounded-tr-lg object-cover w-full h-[350px]"
        />
      </div>
      <div class="px-2">
        <div class="flex flex-row justify-between">
          <!-- product title -->
          <h3 class="md:text-2xl md:mt-[8px] text-xl mt-[20px]">{{ product.title }}</h3>

          <!-- product detail -->
          <div class="flex flex-col xl:flex-row justify-between my-3">
            <button
              @click="showDetail(product)"
              class=" px-4 py-1 rounded-full text-blue-500 hover:bg-gray-100  flex flex-row justify-center mt-2 md:mt-0"
            >
              <span> View</span>
            </button>
          </div>
        </div>

        <!-- option panel -->
        <div class="flex flex-row justify-between my-1 px-2">
          <div class="text-green-500 md:text-lg text-sm hover:text-green-200">
            <NuxtLink to="#" >Edit</NuxtLink>
          </div>
          <div class="text-red-500 md:text-lg text-sm hover:text-red-200">
            <button @click="emit('deleteProduct', product.id)" >Delete</button>
          </div>
        </div>
      </div>
      
        <!-- Product detail modal component -->
        <ProductDetail 
        v-if="product.id == modal" 
        :product="pdetail"
        @closeModal="modal = 0"
        />



    </div> 
  </div>
</template>