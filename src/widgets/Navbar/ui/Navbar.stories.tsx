import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Navbar } from './Navbar';

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
    decorators: [],
};
export const Dark :Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthNavbar: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
