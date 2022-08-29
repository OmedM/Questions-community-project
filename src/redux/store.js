import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice.js';
import testSlice from './test-slice.js';
import categoriesSlice from './categories-slice.js';
import roleSlice from './role-slice.js';
import questionSlice from './question-slice.js';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        test: testSlice.reducer,
        categories: categoriesSlice.reducer,
        roles: roleSlice.reducer,
        questions: questionSlice.reducer,
    }
})

export default store;