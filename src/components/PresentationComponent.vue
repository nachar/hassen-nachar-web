<script setup></script>

<template>
  <div class="presentation pa-4 pa-md-16 d-flex d-md-block align-center h-100">
    <div>
      <h1 class="presentation__title">Hassen <br class="d-none d-md-block" />Nachar</h1>
      <h2 class="presentation__description">AI Agent</h2>
    </div>
    <a
      class="presentation__link ml-auto ml-md-0"
      href="https://www.linkedin.com/in/hassen-nachar-5667154a/"
      target="_blank"
      ><v-icon>mdi-linkedin</v-icon></a
    >
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors' as colors;

.presentation {
  &__title {
    font-size: 1.5rem;
    @media (min-width: 960px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 5.5rem;
    }
  }
  &__description {
    font-size: 1rem;
    font-weight: 300;
    @media (min-width: 960px) {
      font-size: 2.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }
  &__link {
    font-size: 1.5rem;
    color: colors.$surface;
    @media (min-width: 960px) {
      font-size: 2rem;
    }
  }
}
</style>
