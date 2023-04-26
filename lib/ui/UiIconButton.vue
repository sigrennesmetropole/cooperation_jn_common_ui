<script lang="ts" setup>
import { Ref, ref } from 'vue'
import '../css/navigation.css'

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
  heightTitle: {
    type: String,
  },
  widthTitle: {
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

const isClick: Ref<boolean> = ref(false)

function reset() {
  showTitle.value = false
  isClick.value = false
}
</script>

<template>
  <button
    :disabled="disabled"
    class="relative shadow-lg w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
    :data-title="titleButton"
    :aria-label="ariaLabelButton"
    @focus="showTitle = true"
    @blur="reset()"
    @mousedown="isClick = true"
  >
    <div
      v-if="showTitle && !isClick"
      class="absolute border-2 border-black bg-white p-1 rounded text-black text-base font-normal"
      :style="{
        height: heightTitle + 'px',
        width: widthTitle + 'px',
        top: positionY + 'px',
        left: positionX + 'px',
      }"
    >
      {{ titleButton }}
    </div>
    <slot></slot>
  </button>
</template>
