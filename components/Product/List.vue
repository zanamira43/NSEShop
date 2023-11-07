<script setup>
import EyeArrowRight from 'vue-material-design-icons/EyeArrowRight.vue'
 
const props = defineProps({
  products: Array
})
const modal = ref(0)
const pdetail = ref({})

const showDetail = (product) => {
  modal.value = product.id
  pdetail.value = product
}

</script>
<template>
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
      <div class="p-5 flex flex-col justify-center items-center">
        <h3 class="md:text-2xl md:mt-[8px] text-xl mt-[20px]">{{ product.title }}</h3>
        <p class="text-gray-500 mt-[5px]">
          {{ product.description }}
        </p>
      </div>

      <div class="p-2 flex flex-row justify-end">
        <div class="flex flex-col xl:flex-row justify-between my-3 mr-[10px]">
          <button
            @click="showDetail(product)"
            class="bg-blue-600 px-4 py-2 rounded-lg text-gray-50 hover:bg-blue-400 flex flex-row justify-center mt-2 md:mt-0"
          >
            <EyeArrowRight/>

            <span class="ml-[2px]">View</span>
          </button>
        </div>
      </div>

      <!-- Product detail modal component -->
      <ProductDetail 
      v-if="product.id == modal" 
      :product="pdetail"
      @close-modal="modal = 0"
      />
    </div> 
  </div>
</template>