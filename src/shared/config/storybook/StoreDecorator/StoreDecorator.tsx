import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
