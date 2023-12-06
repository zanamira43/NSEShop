<script setup>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";

const props = defineProps({
  CollectionName: String
})

const {data: categoires} = await useFetchCategories()
const category = computed(() => {
   return categoires.value.find((c) => {
    if (c.name.toLowerCase() == props.CollectionName.toLowerCase()){
        return c
    }
   })
})

</script>
<template>
  <!-- Men Collection Component -->
  <div class="my-20" v-if="CollectionName">
    <!-- title -->
    <div class="flex flex-row justify-between my-2">
      <h2 class="text-3xl">{{ category.name }} Collection</h2>
      <NuxtLink :to="`/category/${category.slug}`" class="flex flex-row justify-between">
        <span> View All</span>
        <ArrowRight fillColor="#000000" :size="20" class="ml-[10px]" />
      </NuxtLink>
    </div>

    <!-- image && detail content of men's collection -->
    <div
      class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
      <div class="shadow-lg rounded-lg" v-for="sub in category.sub_category" :key="sub.id">
        <a href="#">
          <img
            :src="sub.image"
            alt=""
            class="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div class="p-3">
          <!-- content title -->
          <div class="mt-[10px] mb-[20px] flex justify-center">
            <h3 class="font-semibold text-gray-800">{{ sub.name }}</h3>
          </div>
          
        
          <!-- option button -->
          <div class="flex flex-col xl:flex-row justify-center items-center my-3">
            <NuxtLink
              :to="`/subcategory/${sub.slug}`"
              class="px-4 py-2 rounded-full flex flex-row justify-center text-sm mt-2 md:mt-0  hover:bg-purple-700 hover:text-white border text-black"
            >
            <ArrowRight :size="20" class="mr-[5px]" />
              <span> View Details</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
