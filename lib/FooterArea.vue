<script setup lang="ts">
import UiRennesLogo from './ui/UiRennesLogo.vue'
import UiLinkFooter from './ui/UiLinkFooter.vue'
import { defineEmits, PropType } from 'vue'
import type { LegalItem } from './model/legalItem.model'
const emit = defineEmits(['openLink'])

const props = defineProps({
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
  legalList: Array as PropType<LegalItem[]>,
})

function goTo(linkToFollow: String) {
  emit('openLink', linkToFollow)
}
</script>
<template>
  <footer
    class="flex flex-col p-2 gap-4 font-dm-sans divide-y divide-neutral-200"
    id="footer"
  >
    <div class="flex p-0 gap-6">
      <UiRennesLogo class="w-36 h-7"></UiRennesLogo>
      <div class="font-normal text-xs">
        Visualisez les données thématiques du territoire sur la maquette 3D
      </div>
    </div>
    <div
      class="flex flex-wrap items-end gap-[7px] pt-2 font-dm-sans font-normal text-xs leading-4 text-neutral-500 underline hover:cursor-pointer"
    >
      <UiLinkFooter
        v-for="item in props.legalList"
        :key="item['name']"
        @click="goTo(item['link'])"
        :textColor="props.textColor"
        >{{ item['name'] }}</UiLinkFooter
      >
    </div>
  </footer>
</template>
