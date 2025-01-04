import {StateSchema} from '@/app/provider/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';

import {UserRole} from '@/entities/User/model/consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles || [];

// eslint-disable-next-line max-len
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles.includes(UserRole.ADMIN)));
// eslint-disable-next-line max-len
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles.includes(UserRole.MANAGER)));
