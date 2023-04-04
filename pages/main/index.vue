<template>
  <section>
    <ClientOnly
      v-if="isInternetFast"
      fallback-tag="span"
      fallback="Спешим Вам на помощь"
    >
      <VideoBackground src="/videos/main.mp4" class="video">
        <div
          class="wrapper h-screen d-flex justify-center flex-column align-center pb-10 pl-sm-2"
        >
          <h1 class="text-h2">ГС Дельта - мост к получению результата.</h1>
          <p>
            Получите страховые выплаты с компанией Дельта - ваш надежный
            помощник в сложных ситуациях.
          </p>
          <p>
            Мы помогаем страховым компаниям и их клиентам получать быстрые и
            справедливые выплаты, чтобы защитить их будущее.
          </p>
          <div class="btn" @click="scrollNext">
            <VIcon
              icon="mdi-chevron-double-down"
              size="x-large"
              class="mt-10 icon"
            />
          </div>
        </div>
      </VideoBackground>
    </ClientOnly>

    <h1 v-else>ГС Дельта - мост к получению результата.</h1>

    <div ref="services" class="pt-12">
      <VContainer>
        <ButtonSection v-if="cards && cards.length" :cards="cards" />

        <ServicesSection
          v-if="servicesPage.services"
          :services="servicesPage.services"
        />

        <TheMap />
      </VContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheMap from "~/components/common/TheMap.vue";
const config = useRuntimeConfig();

const { data: cards } = await useAsyncData("cards", () =>
  $fetch(`${config.public.api}cards/`).catch((err) => console.warn(err))
);

const { data: servicesPage } = await useAsyncData("services", () =>
  $fetch(`${config.public.api}service_page/`).catch((err) => console.warn(err))
);

const isInternetFast: Ref<boolean> = ref(true);

// mount
onMounted(() => {
  const ect: string = navigator.connection.effectiveType;
  isInternetFast.value = !["slow-2g", "2g", "3g"].includes(ect);
});

// method
const services = ref(null);

const scrollNext = (): void => {
  if (services?.value) {
    services.value.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
@keyframes icon-scroll {
  0% {
    top: 0;
    opacity: 0.7;
  }

  50% {
    top: 10%;
    opacity: 1;
  }

  100% {
    top: 10%;
    opacity: 0.7;
  }
}
.wrapper {
  background-color: rgba(var(--v-theme-substrate), 0.65);
}

.icon {
  position: relative;
  animation: icon-scroll 1.3s ease infinite;
}

.btn {
  cursor: pointer;
  user-select: none;
}

.video {
  height: calc(100vh - 64px);
}
</style>
