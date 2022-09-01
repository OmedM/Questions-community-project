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
            window.localStorage.setItem('token', action.payload.access);
            state.currentToken = window.localStorage.getItem('token')
        },
        adminUsersList(state, action) {
            state.users = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;