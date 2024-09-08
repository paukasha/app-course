import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
    args: {
        to: '/',
    },
} as Meta<typeof Loader>;

type Story= StoryObj<typeof Loader>
export const Normal:Story = {
    args: {},
};

export const Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
