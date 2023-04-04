<template>
  <VExpansionPanels>
    <ServiceBlock
      v-for="service in services"
      :key="service.id"
      :service="service"
    />
  </VExpansionPanels>
</template>

<script setup lang="ts">
import ServiceModel from "~/models/ServiceModel";

const props = defineProps({
  services: {
    type: Array<ServiceModel>,
    default: [],
  },
});
</script>

<style lang="scss"></style>
