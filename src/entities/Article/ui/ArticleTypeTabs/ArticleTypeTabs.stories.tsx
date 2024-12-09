import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleTypeTabs>;

type Story = StoryObj<typeof ArticleTypeTabs>;
export const Primary: Story = {
    args: {},
};
