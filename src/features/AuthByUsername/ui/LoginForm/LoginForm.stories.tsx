import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;
export const Primary: Story = {
    args: {},

};
