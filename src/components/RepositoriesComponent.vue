<template>
  <LayoutComponent :title="$t('repositories_title')" :description="$t('repositories_description')">
    <ul class="list-unstyled">
      <li v-for="repository in repositories"
          :key="repository.key"
          class="repository float-left p-1">
        <a :href="repository.url"
           target="_blank"
           rel="noopener noreferrer"
           class="app-box-border repository__item d-flex align-items-center justify-content-center
           text-decoration-none">
          <img :src="getImg(repository)"
               :alt="'Repository: ' + repository.name"
               class="repository__item__img mr-2">
          <span>{{ repository.name }}</span>
        </a>
      </li>
    </ul>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue';

export default {
  name: 'RepositoriesComponent',
  components: {
    LayoutComponent,
  },
  data() {
    return {
      repositories: [
        {
          name: 'Current repository!',
          key: 'current-repository',
          url: 'https://github.com/nachar/hassen-nachar-web',
          img: 'magnifying-glass.png',
        },
        {
          name: 'Bitbucket',
          key: 'bitbucket',
          url: 'https://bitbucket.org/nachar/',
          img: 'bitbucket.png',
        },
        {
          name: 'GitHub',
          key: 'github',
          url: 'https://github.com/nachar?tab=repositories',
          img: 'github.png',
        },
      ],
    };
  },
  methods: {
    getImg(repository) {
      // eslint-disable-next-line import/no-dynamic-require,global-require
      return require(`../assets/repositories/${repository.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.repository {
  width: 50%;

  &:first-child {
    width: 100%;
  }

  &__item {
    height: 80px;
    color: $color-black;

    &:hover,
    &:active,
    &:focus,
    &:visited {
      color: $color-black;
    }

    &__img {
      max-width: 26px;
    }
  }
}
</style>
