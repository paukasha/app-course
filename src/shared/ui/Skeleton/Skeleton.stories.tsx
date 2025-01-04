import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;
export const Primary: Story = {
    args: {
        width: '100%',
        height: '200px',
    },
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: '200px',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: '100px',
        height: '100px',
    },

};
