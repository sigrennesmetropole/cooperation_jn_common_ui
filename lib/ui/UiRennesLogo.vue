<script lang="ts" setup>
const rennesLogo = new URL('../../assets/rennesLogo.svg', import.meta.url).href
</script>

<template>
  <img :src="rennesLogo" alt="Rennes Métropole" />
</template>
