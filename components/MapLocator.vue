<template>
  <a :href="location" target="_blank">Locate us on map</a>
</template>

<script>
export default {
  props: {
    location: String
  }
}
</script>

<style lang="scss" scoped>
a {
  background-color: var(--main-color);
  color: white;
  text-align: center;
  font-size: var(--font-size-small);
  padding: 0.15rem 0.4rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  text-decoration: none;
}
</style>
