import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleInfiniteList} from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleInfiniteList>;

type Story = StoryObj<typeof ArticleInfiniteList>;
export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
