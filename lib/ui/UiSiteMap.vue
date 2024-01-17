<script setup lang="ts">
defineProps({
  coopterr_url: String,
  solaire_url: String,
  ondes_url: String,
  trambus_url: String,
})
</script>
<template>
  <div
    class="flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[87px]"
  >
    <h1
      class="flex flex-column align-start text-[44px] leading-[48px] lmb-12 font-bold"
    >
      Plan du site
    </h1>
    <a class="text-xl font-bold mb-2" :href="coopterr_url"> COOPTERR </a>
    <a class="text-xl font-bold mb-2" :href="solaire_url"> Cadastre Solaire </a>
    <a class="text-xl font-bold mb-2" :href="ondes_url"> Ondes & Mesures </a>
    <a class="text-xl font-bold mb-2" :href="trambus_url"> Réseau Trambus </a>
  </div>
</template>
