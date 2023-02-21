import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  seller: boolean;
}

const initialState: authState = {
  seller: true,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAccountType: (state, action: PayloadAction<boolean>) => {
      state.seller = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccountType } = authSlice.actions;

export default authSlice.reducer;
