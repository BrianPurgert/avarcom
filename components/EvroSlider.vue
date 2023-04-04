<template>
  <div class="slider pa-8 d-flex flex-column">
    <div class="slider__title d-flex align-center pb-4">
      <div
        v-for="(el, index) in slides"
        :key="`title-${index}`"
        :class="[
          'title-item',
          'pa-2',
          'mr-8',
          { active: index === activeSlide },
        ]"
      >
        <p>
          {{ el.title }}
        </p>
      </div>
    </div>

    <div class="main">
      <div class="main__content">
        <p>
          {{ slides[activeSlide].text }}
        </p>

        <VImg
          v-if="slides[activeSlide].icon"
          alt="иконка к тексту"
          width="80"
          max-width="80"
          max-height="80"
          :src="slides[activeSlide].icon"
          lazy-src="icon.png"
          class="img"
        />
      </div>
    </div>

    <div class="slider__buttons mt-auto">
      <VBtn @click="nextSlide"> Далее </VBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import EvroSlideModel from "~~/models/EvroSlideModel";

const props = defineProps({
  slides: {
    type: Array<EvroSlideModel>,
    default: [],
  },
});

const activeSlide: Ref<number> = ref(0);

const nextSlide = () => {
  if (props?.slides[activeSlide.value + 1]) {
    return activeSlide.value++;
  } else {
    return (activeSlide.value = 0);
  }
};
</script>

<style lang="scss" scoped>
.slider {
  overflow-x: scroll;
  background-color: rgba(var(--v-theme-primary), 0.1);
  max-width: 91vw;
  min-height: 250px;
  border-radius: 8px;
  scrollbar-width: none;
  scrollbar-gutter: unset;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.title-item:not(:last-of-type) {
  display: flex;
  align-items: center;
  border-bottom: unset;
  transition: border-bottom 0.2s ease;

  &:after {
    content: "";
    width: 15px;
    min-width: 15px;
    height: 15px;
    min-height: 15px;
    margin-left: 30px;
    border-radius: 50%;
    background-color: rgb(var(--v-theme-surface));
  }
}
.active {
  border-bottom: 1px dashed rgb(var(--v-theme-primary));
}

.img {
  left: 50%;
  transform: translateX(-50%);
}
</style>
