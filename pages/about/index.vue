<template>
  <VContainer>
    <section>
      <TheTitle v-if="aboutPage?.title" :title="aboutPage.title" />

      <div v-if="aboutPage?.description" v-html="aboutPage.description"></div>

      <div v-show="aboutPage?.sliders?.length" class="mt-8 pb-4">
        <LazyAboutSlider
          :slides="aboutPage.sliders"
          :cycle="!Boolean(fullDescription)"
          @btn-click="changeFullDescription"
        />
        <div>
          <Transition name="fade-content">
            <AboutDescription
              v-if="fullDescription"
              id="description"
              :description="fullDescription"
            />
          </Transition>
        </div>
      </div>
    </section>
  </VContainer>
</template>

<script setup lang="ts">
import TheTitle from "~/components/common/TheTitle.vue";

const config = useRuntimeConfig();

const { data: aboutPage } = await useAsyncData("about", () =>
  $fetch(`${config.public.api}about_us_page/`).catch((err) => console.warn(err))
);

const fullDescription: Ref<String> = ref("");

const changeFullDescription = (description: String) => {
  fullDescription.value = description;
};

useHead({
  title: "О нас",
});
</script>

<style lang="scss" scoped></style>
