<template>
  <div>
    <footer>
      <h1>GET IN TOUCH</h1>
      <p>47 Chandos Place, London, WC2N 4HS</p>
      <MapLocator />
    </footer>
    <SubFooter />
  </div>
</template>

<script>
export default {}
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
