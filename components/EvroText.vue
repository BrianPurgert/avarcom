<template>
  <div>
    <div v-html="text"></div>

    <VImg
      alt="Изображение европротокола"
      :src="image"
      lazy-src="icon.png"
      class="mt-6"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
