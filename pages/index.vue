<template>
  <div>
    <h1>Hello world!</h1>
    <h2>COUNTER: {{ this.$store.counter }}</h2>
    <button @click="myfn">My Button</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    myfn: opoop => console.log('Clicked!')
  }
}
</script>
