<script setup>
import { useI18n } from 'vue-i18n';

defineProps({
  highlight: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n();
</script>

<template>
  <h2 id="about" class="text-h5 font-weight-bold py-6">
    {{ t('about.title') }}
  </h2>
  <v-row justify="center" class="mb-8">
    <v-col cols="12">
      <v-card :class="['pa-4', highlight && 'highlight']">
        <v-card-text>
          <p class="mb-4">{{ t('about.description_p1') }}</p>
          <p class="mb-4">{{ t('about.description_p2') }}</p>
          <p>{{ t('about.description_p3') }}</p>
        </v-card-text>

        <v-card-actions class="flex-wrap">
          <!-- Core -->
          <v-chip class="ma-1" color="primary">{{ t('about.chips.core_1') }}</v-chip>
          <v-chip class="ma-1" color="primary">{{ t('about.chips.core_2') }}</v-chip>

          <!-- Stack -->
          <v-chip class="ma-1" variant="outlined">{{ t('about.chips.stack_1') }}</v-chip>
          <v-chip class="ma-1" variant="outlined">{{ t('about.chips.stack_2') }}</v-chip>
          <v-chip class="ma-1" variant="outlined">{{ t('about.chips.stack_3') }}</v-chip>

          <!-- Scope -->
          <v-chip class="ma-1" variant="tonal">{{ t('about.chips.scope_1') }}</v-chip>
          <v-chip class="ma-1" variant="tonal">{{ t('about.chips.scope_2') }}</v-chip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
