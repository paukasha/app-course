import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

type Story= StoryObj<typeof Navbar>

export const Light :Story = {
    args: {},
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
};
export const Dark :Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: {} },
    })],
};

export const AuthNavbar: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: {} },
    })],
};
