import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        addUser(state, action) {
            const API = 'https://api.qa-ranj.interns.dev.krd/v1/users/register';

            axios.post(API, {
                "role": "responder",
                "firstName": "aaa",
                "lastName": "bbb",
                "displayName": "aaabbb",
                "password": "aaabbb12345",
                "email": "ab@example.com"
            }).catch(() => { alert('Some thing goes wrong!') })
        },
        adminUsersList(state, action) {
            state.users = action.payload
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;