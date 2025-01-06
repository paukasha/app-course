import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;
export const Primary: Story = {
    args: {
        title: 'Primary title text',
        text: 'Primary text text',
    },

};
export const OnlyText: Story = {
    args: {
        text: 'Primary text text',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Primary title Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Primary title text',
        text: 'Primary text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};
export const OnlyTextDark: Story = {
    args: {
        text: 'Primary text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Primary title Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorTitle: Story = {
    args: {
        title: 'Error title',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorText: Story = {
    args: {
        title: 'error Text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorTitleText: Story = {
    args: {
        title: 'Error title Text',
        text: 'Error text Text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: 'Text',
        text: 'Text',
        size: TextSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
    args: {
        title: 'Text',
        text: 'Text',
        size: TextSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
