import axios from 'axios';
import type { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'app/entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginDto{
        email:string;
        password:string;
}
export const loginByUserName = createAsyncThunk<User, LoginDto, {rejectValue:string}>(
    'authorization/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:7000/api/auth/login', authData);
            if (!response.data) {
                throw new Error('No data');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, response.data.access_token);
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            document.cookie = `token=${response.data.refresh_token}`;
            return response.data;
        } catch (error:AxiosError | any) {
            return thunkAPI.rejectWithValue(i18n.t('Неверная почта или пароль'));
        }
    },
);
