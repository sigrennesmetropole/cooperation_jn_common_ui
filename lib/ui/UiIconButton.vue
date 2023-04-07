<script lang="ts" setup>
import { Ref, ref } from 'vue'

defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  titleButton: {
    type: String,
    default: '',
  },
  ariaLabelButton: {
    type: String,
    default: '',
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  positionX: {
    type: String,
  },
  positionY: {
    type: String,
  },
})

const showTitle: Ref<boolean> = ref(false)
</script>

<template>
  <button
    :disabled="disabled"
    class="relative shadow-lg w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
    :title="titleButton"
    :aria-label="ariaLabelButton"
    @focus="showTitle = true"
    @blur="showTitle = false"
  >
    <div
      v-if="showTitle"
      class="absolute border-2 border-black bg-white p-1 rounded text-black text-base font-normal"
      :style="{
        height: height + 'px',
        width: width + 'px',
        top: positionY + 'px',
        left: positionX + 'px',
      }"
    >
      {{ titleButton }}
    </div>
    <slot></slot>
  </button>
</template>
