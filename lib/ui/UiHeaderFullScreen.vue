<script setup lang="ts">
import UiButton from './UiButton.vue'
import IconCrossClose from '../icons/IconCrossClose.vue'
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-[100%] h-[72px] bg-white shadow z-40"
  >
    <div class="flex flex-row items-center">
      <slot name="title-img"></slot>
    </div>
    <slot name="mid-content"></slot>
    <div>
      <UiButton
        class="ui-btn-secondary ui-btn-regular-size justify-center"
        :icon="IconCrossClose"
        @click="$emit('close-legal')"
      >
        <slot name="button-content"></slot>
      </UiButton>
    </div>
  </div>
</template>
