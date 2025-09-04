<script setup>
import { ref } from 'vue';

import ChatComponent from '@/components/ChatComponent.vue';
import DialogComponent from '@/components/DialogComponent.vue';
import PresentationComponent from '@/components/PresentationComponent.vue';

const dialog = ref(true);
</script>

<template>
  <v-app>
    <div class="layout d-flex flex-column flex-md-row">
      <div class="layout__presentation">
        <PresentationComponent />
      </div>
      <div class="layout__chat">
        <ChatComponent @open-modal="() => (dialog = true)" />
      </div>
    </div>
    <DialogComponent v-model="dialog" @close-modal="() => (dialog = false)" />
  </v-app>
</template>

<style scoped lang="scss">
@use '@/styles/colors' as colors;

$presentation-height: 85px;
$left-element-width: 35%;

.layout {
  &__presentation {
    height: $presentation-height;
    width: 100%;
    background-color: colors.$primary;
    color: colors.$surface;

    @media (min-width: 960px) {
      width: $left-element-width;
      height: 100vh;
    }
  }

  &__chat {
    height: calc(100vh - $presentation-height);
    width: 100%;

    @media (min-width: 960px) {
      width: calc(100% - $left-element-width);
      height: 100vh;
    }
  }
}
</style>
