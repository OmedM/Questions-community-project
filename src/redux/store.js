import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice.js';
import testSlice from './test-slice.js';
import categoriesSlice from './categories-slice.js';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        test: testSlice.reducer,
        categories: categoriesSlice.reducer,
    }
})

export default store;