import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

type Story= StoryObj<typeof Sidebar>

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
};

export const Dark:Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
};

export const NoAuth: Story = {
    args: {},
    decorators: [StoreDecorator({ user: {} })],
};
