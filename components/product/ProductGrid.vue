<template>
  <div class="wrapper">
    <div class="grid">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
import { createDrinks } from "../../content/dummyData"

export default {
  computed: {
    ...mapState("products", ["products"])
  },
  methods: {
    ...mapMutations({
      addProducts: "products/ADD_PRODUCTS"
    })
  },
  created: function () {
    this.addProducts(createDrinks(9))
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
}
</style>
