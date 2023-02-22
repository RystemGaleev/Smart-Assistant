import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IPost } from '../Interfaces';

interface ILibraryInterface {
  posts: IPost[];
}

const initialState: ILibraryInterface = {
  posts: [],
};

const LibrarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addPost(state, { payload: { description, title, img } }: PayloadAction<IPost>) {
      state.posts.push({ description, title, img, id: uuidv4() });
    },
    deletePost(state, { payload: { id } }: PayloadAction<{ id: string }>) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
});

export const { addPost, deletePost } = LibrarySlice.actions;
export default LibrarySlice.reducer;
