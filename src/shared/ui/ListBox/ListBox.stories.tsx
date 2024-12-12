import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;
export const Primary: Story = {
    args: {},
};
