<script lang="ts" setup>
import UiButtonWithTooltip from './UiButtonWithTooltip.vue'
</script>

<template>
  <Story title="UiButtonWithTooltip">
    <template #default>
      <UiButtonWithTooltip
        widthButton="4"
        heightButton="4"
        text="La surface favorable correspond à un potentiel supérieur à 1200 kWh/m2/an."
        widthBoxText="w-[300px]"
      ></UiButtonWithTooltip>
    </template>
  </Story>
</template>
