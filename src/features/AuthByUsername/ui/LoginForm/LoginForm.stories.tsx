import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

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
    // decorators: [StoreDecorator({
    //     loginForm: {
    //         username: 'admin',
    //         password: '123',
    //     },
    // })],

};

export const withError: Story = {
    args: {},
    // decorators: [StoreDecorator({
    //     loginForm: {
    //         username: 'admin',
    //         password: '123',
    //         error: 'ERROR',
    //     },
    // })],

};

export const Loading: Story = {
    args: {},
    // decorators: [StoreDecorator({
    //     loginForm: {
    //         isLoading: true,
    //     },
    // })],
};
