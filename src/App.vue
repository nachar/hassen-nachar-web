<script setup>
import ChatComponent from '@/components/ChatComponent.vue';
import PresentationComponent from '@/components/PresentationComponent.vue';
</script>

<template>
  <v-app>
    <div class="layout d-flex flex-column flex-md-row">
      <div class="layout__presentation">
        <PresentationComponent />
      </div>
      <div class="layout__chat">
        <ChatComponent />
      </div>
    </div>
  </v-app>
</template>

<style scoped lang="scss">
$presentation-height: 200px;
$left-element-width: 30%;

.layout {
  &__presentation {
    height: $presentation-height;
    width: 100%;
    background-color: #556b63; // TODO Pasar a colors
    color: #fff; // TODO Pasar a colors

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
