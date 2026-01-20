<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <v-row align="center" class="mb-16">
    <v-col cols="12" md="4" class="text-center">
      <v-avatar size="180">
        <v-img src="/hassen.jpeg" />
      </v-avatar>
    </v-col>

    <v-col cols="12" md="8">
      <h1 class="text-h4 font-weight-bold mb-4">
        {{ t('hero.title') }}
      </h1>

      <p class="text-body-1 mb-6">
        {{ t('hero.subtitle') }}
      </p>

      <v-btn
        color="primary"
        class="mr-4"
        href="https://www.linkedin.com/in/hassen-nachar-5667154a/"
        target="_blank"
        rel="noopener"
      >
        {{ t('hero.contact') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
