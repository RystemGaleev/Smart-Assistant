import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { ICard } from '../Interfaces';

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

    deleteCard(state, { payload: id }) {
      const findCard = state.cards.filter((card) => card.id !== id);
      state.cards = findCard;
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
    // setStatus(
    //   state,
    //   { payload: { cardId, color } }: PayloadAction<{ cardId: string; color: string }>,
    // ) {
    //   const cardIndex = state.cards.findIndex((card) => card.id === cardId);
    //   state.cards[cardIndex].status = [{ color }];
    // },

    removeTask(
      state,
      { payload: { cardId, taskId } }: PayloadAction<{ cardId: string; taskId: string }>,
    ) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      if (cardIndex >= 0) {
        state.cards[cardIndex].subTasks = state.cards[cardIndex].subTasks.filter(
          (task) => task.id !== taskId,
        );
      }
    },
    toggleCompletedTask(
      state,
      { payload: { cardId, taskId } }: PayloadAction<{ cardId: string; taskId: string }>,
    ) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);

      if (cardIndex >= 0) {
        const taskIndex = state.cards[cardIndex].subTasks.findIndex((task) => task.id === taskId);
        if (taskIndex >= 0) {
          state.cards[cardIndex].subTasks[taskIndex].completed =
            !state.cards[cardIndex].subTasks[taskIndex].completed;
        }
      }
    },
  },
});

export const { addCard, addTask, removeTask, toggleCompletedTask, deleteCard } = TasksSlice.actions;
export default TasksSlice.reducer;
