<template>
  <div class="min-h-screen">
    <!-- navigation section -->
    <Navigation />

    <!-- main contnet -->
    <div class="container mx-auto p-5">
      <slot />
      <!-- News letter section -->
      <NewSLetterSection />

      <!-- Footer Section -->
      <Footer />
    </div>
  </div>
</template>
