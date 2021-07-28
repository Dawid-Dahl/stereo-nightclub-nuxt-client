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

<style lang="scss" scoped></style>
