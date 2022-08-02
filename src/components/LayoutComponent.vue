<template>
  <section class="layout app-hr min-vh-100 d-flex align-items-center py-4 position-relative">
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
    <ShowCodeComponent :id-element="idElement"/>
  </section>
</template>

<script>
import ShowCodeComponent from '@/components/ShowCodeComponent.vue';

export default {
  name: 'LayoutComponent',
  components: {
    ShowCodeComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    idElement: {
      type: String,
      require: true,
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
