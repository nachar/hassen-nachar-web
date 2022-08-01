<template>
  <LayoutComponent :title="$t('projects_title')" :description="$t('projects_description')">
    <ul class="projects list-unstyled text-center">
      <li v-for="project in projects"
          :key="project.key"
          class="projects__item d-inline-block p-1">
        <a :href="project.url"
           target="_blank"
           rel="noopener noreferrer"
           class="project app-box-border text-decoration-none d-block">
          <span class="project__name d-block">{{ project.name }}</span>
          <span class="project__type d-block">{{ project.type }} -
            <span class="project__type__company">{{ project.company }}</span>
          </span>
        </a>
      </li>
    </ul>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue';
import MixinProjects from '@/mixins/MixinProjects';

export default {
  name: 'ProjectComponent',
  mixins: [MixinProjects],
  components: {
    LayoutComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.projects {
  &__item {
    width: 50%;

    @media (min-width: 992px){
      width: 33.3333333%;
    }
  }
}

.project {
  color: $color-black;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: $color-black;
  }

  &__type {
    color: $color-gray;
    font-size: .7rem;

    &__company {
      color: $color-black;
    }
  }
}
</style>
