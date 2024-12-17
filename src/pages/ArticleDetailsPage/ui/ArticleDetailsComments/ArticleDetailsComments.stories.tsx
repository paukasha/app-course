import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'shared/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsComments>;

type Story = StoryObj<typeof ArticleDetailsComments>;
export const Primary: Story = {
    args: {},
};
