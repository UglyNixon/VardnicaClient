import axios from 'axios';
import type { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'app/entities/User';

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
            return response.data;
        } catch (error:AxiosError | any) {
            const message:string = (error.response?.data?.message as string) || 'Unexpected error';
            return thunkAPI.rejectWithValue(message);
        }
    },
);
