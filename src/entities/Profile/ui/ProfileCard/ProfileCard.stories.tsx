import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/cat.jpg';
import { ProfileCard } from './ProfileCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

type Story = StoryObj<typeof ProfileCard>;
export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 45,
            country: Country.Russia,
            lastname: 'adminadmin',
            first: 'admin',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar,
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
