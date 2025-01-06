import { StateSchema } from '@/app/provider/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const data = {
        username: 'admin',
        age: 45,
        country: Country.Russia,
        lastname: 'adminadmin',
        first: 'admin',
        city: 'Moscow',
        currency: Currency.RUB,
    };
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
