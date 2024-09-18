import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;
export const Primary: Story = {
    args: {
        placeholder: 'Type Text',
        value: '12123',
    },

};
