import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: []
    },
    reducers: {
        adminUsersList(state, action) {
            state.categories = action.payload
        }
    }
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;