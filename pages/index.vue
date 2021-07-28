<template>
  <div class="wrapper">
    <WelcomeSubHeader />
    <ProductGrid />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  data: () => {
    return {
      inputText: ""
    }
  },
  computed: {
    ...mapState("products", ["products"])
  },
  methods: {
    ...mapMutations({
      add: "todos/ADD_TODO",
      remove: "todos/REMOVE_TODO",
      toggle: "todos/TOGGLE_TODO"
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  text-decoration: none;
}
</style>
