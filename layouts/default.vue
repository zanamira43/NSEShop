<script setup>

</script>
<template>
  <div class="flex">
    <!-- side bar navigation -->
    <SideNav />

    <!-- main content -->
    <div class="ml-[80px] w-full relative h-screen">
      <div class="sticky top-0 z-10 flex flex-col min-h-screen">
          <!-- navigation & logo & search -->
          <Navigation />
          <slot />

          <Footer />
      </div>
    </div>
  </div>
</template>