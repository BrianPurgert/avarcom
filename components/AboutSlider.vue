<template>
  <VCarousel
    :cycle="cycle"
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    interval="7000"
    @update:modelValue="onClick('')"
  >
    <VCarouselItem
      v-for="(slide, index) in slides"
      :key="index"
      data-test="carousel-item"
    >
      <VSheet height="100%">
        <div class="d-flex flex-column fill-height justify-center align-center">
          <p class="title text-h4">
            {{ slide.title }}
          </p>

          <VBtn
            v-for="(el, i) in slide.points"
            :key="`${i}${el.title}`"
            class="mt-4"
            data-test="slide-item"
            @click="onClick(el.description)"
          >
            {{ el.title }}
          </VBtn>
        </div>
      </VSheet>
    </VCarouselItem>
  </VCarousel>
</template>

<script setup lang="ts">
import SliderModal from "~/models/SliderModal";

const props = defineProps({
  slides: {
    type: Array<SliderModal>,
    default: [],
  },
  cycle: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (e: "btn-click", description: string): void;
}>();

const onClick = (description: string) => {
  emit("btn-click", description);

  setTimeout(() => {
    const el = document.getElementById("description");

    if (el) {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, 200);
};
</script>

<style lang="scss" scoped></style>
