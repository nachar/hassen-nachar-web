<script setup>
import { computed } from 'vue';

import JobsComponent from '@/components/JobsComponent.vue';
import LinksComponents from '@/components/LinksComponents.vue';
import PersonalInformation from '@/components/PersonalInformation.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import { useCustomKeys } from '@/composables/useCustomKeys.js';

const { selectedKey } = useCustomKeys();

const emit = defineEmits(['closeModal']);

const customKeysMap = {
  '***projects***': ProjectsComponent,
  '***jobs***': JobsComponent,
  '***personal_information***': PersonalInformation,
  '***links***': LinksComponents,
};

const closeModal = () => {
  emit('closeModal');
};

const selectedComponent = computed(() => customKeysMap[selectedKey.value] || LinksComponents);
</script>

<template>
  <v-dialog v-bind="$attrs" max-width="500">
    <v-card>
      <v-card-title>More information</v-card-title>
      <v-card-text>
        <component :is="selectedComponent" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text="Close" @click="closeModal" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
