import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlide.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '13' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername)).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '13' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword)).toEqual({ password: '123123' });
    });
});
