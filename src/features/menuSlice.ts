import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state:MenuState) => {
      state.isOpen = true;
    },
    closeMenu: (state:MenuState) => {
      state.isOpen = false;
    },
    toggleMenu: (state:MenuState) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
