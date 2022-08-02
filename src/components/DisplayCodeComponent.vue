<template>
  <div class="display-code position-fixed w-100 h-100"
       :class="{ active: activeCode }"
       v-on:click.self="toggleModal()"
       @keyPress="toggleModalDefault()">
    <div class="display-code__box w-100 h-100 position-absolute">
      <div class="display-code__box__head text-right">
        <button @click="toggleModal()" class="close-btn border-0 bg-transparent">
          <span class="close-btn__icon material-symbols-outlined">close</span>
        </button>
      </div>
      <div id="currentHtml" class="display-code__box__html"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'DisplayCodeComponent',
  data() {
    return {
      currentHtml: undefined,
    };
  },
  computed: {
    ...mapState(['activeCode', 'selectedCodeItem']),
  },
  watch: {
    activeCode(val) {
      if (val) {
        this.currentHtml = document.getElementById(this.selectedCodeItem).cloneNode(true);
        const htmlContainer = document.getElementById('currentHtml');
        if (htmlContainer.children.length) {
          htmlContainer.removeChild(htmlContainer.children[0]);
        }
        htmlContainer.appendChild(this.currentHtml);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_CODE']),
    toggleModalDefault() { console.log('toggleModalDefault'); },
    toggleModal() {
      this.TOGGLE_CODE();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.display-code {
  top: 0;
  left: 0;
  background-color: rgba(42, 42, 42, .2);
  visibility: hidden;
  transition: all 200ms ease-in;

  &__box {
    background-color: $color-black;
    right: -700px;
    max-width: 700px;
    transition: all 200ms ease-in;
    overflow-y: scroll;

    &__head {
      border-bottom: 1px solid $color-white;
    }
  }

  &.active {
    visibility: visible;
    .display-code__box {
      right: 0;
    }
  }
}

.close-btn {
  &__icon {
    color: $color-white;
    font-size: 2rem;
  }
}
</style>
