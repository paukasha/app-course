import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AddCommentForm>;

type Story = StoryObj<typeof AddCommentForm>;
export const Primary: Story = {
    args: {},
};
