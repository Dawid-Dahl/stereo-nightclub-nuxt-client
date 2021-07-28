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
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--box-shadow-light);
  cursor: pointer;
  transition: transform 0.2s;
}
img:hover {
  transform: scale(1.02);
}
</style>
