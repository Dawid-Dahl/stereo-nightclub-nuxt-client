<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="wrapper">
    <h3 v-if="hover">{{ ingredients }}</h3>
    <img :src="src" alt="product image" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
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
  data() {
    return {
      hover: false
    }
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
  transform: scale(1.01);
}
</style>
