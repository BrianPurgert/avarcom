<template>
  <VParallax
    src="https://images.unsplash.com/photo-1563641749712-028dfeab14b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">GS Delta Website</h1>

      <br />

      <h4 class="subheading">under construction</h4>

      <h5>
        Redirect to
        <a href="http://avarcom.ru/" style="color: red">http://avarcom.ru/</a>
        after {{ second }}
      </h5>

      <br />

      <div style="width: 35vw">
        <VProgressLinear height="2" :model-value="progress" reverse />
      </div>
    </div>
  </VParallax>
</template>

<script setup lang="ts">
const second: Ref<number> = ref(15);
const progress: Ref<number> = ref(0);

const timer = setInterval(() => {
  second.value--;
  progress.value = (100 * second.value) / 15;
  if (second.value <= 0) {
    clearInterval(timer);
    return (window.location.href = "http://avarcom.ru/");
  }
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});

definePageMeta({
  layout: false,
});
</script>
