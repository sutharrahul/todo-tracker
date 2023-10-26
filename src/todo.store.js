import { create } from "zustand";

const todoStore = create((set) => ({
  todolist: [],
  addTodo: (newtodo) =>
    set((state) => ({ todolist: [...state.todolist, newtodo] })),
  deleteTodo: (id) =>
    set((state) => ({
      todolist: state.todolist.filter((todo) => todo.id != id),
    })),
}));

export { todoStore };
