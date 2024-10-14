import { StateSchema } from 'app/provider/StoreProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { getProfileErrors } from './getProfileErrors';

describe('getProfileErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_AGE,

                ],
            },
        };
        expect(getProfileErrors(state as StateSchema)).toEqual([
            'SERVER_ERROR',
            'INCORRECT_AGE',
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileErrors(state as StateSchema)).toEqual(undefined);
    });
});
