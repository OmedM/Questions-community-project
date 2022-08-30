import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        roles: []
    },
    reducers: {
        roles(state, action) {
            state.roles = action.payload;
        }
    }
});

export const roleActions = roleSlice.actions;

export default roleSlice;