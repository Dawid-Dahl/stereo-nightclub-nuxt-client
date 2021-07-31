<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <h1>WELCOME TO STEREO CLUB</h1>
      <h6>
        <span>WE CREATE</span> dolor sit amet consectetur adipisicing elit.
        Aperiam, consequuntur corrupti deleniti laborum dolorem et similique
        veritatis est animi! Culpa in odio adipisci praesentium nulla neque
        distinctio laborum natus voluptas voluptatem ad voluptates facilis quae
        nobis ex minutiae.
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    presentation: String
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/_mixins.scss" as *;

.wrapper {
  @include flexCenter(column);
}

.inner-wrapper {
  max-width: 30rem;
}

span {
  font-weight: bold;
}

h1,
h6 {
  color: white;
  text-align: center;
  font-size: 1rem;
}

h1 {
  font-size: 1rem;
  margin: 2rem 0 1rem 0;
}

h6 {
  font-size: var(--font-size-small);
  margin: 0 0 1rem 0;
  padding: 0 5rem;
  font-weight: 300;
}
</style>
