<template>
  <v-app dark>
    <section class="not-exist">
      <h5 class="not-exist__title">{{ title }}</h5>
      <h6 class="not-exist__text">
        Можете связаться с нами или вернуться на главную
      </h6>
      <NuxtLink to="/">
        <div class="not-exist__button">На главную</div>
      </NuxtLink>
    </section>
  </v-app>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const title =
  props.error?.statusCode === 404
    ? "404 Страница не найдена"
    : `${props.error?.statusCode || "Ошибка"} что-то пошло не так`;
</script>

<style scoped>
.not-exist {
  max-width: 100vw;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
}
.not-exist__title {
  color: #fff;
  font-weight: bold;
  font-size: 5rem;
}
.not-exist__text {
  color: #fff;
  font-size: 2rem;
}
.not-exist__button {
  background-color: #fff;
  color: red;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1em 4em;
  font-size: 1.2rem;
}
</style>
