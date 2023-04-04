<template>
  <VRow align="center" justify="center" class="mb-12">
    <VCol v-for="card in cards" :key="card.id" cols="12" md="4">
      <VHover>
        <template #default="{ isHovering, props }">
          <a :href="card.link" class="main__link">
            <VCard
              v-bind="props"
              :color="isHovering ? 'secondary' : undefined"
              :class="[
                'pa-4',
                'd-flex',
                'justify-center',
                'align-center',
                $style.block,
              ]"
            >
              <div class="center center_main padding">
                <div>
                  <div class="avarcom__top d-flex justify-center align-center">
                    <VImg
                      alt="Изображение Help / Помощь"
                      width="180"
                      max-width="180"
                      max-height="178"
                      :src="card.icon"
                      lazy-src="icon.png"
                    />
                  </div>
                  <div class="avarcom__bottom">
                    <h2 class="avarcom__h2" v-html="card.title"></h2>

                    <p class="avarcom__p" v-html="card.description"></p>
                  </div>
                </div>
              </div>
            </VCard>
          </a>
        </template>
      </VHover>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import MainCardModel from "~~/models/MainCardModel";

const props = defineProps({
  cards: {
    type: Array<MainCardModel>,
    default: [],
  },
});
</script>

<style lang="scss" module>
.block {
  min-height: 350px;
}
</style>
