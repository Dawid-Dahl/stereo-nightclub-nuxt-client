<template>
  <header>
    <img
      src="https://storage.googleapis.com/stereo-nightclub-bucket/resurser/logo-club.png"
      alt="logo"
    />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/mixins.scss';

header {
  @include flexCenter(row, center, flex-start);

  background-color: var(--main-color-light);
  height: 55px;
  border-bottom: var(--main-color-border) solid 1px;
}

img {
  height: 75px;
  margin: 0 auto;
}
</style>
