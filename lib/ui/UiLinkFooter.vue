<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
})

const textStyles = computed(() => {
  return [`text-${props.textColor}`, `before:bg-${props.textColor}`]
})
</script>

<template>
  <div class="relative w-fit">
    <p :class="textStyles">
      <slot></slot>
    </p>
  </div>
</template>
