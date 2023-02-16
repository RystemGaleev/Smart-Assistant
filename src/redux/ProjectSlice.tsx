import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { IProjectProps } from '../Interface';

// interface ProjectState {
//   projects: IProjectProps[];
//   loading: boolean;
//   error: string | null;
// }

// export const fetchProjects = createAsyncThunk<
//   IProjectProps[],
//   undefined,
//   { rejectValue: string }
// >('projects/fetchProjects', async (_, { rejectWithValue }) => {
//   const response = await fetch(import.meta.env.VITE_PROJECTS_API);
//   if (!response.ok) {
//     return rejectWithValue('sever Error!');
//   }
//   const data: IProjectProps[] = await response.json();

//   return data;
// });

// const initialState: ProjectState = {
//   projects: [],
//   loading: false,
//   error: null,
// };

// const projectsSlice = createSlice({
//   name: 'projects',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProjects.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchProjects.fulfilled, (state, action) => {
//       state.projects = action.payload;
//       state.loading = false;
//     });
//   },
// });

// export default projectsSlice.reducer;
