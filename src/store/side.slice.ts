import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface loggedState {
  open: boolean;
  shopBy: boolean;
  Notifications: boolean;
}

const initialState: loggedState = {
  open: false,
  shopBy: false,
  Notifications: false,
};

export const loggedSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    side: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },

    shop: (state, action: PayloadAction<boolean>) => {
      state.shopBy = action.payload;
    },
    viewNotification: (state, action: PayloadAction<boolean>) => {
      state.Notifications = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { side, shop, viewNotification } = loggedSlice.actions;

export default loggedSlice.reducer;
