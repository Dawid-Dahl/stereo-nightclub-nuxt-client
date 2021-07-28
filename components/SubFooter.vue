<template>
  <div>
    <p>{{ copyright }}</p>
    <p>{{ address }}</p>
    <p>{{ phoneNum }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    copyright: String,
    address: String,
    phoneNum: String,
    email: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/mixins.scss';

div {
  @include flexCenter();
  background-color: var(--main-color);
}

p {
  margin: 1.8rem 0;
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
