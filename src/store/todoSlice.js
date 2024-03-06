import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  'name': 'todos',
  'initialState': {
    'list': [],
  },
  'reducers': {
    addTodo(state, action) {
      state.list.push({
        'id': new Date().toISOString(),
        'text': action.payload.text,
        'completed': false,
      })
    },
    toggleComplete(state, action) {
      const toggledTodo = state.list.find(
        (todo) => todo.id === action.payload.id,
      )
      toggledTodo.completed = !toggledTodo.completed
    },
  },
})

export const { addTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer
