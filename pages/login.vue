<script setup>
const {login} = useAuth()
const form = reactive({
  email: "Nas.ngtc@gmail.com",
  password: "12345678",
});
// Nas.ngtc@gmail.com
// 12345678

const isLoading = ref(false);
const error = ref(false);

const url = "http://localhost:3002/api/login";
const onSubmit = async () => {
  if(!form.email || !form.password) return error.value = true
  if (isLoading.value) return;
  await login(form, url);
  isLoading.value = true;
};

definePageMeta({
  middleware: 'guest'
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="container mx-auto mt-20 flex justify-center">
        <div class="md:w-1/2 w-full shadow px-5 py-3">
          <div class="flex flex-col justify-center">
            <!-- error message -->
            <!-- <div v-if="error" class="rounded px-2 py-1 text-center bg-red-500">
              <p class="text-white text-xl">{{ error }}</p>
            </div> -->
            <!-- form title -->
            <div>
              <h1 class="font-bold md:text-3xl text-xl text-gray-500">Login</h1>
            </div>
            <!-- email section -->
            <div class="mt-4 md:px-5">
              <label class="leading-7 text-sm md:text-xl text-gray-400 font-bold"
                >Email</label
              >
              <input
                type="text"
                placeholder="Enter Your Email"
                v-model="form.email"
                :class="error ? 'border border-red-500' : ''"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <!-- password section -->
            <div class="mt-4 md:px-5">
              <label class="leading-7 text-sm md:text-xl text-gray-400 font-bold"
                >Password</label
              >
              <input
                type="password"
                placeholder="Enter Your Password"
                v-model="form.password"
                :class="error ? 'border border-red-500' : ''"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <!-- button section -->
            <div class="mt-4 md:px-5">
              <button
                @click.prevent="onSubmit"
                class="w-full bg-purple-500 text-white md:text-xl text-lg py-3 rounded"
              >
                <span v-if="isLoading">Loading...</span>
                <span v-else> Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

