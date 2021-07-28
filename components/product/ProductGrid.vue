<template>
  <div class="wrapper">
    <div class="grid">
      <Product v-for="product in products" :key="product.id" />
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
  background-color: red;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}

.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}
</style>
