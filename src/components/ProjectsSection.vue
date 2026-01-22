<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const projects = [
  { title: 'bbva', company: 'gft', type: ['web', 'mobile'], sector: 'financial' },
  { title: 'finops_champions', company: 'gft', type: ['web'], sector: 'financial' },

  { title: 'santander', company: 'modyo', type: ['web'], sector: 'financial' },
  { title: 'bci_miami_chile', company: 'modyo', type: ['web'], sector: 'financial' },
  { title: 'copec', company: 'modyo', type: ['web'], sector: 'energy' },
  { title: 'pagoclick', company: 'modyo', type: ['mobile'], sector: 'energy' },
  { title: 'consorcio', company: 'modyo', type: ['web'], sector: 'financial' },
  { title: 'cinemark', company: 'modyo', type: ['web', 'mobile'], sector: 'entertainment' },

  { title: 'bioscell', company: 'techmobile', type: ['web'], sector: 'biotechnology' },
  { title: 'marina_golf_rapel', company: 'techmobile', type: ['web'], sector: 'tourism' },
  { title: 'mundo_copec', company: 'techmobile', type: ['mobile'], sector: 'energy' },
  { title: 'tribuna_centenario', company: 'techmobile', type: ['mobile'], sector: 'sports' },

  { title: 'ims', company: 'devlab', type: ['web', 'mobile'], sector: 'mining' },
  { title: 'vias_chile', company: 'devlab', type: ['web'], sector: 'infrastructure' },
];
</script>

<template>
  <h2 class="text-h5 font-weight-bold mb-6">{{ t('projects.title') }}</h2>
  <v-row class="mb-16" dense>
    <v-col
      v-for="project in projects"
      :key="project.company + project.title"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card elevation="1" class="pa-4">
        <v-card-title class="font-weight-bold">
          {{ t(`projects.items.${project.title}`) }}
        </v-card-title>
        <v-card-subtitle class="mb-2">
          <div>
            {{ t('projects.company') }}:
            {{ t(`projects.companies.${project.company}`) }}
          </div>
          <div class="text-caption text-medium-emphasis">
            {{ t('projects.sector') }}:
            {{ t(`projects.sectors.${project.sector}`) }}
          </div>
        </v-card-subtitle>
        <v-card-text class="d-flex flex-wrap gap-2">
          <v-chip
            v-for="t in project.type"
            :key="t"
            small
            :color="t === 'web' ? 'primary' : t === 'mobile' ? 'success' : 'primary'"
            text-color="white"
          >
            {{ t }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
