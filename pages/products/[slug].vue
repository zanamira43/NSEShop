<script setup>
const route = useRoute()
const {data: product} = await useFetchProduct(route.params.slug)

</script>
<template>
  <div>
    <NuxtLayout>
      <div class="mt-20">
        <ProductDetail :product="product" />
      </div>
    </NuxtLayout>
  </div>
</template>