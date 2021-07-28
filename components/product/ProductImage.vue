<template>
  <div class="wrapper">
    <img :src="src" alt="product image" />
  </div>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
