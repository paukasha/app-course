import type { Meta, StoryObj } from '@storybook/react';
import { ArticleEditPage } from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleEditPage>;

type Story = StoryObj<typeof ArticleEditPage>;
export const Primary: Story = {
    args: {},
};
