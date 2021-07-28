export const state = () => ({
  products: []
})

export const mutations = {
  ADD_PRODUCT(state, product) {
    state.products.push(product)
  },
  ADD_PRODUCTS(state, products) {
    state.products = products
  },
  REMOVE_PRODUCT(state, { product }) {
    state.products = state.products.filter(cur => cur !== product)
  }
}
