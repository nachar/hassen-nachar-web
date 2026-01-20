<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <h2 class="text-h5 font-weight-bold mb-6">Projects</h2>
  <v-row class="mb-16">
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title>Banking Platform</v-card-title>
        <v-card-text> Large-scale banking frontend with cloud optimization. </v-card-text>
        <v-card-actions> <v-btn variant="text">View</v-btn> </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title>Hybrid Mobile App</v-card-title>
        <v-card-text> Cross-country mobile app using web + native integrations. </v-card-text>
        <v-card-actions> <v-btn variant="text">View</v-btn> </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title>Enterprise Web App</v-card-title>
        <v-card-text> Scalable frontend architecture with design systems. </v-card-text>
        <v-card-actions> <v-btn variant="text">View</v-btn> </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
