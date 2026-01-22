<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <h2 class="text-h5 font-weight-bold mb-6">
    {{ t('links.title') }}
  </h2>

  <v-row class="d-flex justify-center">
    <v-col cols="12" md="3">
      <v-btn block prepend-icon="mdi-github">
        {{ t('links.github') }}
      </v-btn>
    </v-col>
    <v-col cols="12" md="3">
      <v-btn block prepend-icon="mdi-linkedin">
        {{ t('links.linkedin') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
