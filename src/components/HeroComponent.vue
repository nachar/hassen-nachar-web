<template>
  <section class="app-hr py-4">
    <div class="hero min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h1 class="hero__title font-weight-bold">{{ $t('title') }}</h1>
            <h2 class="hero__description mb-4 mb-lg-0 font-weight-normal">{{ $t('job') }}</h2>
          </div>
          <div class="col-12 col-lg-6">
            <p>{{ $t('user_description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <DisplayCodeComponent :id-element="'code-hero-component'"/>
  </section>
</template>

<script>
import DisplayCodeComponent from '@/components/DisplayCodeComponent.vue';

export default {
  name: 'HeroComponent',
  components: {
    DisplayCodeComponent,
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
