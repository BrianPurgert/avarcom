<template>
  <VApp root class="layout">
    <VNavigationDrawer
      v-model="drawer"
      class="nav pt-4"
      temporary
      image="/images/backmain.png"
    >
      <VBtn
        icon="mdi-lightbulb-night-outline"
        inset
        label="Поменять тему"
        title="Поменять тему"
        persistent-hint
        position="relative"
        class="nav__theme-switch"
        @click="toggleTheme"
      />

      <VListItem
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
        :value="item"
        nuxt
        router
        exact
        no-prefetch
        :class="['mt-4', { disabled: item.disable }]"
      >
        <template #prepend>
          <VIcon :icon="item.icon"></VIcon>
        </template>

        <VListItemTitle v-text="item.title" />
      </VListItem>
    </VNavigationDrawer>

    <VAppBar fixed app class="d-inline-flex pe-8">
      <VAppBarNavIcon title="меню" @click.stop="drawer = !drawer" />

      <VSpacer />

      <div class="header__title">
        <NuxtLink to="/" class="header__href" no-prefetch>
          <VImg
            src="/images/logo.png"
            alt="Логотип Дельта"
            width="150"
            :contain="true"
            lazy-src="icon.png"
          />
        </NuxtLink>
      </div>

      <VSpacer />

      <div class="header__tel">
        <a :href="'tel:'">
          <VIcon>mdi-cellphone-wireless</VIcon>
        </a>
      </div>
    </VAppBar>

    <VMain>
      <slot />

      <VSnackbar
        :model-value="showCookieAlarm"
        :timeout="20000"
        color="primary"
        variant="tonal"
        @click.stop="showCookieAlarm = false"
      >
        {{ cookieText }}
      </VSnackbar>
    </VMain>

    <VFooter v-show="showFooter" app class="te" @click="footerClick">
      <span>
        &copy; {{ new Date().getFullYear() }} Группа содействия "Дельта".
      </span>
    </VFooter>
  </VApp>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import MenuItemModel from "~~/models/MenuItemModel";

// menu
const menu: Ref<Array<MenuItemModel>> = ref([
  {
    id: 1,
    icon: "mdi-home",
    title: "На главную",
    to: "/main",
  },
  {
    id: 2,
    icon: "mdi-clipboard-list",
    title: "Услуги / Цены",
    to: "/services",
  },
  {
    id: 3,
    icon: "mdi-book-open-page-variant",
    title: "О нас",
    to: "/about",
  },
  {
    id: 4,
    icon: "mdi-account-question",
    title: "Ответы на вопросы",
    to: "/questions",
  },
  {
    id: 5,
    icon: "mdi-file-document-edit",
    title: "Европротокол",
    to: "/evroprotocol",
  },
  {
    id: 6,
    icon: "mdi-contacts",
    title: "Контакты",
    to: "/contact",
  },
  // {
  //   icon: "mdi-car-cog",
  //   title: "Вызвать эксперта",
  //   to: "/expert",
  //   disable: true,
  // },
]);

const showCookieAlarm: Ref<boolean> = ref(true);

const cookieText: Ref<string> = ref(
  "Мы используем cookie чтобы сделать работу быстрее"
);

const drawer: Ref<boolean> = ref(false);

const showFooter: Ref<boolean> = ref(false);

// theme
const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "myLight"
    : "myDark");

// methods
const footerClick = () => {
  showFooter.value = false;
  setTimeout(() => {}, 300000);
};
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
}

.nav {
  &__theme-switch {
    top: -1%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.disabled {
  display: none;
}

.banner {
  top: 200%;
  left: 0;
}
</style>
