import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    username: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
        logoutUser: (state) => {
            state.email = null;
            state.token = null;
            state.username = null;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
