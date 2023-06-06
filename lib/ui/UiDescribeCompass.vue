<script setup lang="ts">
import { ref } from 'vue'

defineProps({
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
  clickClose.value = true
}
</script>

<template>
  <div
    class="flex flex-row bg-neutral-800 h-[124px] rounded-lg py-4 px-5 gap-[10px] justify-center items-start"
    v-if="!clickClose"
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
