<template>
  <LayoutComponent :title="$t('projects_title')" :description="$t('projects_description')">
    <ul class="projects list-unstyled">
      <li v-for="project in projects" :key="project.key"
          class="projects__item d-inline-block list-unstyled p-1">
        <a :href="project.url" target="_blank"
           rel="noopener noreferrer" class="project text-decoration-none d-block text-center">
          <p class="project__name m-0">{{ project.name }}</p>
          <p class="project__type m-0">{{ project.type }} -
            <span class="project__type__company">{{ project.company }}</span>
          </p>
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
  methods: {
    getLogo(project) {
      // eslint-disable-next-line import/no-dynamic-require,global-require
      return require(`../assets/logos/${project.img}`);
    },
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
  border: 1px solid $color-gray;
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

  &__img {
    height: 14px;
  }
}
</style>
