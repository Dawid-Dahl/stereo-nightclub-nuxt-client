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
@import "../assets/scss/mixins/mixins.scss";

header {
  @include flexCenter(row, center, flex-start);

  background-color: var(--main-color-light);
  height: 57px;
  border-bottom: var(--main-color-border) solid 1px;
}

img {
  position: absolute;
  top: 3px;
  height: 75px;
  margin: 0 auto;
}
</style>
