// store/cartUI.ts
import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  shouldShake: boolean;
}

const initialState: UIState = { shouldShake: false };

const cartUISlice = createSlice({
  name: 'cartUI',
  initialState,
  reducers: {
    triggerShake(state) {
      state.shouldShake = true;
    },
    resetShake(state) {
      state.shouldShake = false;
    },
  },
});

export const { triggerShake, resetShake } = cartUISlice.actions;
export default cartUISlice.reducer;
