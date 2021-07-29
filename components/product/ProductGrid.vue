<template>
  <div class="wrapper">
    <div class="grid">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <Pagination :records="1000" />
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
  max-width: 730px;
  margin: 0 auto 3rem auto;

  @media only screen and (max-width: 768px) {
    margin: 0 1rem 3rem 1rem;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 480px) {
    display: block;
  }
}
</style>
