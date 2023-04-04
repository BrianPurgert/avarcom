<template>
  <div class="wrapper mt-8">
    <h2 class="title">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  min-height: 100px;
  margin-bottom: 20px;
  border-top: 1.5px solid red;
  border-bottom: 1.5px solid red;
}
</style>
