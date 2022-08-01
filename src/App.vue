<template>
  <div id="app" class="app">
    <HeroComponent/>
    <ProjectsComponent/>
    <JobsComponent/>
    <RepositoriesComponent/>
    <SocialComponent/>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import JobsComponent from '@/components/JobsComponent.vue';
import RepositoriesComponent from '@/components/RepositoriesComponent.vue';
import SocialComponent from '@/components/SocialComponent.vue';

export default {
  name: 'App',
  components: {
    HeroComponent,
    ProjectsComponent,
    JobsComponent,
    RepositoriesComponent,
    SocialComponent,
  },
};
</script>

<style lang="scss">
@import "src/scss/theme";
</style>
