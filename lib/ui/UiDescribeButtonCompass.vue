<script setup lang="ts">
import UiDescribeButton from './UiDescribeButton.vue'

const imgTilt = new URL('../../assets/tilt.svg', import.meta.url).href
const imgOrient = new URL('../../assets/orient.svg', import.meta.url).href
</script>

<template>
  <UiDescribeButton name="displayDescribeCompass">
    <div class="font-dm-sans font-normal text-base">Cliquer et glisser</div>
    <img :src="imgTilt" class="w-4 h-[50px] cursor-pointer ml-4" />
    <div class="font-dm-sans text-sm font-normal ml-1">Incliner</div>
    <img :src="imgOrient" class="w-[50px] h-[50px] cursor-pointer ml-4" />
    <div class="font-dm-sans text-sm font-normal ml-1 mr-3">Orienter</div>
  </UiDescribeButton>
</template>
