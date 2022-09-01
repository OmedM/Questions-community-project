import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice.js';
import categoriesSlice from './categories-slice.js';
import roleSlice from './role-slice.js';
import questionSlice from './question-slice.js';
import sidebarSlice from './sidebar-slice.js';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        categories: categoriesSlice.reducer,
        roles: roleSlice.reducer,
        questions: questionSlice.reducer,
        sidebar: sidebarSlice.reducer,
    }
})

export default store;