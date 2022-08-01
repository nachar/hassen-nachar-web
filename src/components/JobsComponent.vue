<template>
  <LayoutComponent :title="$t('jobs_title')" :description="$t('jobs_description')">
    <ul class="list-unstyled">
      <li v-for="job in jobs" :key="job.key" class="job p-1 float-left">
        <a :href="job.url"
           class="job__item app-box-border d-flex align-items-center justify-content-center"
           target="_blank"
           rel="noopener noreferrer">
          <img :src="getImg(job)" :alt="'Job: ' + job.name" class="job__item__img">
        </a>
      </li>
    </ul>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue';

export default {
  name: 'JobsComponent',
  components: {
    LayoutComponent,
  },
  data() {
    return {
      jobs: [
        {
          name: 'Modyo',
          img: 'modyo.png',
          key: 'modyo',
          url: 'https://www.modyo.com/',
        },
        {
          name: 'DevLab',
          img: 'devlab.png',
          key: 'devlab',
          url: 'http://devlab.cl/',
        },
        {
          name: 'Techmobile',
          img: 'techmobile.png',
          key: 'techmobile',
          url: null,
        },
      ],
    };
  },
  methods: {
    getImg(job) {
      // eslint-disable-next-line import/no-dynamic-require,global-require
      return require(`../assets/jobs/${job.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.job {
  width: 50%;

  &:first-child {
    width: 100%;
  }

  &__item {
    height: 120px;
    &__img {
      max-width: 140px;
      filter: grayscale(100%);
    }
  }
}
</style>
