<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';
import { useGoTo } from 'vuetify';

const drawer = ref(false);
const { mdAndUp } = useDisplay();
const goTo = useGoTo();

const { t } = useI18n();
</script>

<template>
  <v-app-bar flat>
    <v-container class="d-flex align-center justify-space-between">
      <div>
        <div class="text-h6 font-weight-bold">
          {{ t('header.name') }}
        </div>
      </div>

      <!-- Desktop navigation -->
      <v-tabs v-if="mdAndUp" align-tabs="end">
        <v-tab @click="goTo('#about')">{{ t('nav.about') }}</v-tab>
        <v-tab @click="goTo('#jobs')">{{ t('nav.experience') }}</v-tab>
        <v-tab @click="goTo('#projects')">{{ t('nav.projects') }}</v-tab>
        <v-tab @click="goTo('#apps')">{{ t('nav.apps') }}</v-tab>
        <v-tab @click="goTo('#links')">{{ t('nav.links') }}</v-tab>
      </v-tabs>

      <!-- Mobile hamburger -->
      <v-app-bar-nav-icon v-else @click="drawer = true" />
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-list-item
        :title="t('nav.about')"
        @click="
          goTo('#about');
          drawer = false;
        "
      />
      <v-list-item
        :title="t('nav.experience')"
        @click="
          goTo('#jobs');
          drawer = false;
        "
      />
      <v-list-item
        :title="t('nav.projects')"
        @click="
          goTo('#projects');
          drawer = false;
        "
      />
      <v-list-item
        :title="t('nav.apps')"
        @click="
          goTo('#apps');
          drawer = false;
        "
      />
      <v-list-item
        :title="t('nav.links')"
        @click="
          goTo('#links');
          drawer = false;
        "
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
