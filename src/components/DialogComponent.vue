<script setup>
import ProjectsComponent from '@/components/ProjectsComponent.vue';

const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};
</script>

<template>
  <v-dialog v-bind="$attrs" max-width="500">
    <v-card>
      <v-card-title>More information</v-card-title>
      <v-card-text>
        <ProjectsComponent />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text="Close" @click="closeModal" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
