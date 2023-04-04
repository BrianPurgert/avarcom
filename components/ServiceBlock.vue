<template>
  <VExpansionPanel variant="popout" class="justify-space-between mb-8">
    <VExpansionPanelTitle :hide-actions="$vuetify.display.xs">
      <template #default="{ expanded }">
        <VRow no-gutters>
          <VCol>
            <img
              v-if="service.icon"
              :src="service.icon"
              :alt="`изображение ${service.title}` || 'иконка'"
              width="80"
              height="80"
              loading="lazy"
              class="img mb-2"
            />
            <div class="services__h4 mb-2">
              <h4>{{ service.title }}</h4>
            </div>

            <div v-if="service.price" class="services__price mb-2">
              <p>цена: {{ service.price }}руб.</p>
            </div>
          </VCol>
        </VRow>
        <VRow v-if="service.short_description" no-gutters>
          <div v-html="service.short_description"></div>
        </VRow>
      </template>
    </VExpansionPanelTitle>

    <VExpansionPanelText>
      <div>
        {{ service.full_description }}
        <a v-if="service.link" :href="service.link">
          {{ service.link_text }}
        </a>
      </div>
    </VExpansionPanelText>
  </VExpansionPanel>
</template>

<script setup lang="ts">
import ServiceModel from "~/models/ServiceModel";

const props = defineProps({
  service: {
    type: Object as PropType<ServiceModel>,
    default: () => ({}),
  },
});

const open: Ref<Boolean> = ref(false);
</script>

<style scoped lang="scss">
.img {
  width: 80px;
  min-width: 80px;
  height: 80px;
  min-height: 80px;
}
</style>
