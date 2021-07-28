<template>
  <div class="wrapper">
    <footer>
      <h1>GET IN TOUCH</h1>
      <p>{{ address }}</p>
      <MapLocator location="https://goo.gl/maps/jW6Jz3epDNE3xqkL8" />
    </footer>
    <SubFooter
      copyright="Copyright © 2022"
      :address="address"
      phoneNum="020
    7342 9283"
      email="info@stereoclub.com"
    />
  </div>
</template>

<script>
export default {
  props: {
    address: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/mixins.scss';

footer {
  @include flexCenter(column);
  background-image: url('https://storage.googleapis.com/stereo-nightclub-bucket/resurser/footer-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
}

h1,
p {
  color: white;
  text-align: center;
}

h1 {
  font-size: 1.2rem;
  margin: 0.1rem;
}

p {
  font-size: var(--font-size-small);
}
</style>
