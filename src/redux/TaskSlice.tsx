import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { ITasks } from '../Interfaces';

interface ITasksInterface {
  tasks: ITasks[];
}

const initialState: ITasksInterface = {
  tasks: [],
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addCard(state, { payload: { description, title } }) {
      state.tasks.push({ description, title, id: uuidv4() });
    },
  },
});

export const { addCard } = TasksSlice.actions;
export default TasksSlice.reducer;

// removeTask(state, action: PayloadAction<string>) {
//   const index = state.findIndex((task) => task.id === action.payload);
//   state.splice(index, 1);
// },
// setTaskStatus(
//   state,
//   action: PayloadAction<{ completed: boolean; id: string }>,
// ) {
//   const index = state.findIndex((task) => task.id === action.payload.id);
//   state[index].completed = action.payload.completed;
// },
