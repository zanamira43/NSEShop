<script setup>
const route = useRoute()
const {data: category} = await useFetchCategory(route.params.slug)

</script>
<template>
  <div>
    <NuxtLayout>
      <!-- Detail of main Categories -->
      <CategoryDetail :category="category" />

      <!-- sub categories list that relate with maijor categories list component place -->
      <div v-if="category.sub_category?.length">
        <SubCategoryList :categories="category.sub_category"/>
      </div>
      <!-- product list if there is no sub categories -->
      <div v-if="category.products?.length" class="py-5">
        <ProductList  :products="category.products"/>
      </div>
      
    </NuxtLayout>
  </div>
</template>