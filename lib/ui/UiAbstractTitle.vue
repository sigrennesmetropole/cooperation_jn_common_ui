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
  <div class="h-1.5">
    <section class="flex flex-col p-0 gap-3 font-dm-sans">
      <div class="flex items-center p-0 gap-2.5">
        <div class="h-14 w-14">
          <component v-if="logo" :is="logo" role="img"></component>
        </div>
        <div class="font-bold text-3xl text-center">{{ title }}</div>
      </div>
      <div class="font-medium text-sm text-neutral-800">
        {{ abstract }}
      </div>
      <component v-if="panelSummary" :is="panelSummary"></component>
    </section>
  </div>
</template>
