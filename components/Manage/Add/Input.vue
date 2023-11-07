<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
  type: String || Number
})

const emits = defineEmits(["changeInput"])
const state = ref("")
const onChange = () => {
 emits("changeInput", state.value, props.name)
}
</script>
<template>
  <div class="flex flex-col w-full md:w-[48%] mt-2">
    <label for="" class="text-blue-500 mb-1 text-sm">{{ title }}</label>
    <input 
      :type="type" 
      class="p-2 w-100 rounded border"
      v-model="state" 
      :name="name" 
      :placeholder="placeholder"
      @input="onChange"/>
  </div>
</template>