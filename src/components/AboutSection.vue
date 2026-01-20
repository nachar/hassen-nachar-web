<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <v-row class="mb-16">
    <v-col cols="12" md="6">
      <v-card elevation="1">
        <v-card-title>
          {{ t('about.title') }}
        </v-card-title>
        <v-card-text>
          {{ t('about.description') }}
        </v-card-text>

        <v-card-actions>
          <v-chip class="ma-1">JavaScript</v-chip> <v-chip class="ma-1">TypeScript</v-chip>
          <v-chip class="ma-1">React</v-chip> <v-chip class="ma-1">Vue</v-chip>
          <v-chip class="ma-1">Cloud</v-chip>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card elevation="1">
        <v-card-title>
          {{ t('experience.title') }}
        </v-card-title>
        <v-card-text>
          <div class="mb-4">
            <strong>{{ t('experience.gft.title') }}</strong
            ><br />
            {{ t('experience.gft.description') }}
          </div>

          <div class="mb-4">
            <strong>{{ t('experience.modyo.title') }}</strong
            ><br />
            {{ t('experience.modyo.description') }}
          </div>

          <div>
            <strong>{{ t('experience.earlier.title') }}</strong
            ><br />
            {{ t('experience.earlier.description') }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
