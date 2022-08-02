<template>
  <button @click="showCode()"
          class="component-code position-absolute d-flex align-items-center border-0 p-2">
    <span class="material-symbols-outlined mr-2">arrow_back</span>
    {{ $t('component_code') }}
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ShowCodeComponent',
  props: {
    idElement: {
      type: String,
      require: true,
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_CODE', 'SELECT_CODE_ITEM']),
    showCode() {
      this.SELECT_CODE_ITEM(this.idElement);
      this.TOGGLE_CODE();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.component-code {
  bottom: 0;
  right: 0;
  background-color: $color-black;
  color: $color-white;

  @media (min-width: 992px){
    bottom: inherit;
  }
}
</style>
