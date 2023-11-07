<script setup>
const route = useRoute()
const errorMessage = ref("")

const {data} = await useFetchCategories()

const MenClass = computed(() => {
  return data.value.filter((d) => d.id == route.params.id)
})

const info = useState('addInfo', () => {
  return {
    title: "",
    price: null,
    description: "",
    image: null,
  }
})


const onChangeInput = (data, name) => {
  info.value[name] = data
}

const isButtonDisabled = computed(() => {
  for(let key in info.value){
    if(!info.value[key]) return true
  }
  return false
})

const handleSubmit = async () => {
  const {data} = await useUploadImage().productImage(info.value.image)

  const body = {
    title: info.value.title,
    price: info.value.price,
    description: info.value.description,
    category_id: parseInt(route.params.id),
    image: data.url,
    
  }
  const {apiURL} = useURl()
  try {
    await $fetch(`${apiURL}/api/products`, {
      method: "POST",
      body: body
    })
    info.value.title = ""
    info.value.description = ""
    info.value.price = ""
    info.value.category_id = ""
    info.value.image = ""
    navigateTo(`/manage/categories/${route.params.id}`)
  }catch(err){
    errorMessage.value = err
  }

}
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLayout name="headtitle">
        <div class="flex justify-between px-2  bg-gray-100 rounded-md">
          <NuxtLink :to="`/manage/categories/${route.params.id}`" class="text-blue-500 hover:text-blue-300">Back</NuxtLink>
          <h1 class="md:text-2xl font-medium text-gray-500">Add New Product for 
            <span class="text-blue-500 font-semibold">{{ MenClass[0].name }}</span> Classs
            </h1>
        </div>
        <!-- adding create form component -->
        <div class="shadow mt-5 rounded p-3 flex flex-wrap justify-between">
          <!-- product title input field -->
          <ManageAddInput 
            type="text"
            title="Title *" 
            name="title" 
            placeholder="Product Title" 
            @change-input="onChangeInput"/>

            <ManageAddInput 
            type="number"
            title="Price *" 
            name="price" 
            placeholder="Product Price" 
            @change-input="onChangeInput"/>


            <!-- Text Area Component for description -->
            <ManageAddTextArea 
            title="Description *" 
            name="description" 
            placeholder=""
            @change-input="onChangeInput"/>

            <!-- image component for uploading images for proudcts -->
            <ManageAddImage @change-input="onChangeInput" />

            <div class="mt-5 w-full">
              <button 
                @click.prevent="handleSubmit" 
                class="bg-blue-500 text-white rounded px-7 py-2"
                :disabled="isButtonDisabled">
                Submit
              </button>
            </div>

            
            <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>