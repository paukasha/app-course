import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleDetailPageHeader} from './ArticleDetailPageHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailPageHeader>;

type Story = StoryObj<typeof ArticleDetailPageHeader>;
export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
