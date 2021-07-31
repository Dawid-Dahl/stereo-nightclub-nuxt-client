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
@use "@/assets/scss/abstracts/_mixins.scss" as *;

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

@media only screen and (max-width: 480px) {
  div {
    display: block;
  }

  p {
    border: none;
    margin: 1rem 0;
  }
}
</style>
