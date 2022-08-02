<template>
  <section class="hero app-hr py-4 min-vh-100 d-flex align-items-center position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <div>
            <h1 class="hero__title font-weight-bold">{{ $t('title') }}</h1>
            <h2 class="hero__description mb-4 mb-lg-0 font-weight-normal">{{ $t('job') }}</h2>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <p class="m-0">{{ $t('user_description') }}</p>
        </div>
      </div>
    </div>
    <ShowCodeComponent :id-element="'code-hero-component'"/>
  </section>
</template>

<script>
import ShowCodeComponent from '@/components/ShowCodeComponent.vue';

export default {
  name: 'HeroComponent',
  components: {
    ShowCodeComponent,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &__title {
    font-size: 4rem;
  }

  &__description {
    font-size: 2.5rem;
  }
}
</style>
