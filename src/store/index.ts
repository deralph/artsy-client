import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import loggedSlice from "./side.slice";

export const store = configureStore({
  reducer: {
    sidebar: loggedSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
