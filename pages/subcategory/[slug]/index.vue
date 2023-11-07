<script setup>
const route = useRoute()
const {data: category} = await useFetchCategory(route.params.slug)

</script>
<template>
  <div>
    <NuxtLayout>
      <!-- sub category detail  -->
      <CategoryDetail :category="category" />

      <!-- list of the products that belongs to the spesific category -->

      <div v-if="category.products?.length" class="py-5">
        <ProductList :products="category.products" />
      </div>

    </NuxtLayout>
  </div>
</template>