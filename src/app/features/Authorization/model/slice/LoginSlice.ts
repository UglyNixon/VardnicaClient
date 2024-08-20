import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    LoginSchema,
} from 'app/features/Authorization/model/types/LoginShema';
import {
    loginByUserName,
} from 'app/features/Authorization/model/services/loginByUserName/loginByUserName';

const initialState:LoginSchema = {
    error: '',
    isLoading: false,
    email: '',
    password: '',
    rememberMe: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action:PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
