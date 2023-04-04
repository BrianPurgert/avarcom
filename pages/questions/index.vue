<template>
  <VContainer>
    <section>
      <TheTitle
        v-if="questionsPage && questionsPage[0]?.title"
        :title="questionsPage[0].title"
      />

      <QuestionsSection
        v-if="questionsPage && questionsPage[0]?.questions?.length"
        :questions="questionsPage[0].questions"
      />
    </section>
  </VContainer>
</template>

<script setup lang="ts">
import TheTitle from "~/components/common/TheTitle.vue";

const config = useRuntimeConfig();

const { data: questionsPage } = await useAsyncData("questions", () =>
  $fetch(`${config.public.api}faq_page/`).catch((err) => console.warn(err))
);

// const { data: questionsPage } = await useAsyncData("questions", () =>
//   $fetch("http://51.250.110.239:8000/api/faq_page/").catch((err) =>
//     console.warn(err)
//   )
// );

useHead({
  title: "Вопросы",
});
</script>
