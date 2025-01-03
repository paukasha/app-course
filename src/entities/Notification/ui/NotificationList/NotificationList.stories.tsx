import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
    title: 'shared/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationList>;

type Story = StoryObj<typeof NotificationList>;
export const Primary: Story = {
    args: {},
};
