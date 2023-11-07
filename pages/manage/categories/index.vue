<script setup>
const {data: categories} = await useFetchCategories()

const maincategories = computed(() => {
  return categories.value.filter((d) => d.category_id == null)
})

</script>
<template>
  <div>
    <NuxtLayout>
      <!--  manage panel for creating & modifing category - product -->
      <NuxtLayout name="headtitle">
        <div class="flex justify-between px-2  bg-gray-100 rounded-md">
          <h1 class="md:text-2xl font-medium text-gray-500">Managing the Nas Eshop web App</h1>

          <div class="mt-1 text-blue-500 hover:text-blue-300">
            <NuxtLink to="/manage/categories/create">New Category</NuxtLink>
          </div>
        </div>

         <!-- grid section for catgory lists -->
        <div>
          <ManageCategoryList :categories="maincategories"  ComponentTitle="Category List"/>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>