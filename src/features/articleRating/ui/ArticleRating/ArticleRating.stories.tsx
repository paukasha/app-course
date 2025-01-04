import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

export default {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleRating>;

type Story = StoryObj<typeof ArticleRating>;
export const Primary: Story = {
    args: {},
};
