<script setup>
const {data: categories} = await useFetchCategories()

const maincategories = computed(() => {
  return categories.value.filter((d) => d.category_id == null)
})

</script>
<template>
  <div>
    <NuxtLayout>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Categories Section -- list of main categoires -->
      <CategoryList
      class="md:-mt-[80px]"
      :categories="maincategories" 
      ComponentTitle="We Can Find All Collection Here"/>


      <!-- Collection Category Style -->
      <Collection CollectionName="clothes"/>
      <Collection CollectionName="Shoes"/>
      <Collection CollectionName="fizzy drinks"/>
      
    </NuxtLayout>
  </div>
</template>

