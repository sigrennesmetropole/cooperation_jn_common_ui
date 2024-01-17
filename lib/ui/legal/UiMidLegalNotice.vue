<script setup lang="ts">
import type { LegalItem } from '../../model/legalItem.model'

defineProps({
  legalList: {
    type: Array<LegalItem>,
  },
  legalLink: String,
  goTo: {
    type: Function,
    required: true,
  },
})
</script>
<template>
  <div class="flex flex-row self-end gap-4">
    <div
      v-for="item in legalList"
      :key="item.name"
      class="flex flex-row align-center pt-2 pb-4 px-2"
      :class="legalLink == item.slug ? 'border-black border-b-2' : ''"
    >
      <h4
        tabindex="0"
        class="text-[18px] leading-6 bold cursor-pointer"
        @click="goTo(item.link)"
        @keydown.enter="goTo(item.link)"
      >
        {{ item.name }}
      </h4>
    </div>
  </div>
</template>
