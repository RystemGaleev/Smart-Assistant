import { configureStore } from '@reduxjs/toolkit';
// import projectsProvider from './ProjectsSlice';

const store = configureStore({
  reducer: {
    // projects: projectsProvider,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
