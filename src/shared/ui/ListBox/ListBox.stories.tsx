import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '200px' }}><Story /></div>,
    ],
} as Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;
export const Primary: Story = {
    args: {
        defaultValue: '123',
        items: [
            { content: '123', value: '123' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        defaultValue: '123',
        items: [
            { content: '123', value: '123' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        defaultValue: '123',
        items: [
            { content: '123', value: '123' },
        ],
    },

};
