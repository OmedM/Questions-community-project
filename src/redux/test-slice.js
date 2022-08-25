import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const testSlice = createSlice({
    name: 'test',
    initialState: {
        admin: '',
        responder: '',
        user: ''
    },
    reducers: {
        loginAdmin() {
            const API = 'https://api.qa-ranj.interns.dev.krd/v1/auth/login';

            axios.post(API, {
                "email": "admin@example.com",
                "password": "admin12345"
            }).then((response) => { console.log(response.data) }).catch(() => { alert('Some thing goes wrong!') })
        },
        loginResponder(state, action) {
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
        loginUser(state, action) {
            const API = 'https://api.qa-ranj.interns.dev.krd/v1/users/register';

            axios.post(API, {
                "role": "responder",
                "firstName": "aaa",
                "lastName": "bbb",
                "displayName": "aaabbb",
                "password": "aaabbb12345",
                "email": "ab@example.com"
            }).catch(() => { alert('Some thing goes wrong!') })
        }
    }
});

export const testActions = testSlice.actions;

export default testSlice;