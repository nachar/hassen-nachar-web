<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <v-card class="mb-8" elevation="2">
    <v-card-text>
      <v-row align="center">
        <v-col cols="12" md="2" class="text-center">
          <v-icon size="64" color="primary">mdi-robot</v-icon>
        </v-col>

        <v-col cols="12" md="7">
          <h3 class="text-h6 font-weight-bold mb-2">
            {{ t('chatbot.title') }}
          </h3>
          <p class="text-body-2">
            {{ t('chatbot.description') }}
          </p>
        </v-col>

        <v-col cols="12" md="3" class="text-center">
          <v-btn color="primary" size="large">
            {{ t('chatbot.cta') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>
