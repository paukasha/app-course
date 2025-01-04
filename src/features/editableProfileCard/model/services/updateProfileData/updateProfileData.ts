import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/provider/StoreProvider';
// eslint-disable-next-line max-len
import {ValidateProfileErrors} from '@/features/editableProfileCard/model/consts/consts';
import {validateProfileData} from '../validateProfileData/validateProfileData';
import {Profile} from '../../../../../entities/Profile/model/types/profile';
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm';

// eslint-disable-next-line max-len
export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const { rejectWithValue, extra, getState } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
            }
        },
    );
