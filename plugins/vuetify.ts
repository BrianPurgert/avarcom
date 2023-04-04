import { createVuetify, ThemeDefinition } from "vuetify";
import {
  VApp,
  VParallax,
  VProgressLinear,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemAction,
  VListItemTitle,
  VSwitch,
  VAppBar,
  VSpacer,
  VIcon,
  VImg,
  VMain,
  VFooter,
  VContainer,
  VAppBarNavIcon,
  VBtn,
  VRow,
  VCol,
  VHover,
  VSheet,
  VCard,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelTitle,
  VExpansionPanelText,
  VCarousel,
  VCarouselItem,
  VLazy,
  VSnackbar,
} from "vuetify/components";

const myDark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#FFF",
    secondary: "#424242",
    accent: "#121212",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    substrate: "#000",
  },
};

const myLight: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#000",
    secondary: "#FFFAFA",
    accent: "#EAF0EE",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    substrate: "#FFF",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    locale: {
      fallback: "ru",
    },
    theme: {
      defaultTheme: "myDark",
      themes: {
        myDark,
        myLight,
      },
    },
    components: {
      VApp,
      VParallax,
      VProgressLinear,
      VNavigationDrawer,
      VList,
      VListItem,
      VListItemAction,
      VListItemTitle,
      VSwitch,
      VAppBar,
      VSpacer,
      VImg,
      VIcon,
      VMain,
      VFooter,
      VContainer,
      VAppBarNavIcon,
      VBtn,
      VRow,
      VCol,
      VHover,
      VSheet,
      VCard,
      VExpansionPanels,
      VExpansionPanel,
      VExpansionPanelTitle,
      VExpansionPanelText,
      VCarousel,
      VCarouselItem,
      VLazy,
      VSnackbar,
    },
    ssr: true,
  });

  nuxtApp.vueApp.use(vuetify);
});
