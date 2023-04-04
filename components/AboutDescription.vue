<template>
  <div :class="[$style.wrapper, 'pa-4']">
    <p :key="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgba(grey, 0.1);
}
</style>
