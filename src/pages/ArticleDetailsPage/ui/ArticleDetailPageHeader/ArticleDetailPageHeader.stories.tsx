import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';

export default {
    title: 'shared/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailPageHeader>;

type Story = StoryObj<typeof ArticleDetailPageHeader>;
export const Primary: Story = {
    args: {},
};
