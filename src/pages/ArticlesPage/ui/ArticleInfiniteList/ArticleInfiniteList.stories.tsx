import type { Meta, StoryObj } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'shared/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleInfiniteList>;

type Story = StoryObj<typeof ArticleInfiniteList>;
export const Primary: Story = {
    args: {},
};
