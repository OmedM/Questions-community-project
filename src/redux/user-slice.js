import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentToken: []
    },
    reducers: {
        currentUser(state, action) {
            state.currentToken = action.payload.access;
            console.log(state.currentToken)
        },
        adminUsersList(state, action) {
            state.users = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;