import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        sidebar: true,
    },
    reducers: {
        toggle(state) {
            state.sidebar = !state.sidebar;
        }
    }
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;