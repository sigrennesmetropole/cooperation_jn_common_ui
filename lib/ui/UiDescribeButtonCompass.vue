<script setup lang="ts">
import UiDescribeCompass from './UiDescribeCompass.vue'
import IconCompass from '../icons/IconCompass.vue'
</script>

<template>
  <UiDescribeCompass name="displayDescribeCompass">
    <div
      class="flex flex-col gap-2.5 text-neutral-200 font-dm-sans font-normal text-sm cursor-default"
    >
      <div class="flex flex-row items-center">
        <p>Déplacer l'icone nord</p>
        <div
          class="h-3 w-3 flex justify-center items-center mx-2 text-[7px] bg-black text-white border border-white rounded"
        >
          N
        </div>
        <p>pour orienter la carte</p>
      </div>
      <div class="flex flex-row items-center">
        <p>Cliquer/glisser sur</p>
        <div
          ref="arrow"
          class="h-9 w-9 bg-white rounded-[100%] z-9 flex justify-center items-center shadow-md mx-2"
        >
          <IconCompass />
        </div>
        <p>pour incliner la carte</p>
      </div>
      <div>
        <p>Ctrl + cliquer/glisser sur la carte pour naviguer</p>
      </div>
    </div>
  </UiDescribeCompass>
</template>
