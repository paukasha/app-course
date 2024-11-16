import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'shared/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentList>;

type Story = StoryObj<typeof CommentList>;
export const Primary: Story = {
    args: {},
};
