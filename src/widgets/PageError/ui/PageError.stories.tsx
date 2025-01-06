import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

type Story= StoryObj<typeof PageError>

export const Light:Story = {};

export const Dark:Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
