<template>
  <VContainer>
    <TheTitle v-if="evroPage && evroPage?.title" :title="evroPage.title" />

    <div class="w-100 d-flex align-center justify-center pb-8">
      <VBtn elevation="24" size="x-large" @click="onClick">
        {{
          $vuetify.display.mobile
            ? "Скачать бланк"
            : "Скачать бланк европротокола"
        }}
      </VBtn>
    </div>

    <LazyEvroSlider v-if="evroPage?.slides" :slides="evroPage.slides" />

    <EvroText
      v-if="evroPage?.rules && evroPage?.protocol_blank_image"
      :text="evroPage.rules"
      :image="evroPage.protocol_blank_image"
      class="mt-8"
    />
  </VContainer>
</template>

<script setup lang="ts">
import TheTitle from "~/components/common/TheTitle.vue";

const config = useRuntimeConfig();

const { data: evroPage } = await useAsyncData("evro", () =>
  $fetch(`${config.public.api}europrotocol/`).catch((err) => console.warn(err))
);

useHead({
  title: "Европротокол",
});

const onClick = () => {
  window.open(evroPage.value.protocol_blank_download, "_blanc");
};
</script>

<style lang="scss" scoped></style>
