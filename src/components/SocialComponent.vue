<template>
  <a class="social position-fixed"
     href="https://www.linkedin.com/in/hassen-nachar-5667154a"
     target="_blank"
     rel="noopener noreferrer">
    <img class="social__img" src="../assets/social/linkedin.png" alt="Image linkedin">
  </a>
</template>

<script>
export default {
  name: 'SocialComponent',
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.social {
  top: 4px;
  left: 4px;

  &__img {
    width: 40px;
    filter: grayscale(100%);
    transition: width 200ms ease-out;

    &:hover {
      width: 60px;
    }
  }
}
</style>
