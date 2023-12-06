<script setup>
// import filter store by using pinia
// using this store for opening & closing filter product panel
import {useFilter} from '@/store/filter'
const filter = useFilter()

// category block code
const subCategories = ref([]) // subcategory list if we have
const mainCategoryName = ref("") // set ref variable for main category name
const categoryMessage = ref("") // for sending a message about category into template

// get all main categories
const {data} = await useFetchCategories()
const categories = computed(() => {
  return data.value.filter((d) => d.category_id == null)
})

// get all minor categories that related with main categories
// if there are no subcategories inside it. it must be products inside it
const setSubcategory = async (category) => {
  if(category.sub_category.length == 0){
    const {data} = await useFetchCategory(category.id)
    if(data.value.products.length){
      setProducts(data.value.slug)
      mainCategoryName.value = ""
      subCategories.value = []
      categoryMessage.value = "You have List of Products"
    }else {
      mainCategoryName.value = ""
      subCategories.value = []
      productLists.value = []
      categoryMessage.value = "There is No Record Here"
    }
  }else {
    mainCategoryName.value = category.name
    categoryMessage.value = ""
    subCategories.value =  data.value.filter((d) => d.category_id == category.id)
  }
 
}

/////////////////////////////////////////
// product block code 
const productLists = ref([])
// obtain all products on same category
const setProducts = async (slug) => {
  const {data} = await useFetchProducts().getProductsBySlug(slug)  
  getProducts(data)
}


// just obtain list of all products without any condition
const allProducts = async () => {
  const {data: products} = await useFetchProducts().getProducts()
  getProducts(products)
  subCategories.value = []
  mainCategoryName.value = ""
  categoryMessage.value = "You have List of Products"
  filter.show = false
}

// a special function for maping & looping a product again after we obtain it
const getProducts = (data) => {
  productLists.value =  data.value.data.map((p) => {
    return p
  })
}

onBeforeRouteUpdate(allProducts())
</script>
<template>
  <div>
    <NuxtLayout>
   
      <!-- product filter section -->
      <div class="mt-20">
        <div class="relative overflow-hidden">
          <button class="md:text-2xl text-xl text-gray-600 hover:bg-gray-200 py-1 px-2 hover:rounded-full" @click="filter.ActiveFilterPanel">
            <!-- filter icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
            </svg>
            <span>Filter</span>
          </button>

          <!-- content -->
          <div class="mt-2 transition-all duration-500 ease-in-out overflow-auto"
            :class="filter.show ?  'max-h-screen': 'max-h-0'">
            <div class="flex justify-end items-center px-2 -mb-6">
              <button @click="filter.ActiveFilterPanel">X</button>
            </div>

            <div class="px-3 py-2 grid grid-cols-3 md:grid-cols-6 gap-2">
              <div>
                <div class="border-b text-gray-600 text-sm md:text-lg">Chose Your Type</div>
                <ul>
                  <li>
                    <button @click="allProducts" class="text-gray-600">All</button>
                  </li>
                  <li v-for="category in categories" :key="category.id"
                    class="text-gray-600 p-0.5">
                    <button @click="setSubcategory(category)" class="text-gray-500 hover:text-red-500">{{ category.name }}</button>
                  </li>
                </ul>
              </div>
              <div class="col-span-2 w-[80%] mx-auto">
                <!-- set name of main category on the top of the list -->
                <div class="border-b text-gray-500" v-if="mainCategoryName">{{mainCategoryName}}</div>
                <!-- list of subCategories -->
                <div>
                  <ul>
                    <li v-for="category in subCategories" :key="category.id">
                      <button @click="setProducts(category.slug)" class="text-gray-700 hover:text-red-500">{{ category.name }}</button>
                    </li>
                  </ul>
                </div>
                  <div class="text-blue-500 text-sm md:text-2xl ml-10 mt-10" v-if="categoryMessage">{{ categoryMessage }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>

      <!-- product list related with categories -->
      <div class="mt-10" v-if="productLists?.length">
        <ProductList :products="productLists" />
      </div>

      <div class="mt-10" v-else>
        <div class="p-5 w-full h-20 shadow-md border flex flex-col items-center justify-center text-black">
           <p class="text-red-500 md:text-2xl text-xl">Sorry! There is No product Here</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>