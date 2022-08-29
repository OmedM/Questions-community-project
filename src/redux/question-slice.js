import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        questions: []
    },
    reducers: {
        questions(state, action) {
            state.questions = action.payload;
        }
    }
});

export const questionActions = questionSlice.actions;

export default questionSlice;