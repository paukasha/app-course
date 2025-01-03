import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationItem>;

type Story = StoryObj<typeof NotificationItem>;
export const Primary: Story = {
    args: {},
};
