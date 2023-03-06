<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
  abstract: {
    type: String,
  },
  logo: {
    type: Object,
  },
  panelSummary: {
    type: Object,
  },
})
</script>

<template>
  <div class="flex items-center p-0 gap-2.5">
    <component v-if="logo" :is="logo" role="img" class="h-14 w-14"></component>
    <h1 class="font-bold text-3xl text-center">{{ title }}</h1>
  </div>
  <div class="font-medium text-sm text-neutral-800">
    {{ abstract }}
  </div>
  <component v-if="panelSummary" :is="panelSummary"></component>
</template>
