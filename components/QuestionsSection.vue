<template>
  <details v-for="el in questions" :key="el.id" class="dtp">
    <summary id="evroRules" class="dtp__summary">
      <h4>{{ el.question }}</h4>
    </summary>
    <div class="dtp__culprit pa-8" v-html="el.answer"></div>
  </details>
</template>

<script setup lang="ts">
import QuestionModel from "~/models/QuestionModel";

const props = defineProps({
  questions: {
    type: Array<QuestionModel>,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.dtp__summary {
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  margin-top: 5%;
  padding: 1%;
  display: block;
}

.dtp__summary > h4 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  transition: 0.3s;
}

details[open] > summary > h4 {
  color: grey;
  font-weight: lighter;
}

.dtp__summary::-webkit-details-marker {
  display: none;
}

.dtp__summary:focus,
.dtp:active {
  border: none;
  outline: none;
}

.dtp__summary::before {
  content: "";
  padding-right: 0.5em;
}

.dtp[open] {
  border: none;
}
.dtp[open] > .dtp__summary::before {
  content: "";
}
.dtp__ul {
  display: flex;
  flex-direction: column;
}
.dtp__li {
  list-style-type: decimal;
  list-style-position: inside;
  padding-left: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.dtp__attention {
  padding-top: 3%;
  font-size: larger;
}
</style>
