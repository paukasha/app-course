import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { profileActions, profileReducer } from './profileSlice';
import { ProfileScheme, ValidateProfileErrors } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 45,
    country: Country.Russia,
    lastname: 'adminadmin',
    first: 'admin',
    city: 'Moscow',
    currency: Currency.RUB,
};
// profileActions, profileSlice, profileReducer;
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit(),
        ))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
