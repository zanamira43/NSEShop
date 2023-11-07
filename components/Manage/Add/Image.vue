<script setup>
const image = useState('CategoryImage', () => {
  return {
    preview: null,
    image: null
  }
})

const emits = defineEmits(["changeInput"])
const onUploadImage = (event) => {
  const input = event.target
  if(input.files){
    const reader = new FileReader()
    reader.onload = (e) => {
      image.value.preview = e.target.result 
    }
    image.value.image = input.files[0]
    reader.readAsDataURL(input.files[0])
    emits('changeInput', input.files[0], "image")
  }
}


const ClearImage = () => {
  image.value.preview = null
  image.value.image = null
}
</script>
<template>
  <div class="col-span-5 offset-md-1 mt-2 md:w-[48%] w-full">
    <label for="" class="text-blue-500 mb-1 text-sm">Image *</label>
    <form class="mt-2">
      <div class="form-group md:flex md:flex-row md:space-x-10">
        <!-- input file field -->
        <div class="relative">
          <input 
          type="file" 
          accept="image/*"
          class="absolute opacity-0 cursor-pointer"
          @change="onUploadImage"
          multiple
          />
          <span class="cursor-pointer rounded border border-gray-200 text-gray-500 px-1 py-1">
            Browse File
          </span>
        </div>
        <!-- preview section for image before sendit to backend -->
        <div class="border p-1 mt-2 w-[200px] md:w-72 md:mt-0" v-if="image.preview">
          <NuxtImg :src="image.preview" class="image-fluid" />
          <button @click.prevent="ClearImage" class="text-red-500 mt-1">X</button>
        </div>
      </div>
    </form>
  </div>
</template>