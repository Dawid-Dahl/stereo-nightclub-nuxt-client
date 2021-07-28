<template>
  <div>
    <p>47 Chandos Place, London, WC2N 4HS</p>
    <p>47 Chandos Place, London, WC2N 4HS</p>
    <p>47 Chandos Place, London, WC2N 4HS</p>
    <p>47 Chandos Place, London, WC2N 4HS</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/mixins.scss';

div {
  @include flexCenter();
  background-color: var(--main-color);
}

p {
  margin: 2rem 0;
  padding: 0 1rem 0 1rem;
  color: white;
  font-size: var(--font-size-small);
  border-right: solid white 1px;
  text-align: center;
}

p:last-child {
  border-right: none;
}
</style>
