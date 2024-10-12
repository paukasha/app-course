import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;
export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Label: Story = {
    args: {
        label: 'label',
        options: [
            { content: 'Первый пункт', value: '123' },
            { content: 'Второй пункт', value: '456123' },
        ],
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
