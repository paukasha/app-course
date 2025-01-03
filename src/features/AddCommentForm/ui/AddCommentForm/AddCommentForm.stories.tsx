import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AddCommentForm>;

type Story = StoryObj<typeof AddCommentForm>;
export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
