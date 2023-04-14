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
</script>

<template>
  <button
    :disabled="disabled"
    class="relative shadow-lg w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
    :data-title="titleButton"
    :aria-label="ariaLabelButton"
    @focus="showTitle = true"
    @blur="showTitle = false"
  >
    <div
      v-if="showTitle"
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

<style>
[data-title]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  visibility: visible;
}
[data-title]:after {
  content: attr(data-title);
  background-color: rgba(23, 23, 23, 0.8);
  border-radius: 8px;
  padding: 8px 24px;
  font-family: 'DM Sans', sans-serif;
  color: #e5e5e5;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  right: 55px;
  white-space: nowrap;
  z-index: 99999;
  visibility: hidden;
}
[data-title] {
  position: relative;
}
</style>
