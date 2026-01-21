<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const jobs = [
  {
    company: 'GFT',
    job_title: 'Front-End Engineer',
    period: '2023 - Today',
    description:
      'Led BBVA frontend initiatives across web and hybrid mobile platforms for five countries, working closely with architecture teams to improve public cloud governance, scalability, performance, and cost optimization. Delivered high-quality, maintainable solutions aligned with enterprise standards and agile practices.',
  },
  {
    company: 'Modyo',
    job_title: 'Front-End Engineer',
    period: '2016 - 2023',
    description:
      'Led frontend architecture and development at Modyo, delivering web and mobile solutions for major financial clients such as Santander, BCI Miami, PC Factory, and Cinemark across Latin America. Defined standards, unified architectures, mentored teams, and coordinated technology decisions to ensure scalable, maintainable platforms.',
  },
  {
    company: 'Techmobile (Suika)',
    job_title: 'Android & Front-End Developer',
    period: '2014 - 2016',
    description:
      'Developed native Android and web applications as part of a small, versatile team, delivering scalable cross-platform solutions for clients such as Copec. Contributed to multiple projects using modern frontend frameworks, with a strong focus on performance, clean architecture, and maintainable codebases.',
  },
  {
    company: 'DevLab',
    job_title: 'API & Front-End Developer',
    period: '2013 - 2014',
    description:
      'Developed hybrid web applications for Android and iOS, built APIs for web and mobile platforms, and delivered partner websites. Contributed to mining industry projects integrating hardware and sensor data via APIs to automate environmental monitoring and control systems.',
  },
];
</script>

<template>
  <v-row class="mb-16">
    <v-col cols="12">
      <v-card elevation="1" class="px-2 py-3">
        <v-card-title>
          {{ t('experience.title') }}
        </v-card-title>

        <v-card-text>
          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="job in jobs"
              :key="job.company + job.period"
              dot-color="primary"
              size="small"
            >
              <div class="mb-1">
                <div class="font-weight-bold">{{ job.company }} — {{ job.job_title }}</div>

                <div class="text-caption text-medium-emphasis">
                  {{ job.period }}
                </div>
              </div>

              <div class="text-body-2 text-medium-emphasis">
                {{ job.description }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
