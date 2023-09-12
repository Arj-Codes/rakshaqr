import { createSlice } from "@reduxjs/toolkit";

interface initialProp {
  active: number;
  isOpen: boolean;
}

const initialState: initialProp = {
  active: 3,
  isOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setActive, setOpen } = userSlice.actions;

export default userSlice.reducer;
