<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const iconMultiplyWhite = new URL(
  '../../assets/icon-multiply-white.svg',
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
    class="flex flex-row bg-neutral-800 h-[124px] rounded-lg py-4 px-5 gap-[10px] justify-center items-start"
    v-if="isDisplayDescribe3D && !clickClose"
  >
    <slot></slot>
    <div class="ml-4">
      <img
        :src="iconMultiplyWhite"
        class="w-4 h-4 cursor-pointer ml-auto"
        @click="close()"
      />
    </div>
  </div>
</template>
