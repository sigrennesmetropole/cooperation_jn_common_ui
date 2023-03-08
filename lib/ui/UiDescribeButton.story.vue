<script lang="ts" setup>
import UiDescribeButton3D from './UiDescribeButton3D.vue'
import UiDescribeButtonCompass from './UiDescribeButtonCompass.vue'
</script>

<template>
  <Story
    title="UiDescribeButton"
    :layout="{
      type: 'grid',
      width: 500,
    }"
  >
    <Variant :title="'3D'">
      <template #default>
        <UiDescribeButton3D></UiDescribeButton3D>
      </template>
    </Variant>
    <Variant :title="'Compass'">
      <template #default>
        <UiDescribeButtonCompass></UiDescribeButtonCompass>
      </template>
    </Variant>
  </Story>
</template>
