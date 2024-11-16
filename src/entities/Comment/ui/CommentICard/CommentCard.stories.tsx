import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'shared/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentCard>;

type Story = StoryObj<typeof CommentCard>;
export const Primary: Story = {
    args: {},
};
