import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;
export const Primary: Story = {
    args: {},
    // decorators: [StoreDecorator({
    //     loginForm: {
    //         username: 'admin',
    //         password: '123',
    //     },
    // })],

};
