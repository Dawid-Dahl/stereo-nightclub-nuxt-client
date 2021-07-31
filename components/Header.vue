<template>
  <header>
    <NuxtLink to="/">
      <img
        src="https://storage.googleapis.com/stereo-nightclub-bucket/resurser/logo-club.png"
        alt="logo"
      />
    </NuxtLink>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;

header {
  @include flexCenter(row, center, flex-start);

  background-color: var(--main-color-light);
  height: 57px;
  border-bottom: var(--main-color-border) solid 1px;
}

a {
  position: absolute;
  margin: 0 auto;
}

img {
  top: 3px;
  height: 75px;
}
</style>
