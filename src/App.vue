<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">Todo App</span>
    </md-app-toolbar>
    <md-app-content>
      <md-list class="todos">
        <md-list-item>
          <md-field>
            <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
          </md-field>
        </md-list-item>
        <span v-for="todo in todos" :key="todo.id">
          <todoItem
            :todo="todo"
            @toggle-completed="toggleTodo(todo)"
            @remove="removeTodo(todo)"
            @toggle-editing="toggleEditing(todo)"
            @finish-editing="pushEditChanges"
          ></todoItem>
        </span>
      </md-list>
    </md-app-content>
  </md-app>
</template>

<script>
import todoItem from "./components/todo-item";
export default {
  name: "app",
  components: {
    todoItem
  },
  data() {
    return {
      todos: [],
      currentTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.currentTodo) {
        this.todos.push({
          id: this.todos.length,
          label: this.currentTodo,
          completed: false,
          isEditing: false
        });
        this.currentTodo = "";
      }
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    toggleEditing(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].isEditing = !this.todos[index].isEditing;
    },
    pushEditChanges(payload) {
      const [todo, newLabel] = payload;
      const index = this.todos.indexOf(todo);
      this.todos[index].label = newLabel;
      this.toggleEditing(todo);
    },
    toggleTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
};
</script>

<style>
.isComplete {
  text-decoration: line-through;
}
</style>