<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const jobsKeys = ['gft', 'modyo', 'techmobile', 'devlab'];
</script>

<template>
  <h2 id="jobs" class="text-h5 font-weight-bold py-6">
    {{ t('experience.title') }}
  </h2>
  <v-row class="mb-8">
    <v-col cols="12">
      <v-card elevation="1" class="px-2 py-3">
        <v-card-text>
          <v-timeline density="compact" align="start">
            <v-timeline-item v-for="key in jobsKeys" :key="key" dot-color="primary" size="small">
              <div class="mb-1">
                <div class="font-weight-bold">
                  {{ t(`experience.jobs.${key}.company`) }} —
                  {{ t(`experience.jobs.${key}.job_title`) }}
                </div>
                <div class="text-caption text-medium-emphasis">
                  {{ t(`experience.jobs.${key}.period`) }}
                </div>
              </div>

              <div class="text-body-2 text-medium-emphasis">
                {{ t(`experience.jobs.${key}.description`) }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
