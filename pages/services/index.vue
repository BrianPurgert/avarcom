<template>
  <VContainer>
    <section>
      <TheTitle v-if="servicesPage.title" :title="servicesPage.title" />

      <ServicesSection
        v-if="servicesPage.services"
        :services="servicesPage.services"
      />
    </section>
  </VContainer>
</template>

<script setup lang="ts">
import TheTitle from "~/components/common/TheTitle.vue";

const config = useRuntimeConfig();

const { data: servicesPage } = await useAsyncData("services", () =>
  $fetch(`${config.public.api}service_page/`).catch((err) => console.warn(err))
);

useHead({
  title: "Услуги и цены",
});
</script>
