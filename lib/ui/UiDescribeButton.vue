<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const iconMultiplyBlack = new URL(
  '../../assets/icon-multiply-black.svg',
  import.meta.url
).href
const imgTriangleCornerRight = new URL(
  '../../assets/triangle-corner-right.svg',
  import.meta.url
).href
const clickClose = ref(false)

const close = () => {
  localStorage.setItem(props.name, 'false')
  clickClose.value = true
}

const isDisplayDescribe3D = computed(() => {
  return localStorage.getItem(props.name) !== 'false'
})
</script>

<template>
  <div
    class="flex flex-row bg-white h-[68px] rounded py-6 px-5 justify-center items-center"
    v-if="isDisplayDescribe3D && !clickClose"
  >
    <slot></slot>
    <div class="ml-4">
      <img
        :src="iconMultiplyBlack"
        class="w-4 h-4 cursor-pointer ml-auto mr-[20px]"
        @click="close()"
      />
    </div>
    <img :src="imgTriangleCornerRight" class="w-4 h-4 -mr-[33px]" />
  </div>
</template>
