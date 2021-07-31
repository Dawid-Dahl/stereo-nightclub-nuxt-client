<template>
  <div :style="opacityStyle" class="wrapper">
    <h3>{{ `${price} $` }}</h3>
    <p>{{ stringifiedIngredients }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: {
      type: Array,
      required: true,
      validator: ingredients =>
        ingredients.every(ingredient => typeof ingredient === "string")
    }
  },
  computed: {
    stringifiedIngredients: function () {
      return this.ingredients.reduce(
        (acc, cur, i, arr) =>
          i !== arr.length - 1 ? acc + cur + ", " : acc + cur,
        ""
      )
    },
    opacityStyle: function () {
      return this.hover ? "opacity: 1" : "opacity: 0"
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  z-index: 1;
  padding: 1rem;
  opacity: 1;
  transition: opacity 0.2s;
}

h3,
p {
  color: white;
}

h3 {
  font-size: 0.9rem;
}

p {
  font-size: 0.7rem;
}
</style>
