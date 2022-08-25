import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user-slice.js';
import testSlice from './test-slice.js';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        test: testSlice.reducer
    }
})

export default store;