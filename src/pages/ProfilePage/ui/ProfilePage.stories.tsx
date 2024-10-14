import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;
export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 45,
                country: Country.Russia,
                lastname: 'adminadmin',
                first: 'admin',
                city: 'Moscow',
                currency: Currency.RUB,
            },
        },
    })],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 45,
                country: Country.Russia,
                lastname: 'adminadmin',
                first: 'admin',
                city: 'Moscow',
                currency: Currency.RUB,
            },
        },
    })],
};
