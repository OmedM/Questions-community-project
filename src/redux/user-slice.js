import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: ""
    },
    reducers: {
        addUser(state, action) {
            
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;