<script setup>
const personalInformation = {
  name: 'Hassen Nachar',
  degree: 'Computer Engineer',
  'current job': 'Front-End Engineer at GFT',
  'current city': 'Barcelona, Spain',
};
</script>

<template>
  <v-card class="mx-auto" max-width="400" elevation="2" rounded="lg">
    <v-list density="compact" class="bg-transparent">
      <v-list-item class="pb-2">
        <v-list-item-title class="text-h6">{{ personalInformation.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ personalInformation['current job'] }}</v-list-item-subtitle>
      </v-list-item>

      <v-divider class="mt-2 mb-3" />

      <v-list-item class="py-2" prepend-icon="mdi-school">
        <v-list-item-title>{{ personalInformation.degree }}</v-list-item-title>
      </v-list-item>

      <v-list-item class="py-2" prepend-icon="mdi-map-marker">
        <v-list-item-title>{{ personalInformation['current city'] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped lang="scss"></style>
