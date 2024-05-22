import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter';
import { StateSchema } from './StateShema';

export function createReduxStore(initialState?:StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,

    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
