class Todo {
  constructor(content = '', done = false) {
    this.id = Math.floor(Math.random() * 100000)
    this.content = content
    this.done = done
  }
}

export const state = () => ({
  todos: []
})

export const mutations = {
  ADD_TODO(state, text) {
    state.todos.push(new Todo(text))
  },
  REMOVE_TODO(state, { todo }) {
    state.todos = state.todos.filter(cur => cur !== todo)
  },
  TOGGLE_TODO(state, { todo }) {
    todo.done = !todo.done
  }
}
