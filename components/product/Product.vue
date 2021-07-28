<template>
  <div class="wrapper">
    <ProductImage :src="product.image" />
    <h1>VEGETARIAN PASTA</h1>
    <h6>Tempor inceidentum sed</h6>
  </div>
</template>

<script>
import { Drink } from "../../utils/classes"

export default {
  props: {
    product: Drink
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/mixins.scss";

.wrapper {
  @include flexCenter(column);
  margin: 0;
}

h1,
h6 {
  color: white;
  margin: 0;
}

h1 {
  font-size: var(--font-size-main);
  margin: 0.4rem 0 0.1rem 0;
}

h6 {
  font-size: var(--font-size-small);
  font-weight: 300;
  margin: 0 0 1rem 0;
  color: var(--text-color-dark);
}
</style>
