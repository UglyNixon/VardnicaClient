import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'app/entities/User/model/types/userShema';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

const initialState:UserSchema = {
    authData: {} as User,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = {} as User;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            // ?expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
