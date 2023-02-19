import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { ICard, ITask } from '../Interfaces';

interface ITasksInterface {
  cards: ICard[];
}

const initialState: ITasksInterface = {
  cards: [],
};

const TasksSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addCard(state, { payload: { description, title } }) {
      state.cards.push({
        description,
        title,
        id: uuidv4(),
        subTasks: [],
      });
    },
    addTask(
      state,
      {
        payload: { cardId, taskDescription },
      }: PayloadAction<{ cardId: string; taskDescription: string }>,
    ) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      if (cardIndex >= 0) {
        state.cards[cardIndex].subTasks.push({
          id: uuidv4(),
          description: taskDescription,
          completed: false,
        });
      }
    },
    removeTask(
      state,
      {
        payload: { cardId, taskId },
      }: PayloadAction<{ cardId: string; taskId: string }>,
    ) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      if (cardIndex >= 0) {
        state.cards[cardIndex].subTasks = state.cards[
          cardIndex
        ].subTasks.filter((task) => task.id !== taskId);
      }
    },
    toggleCompletedTask(
      state,
      {
        payload: { cardId, taskId },
      }: PayloadAction<{ cardId: string; taskId: string }>,
    ) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);

      if (cardIndex >= 0) {
        const taskIndex = state.cards[cardIndex].subTasks.findIndex(
          (task) => task.id === taskId,
        );
        if (taskIndex >= 0) {
          state.cards[cardIndex].subTasks[taskIndex].completed =
            !state.cards[cardIndex].subTasks[taskIndex].completed;
        }
      }
    },
  },
});

export const { addCard, addTask, removeTask, toggleCompletedTask } =
  TasksSlice.actions;
export default TasksSlice.reducer;
