import { CounterSchema } from 'app/entities/Counter';
import { UserSchema } from 'app/entities/User';
import { LoginSchema } from 'app/features/Authorization';

export interface StateSchema {
    counter:CounterSchema;
    user:UserSchema;
    loginForm?:LoginSchema;

}
