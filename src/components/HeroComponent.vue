<template>
  <section class="hero app-hr min-vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="font-weight-bold">{{ $t('title') }}</h1>
          <h2 class="mb-4 mb-lg-0 font-weight-normal">{{ $t('job') }}</h2>
        </div>
        <div class="col-12 col-lg-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nemo.</p>
          <p>Lorem ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nemo.</p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
};
</script>

<style lang="scss" scoped>
.hero {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
}

</style>
