<template>
  <!-- News Letter Section -->
  <div class="rounded-lg shadow-lg my-20 flex flex-row bg-gradient-to-r  from-black to-purple-900 lg:via-purple-500 lg:to-transparent">
    <!-- left side -->
    <div
      class="lg:w-3/5 w-full rounded-lg text-gray-300 p-12"
    >
      <div class="lg:w-1/2">
        <h3 class="text-2xl font-extrabold mb-4">Subscribe to get our offers first</h3>
        <p class="mb-4 leading-relaxed">
          Want to hear from us when we have new offers? Sign up for our newsletter and
          we'll email you every time we have new sale offers.
        </p>
        <div>
          <input
            type="email"
            placeholder="Enter email address"
            class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
          />
          <button type="submit" class="bg-red-600 py-3 text-white rounded-lg w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <!-- right side -->
    <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden z-10">
      <img src="/news-letters-img.png" alt="" />
    </div>
  </div>
</template>
