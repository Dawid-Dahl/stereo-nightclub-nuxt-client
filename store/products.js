import { createPagination } from "../utils/utils"

export const state = () => ({
  products: [],
  paginatedProducts: []
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
  },
  PAGINATE_PRODUCTS(state, { products, productsPerPage }) {
    state.paginatedProducts = createPagination(productsPerPage)(products)
  }
}
