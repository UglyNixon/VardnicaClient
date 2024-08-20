import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from 'app/entities/User/model/types/userShema';

const initialState:UserSchema = {
    authData: {} as User,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
