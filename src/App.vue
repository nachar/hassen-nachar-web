<template>
  <div id="app">
    <HeroComponent/>
    <ProjectsComponent/>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';

export default {
  name: 'App',
  components: {
    HeroComponent,
    ProjectsComponent,
  },
};
</script>

<style lang="scss">
@import "src/scss/theme";
</style>
