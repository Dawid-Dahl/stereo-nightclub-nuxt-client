<template>
  <div>
    <h1>Hello world!</h1>
    <h2>TODOS:</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
    </ul>
    <p>{{ inputText }}</p>
    <input v-model="inputText" type="text" :placeholder="inputText" />
    <button @click="add(inputText)">My Button</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => {
    return {
      inputText: ''
    }
  },
  computed: {
    ...mapState('todos', ['todos'])
  },
  methods: {
    ...mapMutations({
      add: 'todos/ADD_TODO',
      remove: 'todos/REMOVE_TODO',
      toggle: 'todos/TOGGLE_TODO'
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  text-decoration: none;
}
</style>
