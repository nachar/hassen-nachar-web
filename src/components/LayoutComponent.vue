<template>
  <section class="layout app-hr min-vh-100 d-flex align-items-center py-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 d-lg-flex align-items-lg-center">
          <div>
            <h3>{{ title }}</h3>
            <h4 class="mb-4 mb-lg-0 font-weight-normal">{{ description }}</h4>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <slot/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LayoutComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 1.2rem;
  }
}
</style>
