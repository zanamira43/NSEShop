<script setup>
const {data} = await useFetchCategories()

const mainCategories = computed(() => {
  return data.value.filter((c) => c.category_id == null)
})

const errorMessage = ref("")

const info = useState('addInfo', () => {
  return {
    name: "",
    description: "",
    category_id: null,
    image: null
  }
})

const onChangeInput = (data, name) => {
  info.value[name] = data
}

const isButtonDisabled = computed(() => {
  // for(let key in info.value){
  //   if(!info.value[key]) return true
  // }
  if(!info.value.name && !info.value.description && !info.value.image) return true
  return false
})


const handleSubmit = async () => {
  const {data} = await useUploadImage().categoryImage(info.value.image) 

  let body = {}
  if(info.value.category_id == ""){
    body = {
      ...info.value, 
      name: info.value.name,
      description: info.value.description,
      image: data.url
    }
  }else {
    body = {
      ...info.value, 
        name: info.value.name,
        description: info.value.description,
        category_id: info.value.category_id,
        image: data.url
    }
  }

 
  const {apiURL} = useURl()
  try{
     await $fetch(`${apiURL}/api/categories`, {
      method: "POST",
      body: body
    })

    info.value.name = ""
    info.value.description = ""
    info.value.category_id = null
    info.value.image = null

    navigateTo(`/manage/categories/`)
  }catch(e){
    errorMessage.value = e
  }
    


}

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLayout name="headtitle">
        <div class="flex justify-between px-2  bg-gray-100 rounded-md">
          <NuxtLink to="/manage/categories" class="text-blue-500 hover:text-blue-300">Back</NuxtLink>
          <h1 class="md:text-2xl font-medium text-gray-500">You Can Add New Category Here</h1>
        </div>
        <!-- adding create form component -->
        <div class="shadow mt-5 rounded p-3 flex flex-wrap justify-between">
          <!-- category name input field -->
          <ManageAddInput 
            type="text"
            title="Name *" 
            name="name" 
            placeholder="Category Name" 
            @change-input="onChangeInput"/>

            <!-- select component fo category id -->
            <ManageAddSelect 
              v-if="data?.length"
              title="Sub Category it's Optional *" 
              name="category_id" 
              :options="mainCategories"
              @change-input="onChangeInput"/>

            <!-- Text Area Component for description -->
            <ManageAddTextArea 
            title="Description *" 
            name="description" 
            placeholder=""
            @change-input="onChangeInput"/>

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