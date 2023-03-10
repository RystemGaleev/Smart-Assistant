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
    addCard(state, { payload: { description, title } }: PayloadAction<ICard>) {
      state.cards.push({
        description,
        title,
        id: uuidv4(),
        subTasks: [],
        status: 'Not urgent',
        color: '#2773e5',
      });
    },

    updateStatus(state, { payload: { cardId, status } }: PayloadAction<{ cardId: string; status: ICard['status'] }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      state.cards[cardIndex].status = status;
    },
    updateTitle(state, { payload: { cardId, newTitle } }: PayloadAction<{ cardId: string; newTitle: string }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      state.cards[cardIndex].title = newTitle;
    },
    updateDescription(state, { payload: { cardId, newDescription } }: PayloadAction<{ cardId: string; newDescription: string }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      state.cards[cardIndex].description = newDescription;
    },

    updateColor(state, { payload: { cardId, color } }: PayloadAction<{ cardId: string; color: ICard['color'] }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      state.cards[cardIndex].color = color;
    },

    addTask(state, { payload: { cardId, taskDescription } }: PayloadAction<{ cardId: string; taskDescription: string }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      if (cardIndex >= 0) {
        state.cards[cardIndex].subTasks.push({ id: uuidv4(), description: taskDescription, completed: false });
      }
    },

    deleteCard(state, { payload: id }) {
      const findCard = state.cards.filter((card) => card.id !== id);
      state.cards = findCard;
    },

    removeTask(state, { payload: { cardId, taskId } }: PayloadAction<{ cardId: string; taskId: string }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);

      if (cardIndex >= 0) {
        state.cards[cardIndex].subTasks = state.cards[cardIndex].subTasks.filter((task) => task.id !== taskId);
      }
    },
    toggleCompletedTask(state, { payload: { cardId, taskId } }: PayloadAction<{ cardId: string; taskId: string }>) {
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);

      if (cardIndex >= 0) {
        const taskIndex = state.cards[cardIndex].subTasks.findIndex((task) => task.id === taskId);
        if (taskIndex >= 0) {
          state.cards[cardIndex].subTasks[taskIndex].completed = !state.cards[cardIndex].subTasks[taskIndex].completed;
        }
      }
    },
  },
});

export const {
  addCard,
  deleteCard,
  updateStatus,
  updateColor,
  updateTitle,
  updateDescription,
  addTask,
  removeTask,
  toggleCompletedTask,
} = TasksSlice.actions;
export default TasksSlice.reducer;
