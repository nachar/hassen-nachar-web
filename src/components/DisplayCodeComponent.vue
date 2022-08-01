<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="currentHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayCodeComponent',
  props: {
    idElement: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      currentHtml: undefined,
    };
  },
  mounted() {
    this.currentHtml = document.getElementById(this.idElement);
    document.getElementById('currentHtml').appendChild(this.currentHtml);
  },
};
</script>

<style lang="scss" scoped>
</style>
