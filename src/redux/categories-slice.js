import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: []
    },
    reducers: {
        adminCategoriesList(state, action) {
            state.categories = action.payload;
        }
    }
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;