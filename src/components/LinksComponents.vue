<script setup>
const links = {
  linkedIn: 'https://www.linkedin.com/in/hassen-nachar-5667154a/',
  github: 'https://github.com/nachar',
  bitbucket: 'https://bitbucket.org/nachar',
};
</script>

<template>
  <v-card class="mx-auto text-center" max-width="400" elevation="2" rounded="lg">
    <v-card-title class="text-h6">Find Me Online</v-card-title>
    <v-divider />
    <v-card-text>
      <v-btn
        class="ma-2"
        icon="mdi-linkedin"
        size="large"
        :href="links.linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      />
      <v-btn
        class="ma-2"
        icon="mdi-github"
        size="large"
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      />
      <v-btn
        class="ma-2"
        icon="mdi-bitbucket"
        size="large"
        :href="links.bitbucket"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      />
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>
