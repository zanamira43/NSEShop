<script setup>
const route = useRoute()
const {data: category} = await useFetchCategory(route.params.id)

const showMenu = ref(false)

const products = ref(category.value.products)

const handleDelete = async (id) => {
  products.value =  products.value.filter((p) => p.id != id)
  
}

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLayout name="headtitle">
         <!-- Detail of the main category -->
         <div class="mb-[20px]">
           <ManageCategoryDetail :category="category"/>
         </div>
       

        <!-- get sub categories if there are -->
        <div v-if="category.sub_category?.length">
          <ManageCategoryList :categories="category.sub_category"/>
        </div>
        
        <!-- if not sub category get products -->
        <div v-if="category.products?.length">
          <div class="flex flex-row justify-end -mt-[80px] z-40 mb-[70px]">
            <NuxtLink :to="`/manage/categories/${route.params.id}/product/create`"
              class="text-blue-500 hover:text-blue-400">
              New Product
            </NuxtLink>
          </div>
          <ManageProductList 
            :products="products" 
            @deleteProduct="handleDelete"
            />
        </div>

        <!-- choose between product or new sub category  make your decision -->
        <div v-if="!category.sub_category?.length && !category.products?.length" class="mt-[50px]">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-xl font-bold text-gray-600 capitalize">There is No SubCategory Or Proudcts Here</h1>
            <p class="text-sm font-semibold text-gray-600 mt-2">you can make your decision</p>
          
            <div class="mt-[10px]">
              <button @click="showMenu = !showMenu" class="px-3 py-1 border border-white bg-gray-700 hover:bg-gray-500 text-white font-semibold rounded-md">Choose </button>
              <div v-if="showMenu" class="z-20 border bg-gray-700 p-3 fixed rounded-md text-white">
                <ul class="space-y-3">
                  <li class="hover:text-gray-200">
                    <NuxtLink to="/manage/categories/create">
                      Create New Category
                    </NuxtLink>
                  </li>
                  <li class="hover:text-gray-200">
                    <NuxtLink :to="`/manage/categories/${route.params.id}/product/create`">
                      Create New Proudct
                    </NuxtLink>
                  </li>
                </ul>
                
              </div>
            </div>
           
          </div>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>

